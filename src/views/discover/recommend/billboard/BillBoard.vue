<template>
  <div class="n-bill">
    <div class="header2">
      <div class="tit">榜单</div>
      <span class="more">
        <div class="txt">更多</div>
        <i class="cor"></i>
      </span>
    </div>
    <div class="n-bilst">
      <bill-sub-list>
        <template v-slot:img>
          <img :src="speedUpBoard.coverImgUrl" alt="" class="j-img">
          <a href="javascript:void(0);" class="msk"></a>
        </template>
        <template v-slot:title>
          <a href="javascript:void(0);">
            <h3 class="f-fs1 f-thide">{{speedUpBoard.name}}</h3>
          </a>
          <div class="btn">
            <a href="javascript:void(0);" title="播放" class="play"></a>
            <a href="javascript:void(0);" title="收藏" class="collect"></a>
          </div>
        </template>
        <template v-slot:list>
          <ol>
            <template v-for="(item, index) in speedUpBoard.tracks">
              <li :key="index" v-if="index < 10">
                <span class="no" :class="{'no-top': index < 3}">{{index + 1}}</span>
                <a href="javascript:void(0);" class="nm f-thide">{{item.name}}</a>
                <div class="oper">
                  <a href="javascript:void(0);" class="s-bg s-bg-11" title="播放" @click="playClick(item.id)"></a>
                  <a href="javascript:void(0);" class="u-icn u-icn-81" title="添加到播放列表" @click="addClick(item.id)"></a>
                  <a href="javascript:void(0);" class="s-bg s-bg-12" title="收藏"></a>
                </div>
              </li>
            </template>
          </ol>
          <div class="more">
            <a href="javascript:void(0);" class="s-fc0" @click="checkMore(0)">查看全部></a>
          </div>
        </template>
      </bill-sub-list>
      <bill-sub-list>
        <template v-slot:img>
          <img :src="newSongsBoard.coverImgUrl" alt="" class="j-img">
          <a href="javascript:void(0);" class="msk"></a>
        </template>
        <template v-slot:title>
          <a href="javascript:void(0);">
            <h3 class="f-fs1 f-thide">{{newSongsBoard.name}}</h3>
          </a>
          <div class="btn">
            <a href="javascript:void(0);" title="播放" class="play"></a>
            <a href="javascript:void(0);" title="收藏" class="collect"></a>
          </div>
        </template>
        <template v-slot:list>
          <ol>
            <template v-for="(item, index) in newSongsBoard.tracks">
              <li :key="index" v-if="index < 10">
                <span class="no" :class="{'no-top': index < 3}">{{index + 1}}</span>
                <a href="javascript:void(0);" class="nm f-thide">{{item.name}}</a>
                <div class="oper">
                  <a href="javascript:void(0);" class="s-bg s-bg-11" title="播放" @click="playClick(item.id)"></a>
                  <a href="javascript:void(0);" class="u-icn u-icn-81" title="添加到播放列表" @click="addClick(item.id)"></a>
                  <a href="javascript:void(0);" class="s-bg s-bg-12" title="收藏"></a>
                </div>
              </li>
            </template>
          </ol>
          <div class="more">
            <a href="javascript:void(0);" class="s-fc0" @click="checkMore(1)">查看全部></a>
          </div>
        </template>
      </bill-sub-list>
      <bill-sub-list class="blk-1">
        <template v-slot:img>
          <img :src="originalBoard.coverImgUrl" alt="" class="j-img">
          <a href="javascript:void(0);" class="msk"></a>
        </template>
        <template v-slot:title>
          <a href="javascript:void(0);">
            <h3 class="f-fs1 f-thide">{{originalBoard.name}}</h3>
          </a>
          <div class="btn">
            <a href="javascript:void(0);" title="播放" class="play"></a>
            <a href="javascript:void(0);" title="收藏" class="collect"></a>
          </div>
        </template>
        <template v-slot:list>
          <ol>
            <template v-for="(item, index) in originalBoard.tracks">
              <li :key="index" v-if="index < 10">
                <span class="no" :class="{'no-top': index < 3}">{{index + 1}}</span>
                <a href="javascript:void(0);" class="nm f-thide">{{item.name}}</a>
                <div class="oper">
                  <a href="javascript:void(0);" class="s-bg s-bg-11" title="播放" @click="playClick(item.id)"></a>
                  <a href="javascript:void(0);" class="u-icn u-icn-81" title="添加到播放列表" @click="addClick(item.id)"></a>
                  <a href="javascript:void(0);" class="s-bg s-bg-12" title="收藏"></a>
                </div>
              </li>
            </template>
          </ol>
          <div class="more">
            <a href="javascript:void(0);" class="s-fc0" @click="checkMore(2)">查看全部></a>
          </div>
        </template>
      </bill-sub-list>
    </div>
  </div>
</template>

<script>
import BillSubList from './BillSubList';
import {getSongUrl, getSongDetail, Song, getLyric, checkCopyright} from '../../../../service/songs.js'
import eventBus from '../../../../common/utils/mitt/eventBus.js'

export default {
  name: "BillBoard",
  components: {BillSubList},
  created() {
  },
  data() {
    return {
      songDetail: {},
      songUrl: {}
    };
  },
  props: {
    speedUpBoard: {
      type: Object,
      default() {
        return {}
      }
    },
    newSongsBoard: {
      type: Object,
      default() {
        return {}
      }
    },
    originalBoard: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  methods: {
    // 查看更多榜单信息
    checkMore(index) {
      // 进入榜单页面
      this.$store.commit('changeSubBarIndex', 1)
      this.$store.commit('changeCategoryIndex', index)
      // console.log('router-to');
      this.$router.replace('/discover/toplist')
    },
    // 添加到播放列表
    addClick(id) {
      // 检查是否版权受限
      checkCopyright(id).then(res => {
        // 有版权
        if (res !== undefined && res.data.success) {
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
  }
};
</script>

<style lang="scss" scoped></style>