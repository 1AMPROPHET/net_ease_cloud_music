<template>
  <div id="song-list-pre-cache">
    <table class="m-table m-table-rank">
      <thead>
        <tr>
          <th class="first w1"></th>
          <th>
            <div class="wp">标题</div>
          </th>
          <th class="w2-1">
            <div class="wp">时长</div>
          </th>
          <th class="w3-1">
            <div class="wp">歌手</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in currentList.tracks" :key="index" :class="{even: index % 2 === 0}">
          <td>
            <div class="hd">
              <span class="num">{{index + 1}}</span>
              <div class="rk">
                <span class="u-icn u-icn-75">{{}}</span>
              </div>
            </div>
          </td>
          <td :class="{rank: index < 3}">
            <div class="f-cb">
              <div class="tt">
                <a href="" v-if="index < 3">
                  <img :src="item.al.picUrl" alt="" class="rpic">
                </a>
                <span class="ply" @click="playClick(item.id)">&nbsp;</span>
                <div class="ttc">
                  <span class="txt">
                    <a href="">
                      <b :title="item.al.name">{{item.al.name}}</b>
                    </a>
                    <span class="s-fc8" v-if="item.alia[0] !== undefined"> - {{item.alia[0]}}</span>
                    <span class="mv" title="播放mv" v-if="item.mv !== 0"></span>
                  </span>
                </div>
              </div>
            </div>
          </td>
          <td class="s-fc3">
            <span class="u-dur">{{format(item.dt)}}</span>
            <div class="opt hshow">
              <a href="javascript:void(0);" class="u-icn u-icn-81 icn-add" title="添加到播放列表" @click="addClick(item.id)"></a>
              <span class="icn icn-fav" title="收藏"></span>
              <span class="icn icn-share" title="分享"></span>
              <span class="icn icn-dl" title="下载"></span>
            </div>
          </td>
          <td>
            <div class="text" :title="item.ar[0].name">
              <span :title="item.ar[0].name">
                <a href="">{{item.ar[0].name}}</a>
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import eventBus from '../../../../common/utils/mitt/eventBus.js'
import {getSongDetail, getSongUrl, getLyric, Song, checkCopyright} from '../../../../service/songs.js'

export default {
  name: "SongList",
  created() {},
  data() {
    return {};
  },
  props: {
    currentList: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    // 歌曲时长格式化
    format(num) {
      let time = new Date(num)
      let minute = time.getMinutes()
      let second = time.getSeconds()
      minute = minute > 9 ? minute : '0' + minute
      second = second > 9 ? second : '0' + second
      return minute + ':' + second
    },
    // 添加到播放列表
    addClick(id) {
      // 检查是否版权受限
      checkCopyright(id).then(res => {
        // 有版权
        if (res !== undefined) {
          if (this.$store.state.playList.length === 0) {
            // 直接添加并播放
            this.addToList(id)
          } else {
            // 有歌曲，遍历id
            for (let i = 0; i < this.$store.state.playList.length; i++) {
              //  存在相同歌曲
              if (this.$store.state.playList[i].id === id) {
                eventBus.emit('alreadyAdded')
                break
              }
              if (i === this.$store.state.playList.length - 1) {
                // 不存在相同歌曲
                this.addToList(id)
              }
            }
          }
        }
        // 无版权
        else {
          eventBus.emit('noCopyright')
        }
      })
    },
    // 直接点击播放,方法同上
    playClick(id) {
      checkCopyright(id).then(res => {
        if (res !== undefined && res.data.success) {
          // 播放列表中没有歌曲
          if (this.$store.state.playList.length === 0) {
            // 直接添加并播放
            this.addAndPlay(id)
          } else {
            // 有歌曲，遍历id
            for (let i = 0; i < this.$store.state.playList.length; i++) {
              //  存在相同歌曲
              if (this.$store.state.playList[i].id === id) {
                eventBus.emit('alreadyInList', i)
                break
              }
              if (i === this.$store.state.playList.length - 1) {
                // 不存在相同歌曲
                this.addAndPlay(id)
              }
            }
          }
        }
        // 无版权 
        else {
          eventBus.emit('noCopyright')
        }
      })
    },
    addAndPlay(id) {
      getSongDetail(id).then(res => {
        this.songDetail = res.data.songs[0]
        getSongUrl(id).then(res => {
          this.songUrl = res.data.data[0]
          getLyric(id).then(res => {
            let song = new Song(this.songDetail, this.songUrl, res.data.lrc.lyric.split('\n'))
            this.$store.commit('addAndPlay', song)
            // 这里调用了封装的好的 mitt()，作为事件总线
            eventBus.emit('addAndPlay')
          })
        })
      })
    },
    addToList(id) {
      // 歌曲详情
      getSongDetail(id).then(res => {
        this.songDetail = res.data.songs[0]
        // console.log(res.data.songs[0]);
        // 歌曲url
        getSongUrl(id).then(res => {
          this.songUrl = res.data.data[0]
          // console.log(res.data.data[0]);
          // 歌词
          getLyric(id).then(res => {
            // console.log(res.data.lrc.lyric.split('\n'));
            let song = new Song(this.songDetail, this.songUrl, res.data.lrc.lyric.split('\n'))
            this.$store.commit('addToPlayList', song)
          })
        })
      })
    }
  },
  computed: {
  }
};
</script>

<style lang="scss" scoped></style>