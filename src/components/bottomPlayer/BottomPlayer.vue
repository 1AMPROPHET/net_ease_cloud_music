<template>
  <div class="g-btmbar">
    <div class="m-playbar"
      :class="{'m-playbar-unlock': !locked, 
      'm-playbar-lock': locked,
      playbarHold: hold || locked}" 
      style="top: -7px; visibility: visible; transition: 300ms ease" 
      id="playBar"
      @mouseenter="playbarHold(true)"
      @mouseleave="playbarHold(false)">
      <div class="updn">
        <div class="left f-f1">
          <a href="javascript:void(0);" class="btn" @click="playbarLock"></a>
        </div>
        <div class="right"></div>
      </div>
      <div class="bg"></div>
      <div class="hand"></div>
      <div class="wrap" id="g-player" style="margin-left: -498.5px">
        <div class="btns">
          <a href="javascript:void(0);" title="上一首" class="prv" @click="previousSong"></a>
          <a href="javascript:void(0);" 
            title="播放/暂停(p)" 
            class="ply j-flag"
            :class="{pause: isPlaying}" 
            @click="playClick">
          </a>
          <audio controls id="audioPlayer" hidden="true" loop="true">
            <source :src="currentSong.url" type="audio/mpeg">
          </audio>
          <a href="javascript:void(0);" title="下一首" class="nxt" @click="nextSong"></a>
        </div>
        <div class="head j-flag">
          <img src="../../../src/assets/img/playerbar/default_album.jpg" alt="" id="songPic">
          <a href="javascript:void(0);" class="mask"></a>
        </div>
        <div class="play">
          <div class="j-flag words"></div>
          <div class="m-pbar">
            <div class="barbg j-flag" id="totalWidth">
              <div class="rdy" style="width: 0%"></div>
              <div class="cur" style="width: 0%" id="songProgressBar">
                <span class="btn f-tdn f-alpha" @mousedown="songSliderPress" @mouseup="songSliderLose" id="songSlider">
                  <i></i>
                </span>
              </div>
            </div>
            <div class="j-flag time">
              <em>{{currentTime}}</em> / {{formatTime(currentSong.time)}}
            </div>
          </div>
        </div>
        <div class="oper f-f1">
          <a href="javascript:void(0);" class="icn icn-add j-flag" title="收藏"></a>
          <a href="javascript:void(0);" class="icn icn-share j-flag" title="分享"></a>
        </div>
        <div class="ctrl f-f1 f-pr j-flag">
          <div class="m-vol" style="visibility: hidden" :class="{visibility: visible}">
            <div class="barbg"></div>
            <div class="vbg j-t">
              <div class="curr j-t" style="height: 93px" id="volPillar"></div>
              <span 
                class="btn f-alpha j-t" 
                style="top: 0px"
                @mousedown="volPress"
                id="volController">
              </span>
            </div>
          </div>
          <a href="javascript:void(0);" class="icn icn-vol" @click="volumeClick"></a>
          <a href="javascript:void(0);" class="icn icn-loop" title="循环"></a>
          <span class="add f-pr">
            <span class="tip" style="display: none">已添加到播放列表</span>
            <a href="javascript:void(0);" 
              class="icn icn-list s-fc3"
              @click="showPlayList">
              {{$store.state.playList.length}}
            </a>
          </span>
        </div>
      </div>
      <div class="list" id="g_playlist" v-show="isPlayListShow">
        <div class="listhd">
          <div class="listhdc">
            <h4>播放列表(
              <span class="j-flag">{{$store.state.playList.length}}</span>
              )
            </h4>
            <a href="javascript:void(0);" class="addall">
              <span class="ico ico-add"></span>
              收藏全部
            </a>
            <span class="line1"></span>
            <a href="javascript:void(0);" class="clear">
              <span class="ico icn-del"></span>
              清除
            </a>
            <p class="lytit f-ff0 f-thide j-flag">{{currentSong.name}}</p>
            <span class="close" @click="closePlayList"></span>
          </div>
        </div>
        <div class="listbd">
          <div class="msk"></div>
          <div class="listbdc j-flag">
            <ul class="f-cb">
              <li v-for="(item, index) in $store.state.playList" 
                :key="index"
                :class="{'z-sel': index === currentSongIndex}" 
                @click="playSelect(index)">
                <div class="col col-1">
                  <div class="playicn"></div>
                </div>
                <div class="col col-2">{{item.name}}</div>
                <div class="col col-3">
                  <div class="icns">
                    <i class="ico icn-del" title="删除"></i>
                    <i class="ico ico-dl" title="下载"></i>
                    <i class="ico ico-share" title="分享"></i>
                    <i class="ico ico-add" title="收藏"></i>
                  </div>
                </div>
                <div class="col col-4">
                  <span :title="formatName(item.artist)">
                    <a href="javascript:void(0);">{{formatName(item.artist)}}</a>
                  </span>
                </div>
                <div class="col col-5">{{formatTime(item.time)}}</div>
                <div class="col col-6">
                  <a href="javascript:void(0);" class="ico ico-src" title="来自榜单"></a>
                </div>
              </li>
            </ul>
          </div>
          <div class="bline j-flag">
            <span class="scrol" style="height: 260px; display: none; top: 0px"></span>
          </div>
          <div class="ask j-flag">
            <a href="javascript:void(0);" class="ico ico-ask"></a>
          </div>
          <div class="msk2"></div>
          <div class="listlyric j-flag">
            <div class="scroll" id="lyricScroll">
              <p 
                class="j-flag" 
                :class="{'z-sel': currentLyricIndex === indey}"
                v-for="(line, indey) in currentSong.lyric" 
                :key="indey">
                {{formatLyric(line)}}
              </p>
            </div>
          </div>
          <div class="bline bline-1 j-flag">
            <span class="scrol scrol-1 j-flag" id="lyricSlide" style="height: 260px; display: block; top: 0px"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from '../../common/utils/mitt/eventBus.js'

export default {
  name: "bottomPlayer",
  created() {
    
  },
  mounted() {
    setTimeout(() => {
      this.showPlayBar()
    }, 100);
    eventBus.on('addAndPlay', () => {
      this.currentSongIndex = 0
      clearInterval(this.timer)
      this.isPlaying = false
      this.pause = false
      this.playClick()
    })
    eventBus.on('alreadyInList', (i) => {
      this.currentSongIndex = i
      clearInterval(this.timer)
      this.isPlaying = false
      this.pause = false
      this.playClick()
    })
  },
  data() {
    return {
      visible: false,
      evt: null,
      hold: false,
      locked: false,
      isPlaying: false,
      pause: false,
      currentSong: {},
      currentLyricIndex: 0,
      currentSongIndex: 0,
      scrollHeight: 0,
      isPlayListShow: false,
      currentTime: '00:00',
      playPercent: 0,
      timer: null
    };
  },
  props: {},
  methods: {
    // 监听鼠标移动到底部时显示播放栏
    showPlayBar() {
      let playBar = document.getElementById('playBar')
      // 判断距离
      if (playBar !== null && playBar !== undefined) {
        this.evt = document.onmousemove = function(e) {
          if (e.y > 720) {
            playBar.style.top = '-53px'
          } else {
            playBar.style.top = '-7px'
          }
        }
      }
    },
    // 音量栏的显示
    volumeClick() {
      this.visible = !this.visible
    },
    // 鼠标停留时，播放栏停留
    playbarHold(flag) {
      this.hold = flag
    },
    // 播放栏锁定
    playbarLock() {
      this.locked = !this.locked
    },
    playClick() {
      if (this.$store.state.playList.length !== 0) {
        // 找到播放器
        let myPlayer = document.getElementById('audioPlayer')
        let songImg = document.getElementById('songPic')

        // 获得歌词滑块
        let slide = document.getElementById('lyricSlide')
        // 获得滚动区域
        let lyricScroll = document.getElementById('lyricScroll')
        // 所有歌词的行
        let allP = lyricScroll.getElementsByTagName('p')

        // 获得歌曲进度条
        let songProgress = document.getElementById('songProgressBar')

        // 暂停或播放
          this.isPlaying = !this.isPlaying

        clearInterval(this.timer)
        // 判断状态
        // 播放，且不是暂停的情况，第一次播放
        if (this.isPlaying && !this.pause) {

          this.currentSong = this.$store.getters.playSong(this.currentSongIndex)
          // 改变播放器的源，改变图片
          // console.log(this.currentSong);
          myPlayer.src = this.currentSong.url
          songImg.src = this.currentSong.pic

          // 改变歌词侧滑块的长度
          slide.style.height = (260 / (this.currentSong.lyric.length * 32)).toFixed(4) * 220 + 'px'
          // 播放
          myPlayer.play()
        } 
        // 暂停后的播放
        else if (this.isPlaying && this.pause) {
          myPlayer.play()
          this.pause = false
        } 
        // 暂停
        else if (!this.isPlaying && !this.pause) {
          this.pause = true
          myPlayer.pause()
          clearInterval(this.timer)
        }

        this.getLyricTime(0)
        // 滚动歌词
        // 先获取播放的时间,需要的格式为xx:xx.xxx
        if (this.isPlaying) {
          this.timer = setInterval(() => {

            for (let i = 0; i < this.currentSong.lyric.length;i++) {
              // 获取每句歌词的时间
              let lrcTime = this.getLyricTime(i)
              // 当前播放的时间
              let timeNow = myPlayer.currentTime
              // 进度条上显示的时间
              this.currentTime = this.audioTimeFormat(timeNow)
              // 歌曲进度条的长度，百分比
              songProgress.style.width = ((timeNow / lrcTime) * 100) + '%'

              // 比较时间大小，可以得到当前应该播放到哪一句
              if (timeNow > lrcTime) {
                // 播放到的前的所有p元素高度
                this.scrollHeight += allP[i].offsetHeight
                // 当前播放的行数
                this.currentLyricIndex = i
              }
            }
            // 滚动到相应位置
            lyricScroll.style.transform = `translateY(${-this.scrollHeight + 100}px)`
            // 滚动值归零
            this.scrollHeight = 0

            // console.log('------------');
          }, 200);
        }
      }
    },
    getLyricTime(index) {
      let lrcTime = this.currentSong.lyric[index].substr(1, 9)
      // 分钟转数字可以去掉前面的0
      let lrcTimeMin = parseInt(lrcTime.split(":")[0]);//1
      // 虽然末尾有0，不过要转成数字比大小
      let lrcTimeSec = parseFloat(lrcTime.split(":")[1]);//15.8
      lrcTime = lrcTimeMin * 60 + lrcTimeSec;
      
      // 得到了歌词的shijain
      // console.log(lrcTime);
      return lrcTime
    },
    // 歌手名字格式化
    formatName(list) {
      let ans = []
      for (let i = 0; i < list.length; i++) {
        ans.push(list[i].name)
      }
      return ans.join('/')
    },
    // 时间格式化
    formatTime(num) {
      if (num !== null && num !== undefined) {
        let time = new Date(num)
        let minute = time.getMinutes()
        let second = time.getSeconds()
        minute = minute > 9 ? minute : '0' + minute
        second = second > 9 ? second : '0' + second
        return minute + ':' + second
      } else {
        return '00:00'
      }
    },
    // 播放时间的格式化
    audioTimeFormat(timeNow) {
      if (timeNow !== null && timeNow !== undefined) {
        // 获取分钟
        let timeMinute = String(Math.floor(timeNow / 60))
        // 分钟格式化
        timeMinute = timeMinute.length < 2 ? '0' + timeMinute : timeMinute
        // 获取秒
        let timeSecond = String(Math.floor(timeNow % 60))
        // 格式化
        timeSecond = timeSecond.length < 2 ? '0' + timeSecond : timeSecond
        // // 小数点后三位
        // let timeMilSec = String(timeNow)
        // // 取小数点后三位
        // timeMilSec = timeMilSec.substr(timeMilSec.indexOf('.') + 1, 3)
        // 得到时间戳
        let lyricTime = timeMinute + ':' + timeSecond
        return lyricTime
      } 
      // 如果为零则返回00：00
      else {
        return '00:00'
      }
    },
    // 歌词格式化
    formatLyric(str) {
      return str.substr(11, str.length)
    },
    // 选择播放的歌曲
    playSelect(index) {
      this.currentSongIndex = index
      this.isPlaying = false
      this.playClick()
    },
    // 调节音量
    volPress(ev) {
      // console.log(e);
      // 获取音量按钮
      let controller = document.getElementById('volController')
      // 获取音量柱
      let pillar = document.getElementById('volPillar')
      // 获取播放器
      let myAudio = document.getElementById('audioPlayer')
      // 起始距离
      let distance = ev.clientY - controller.offsetTop
      // 监听拖动
      document.onmousemove = (event) => {
        // 改变高度,拖动距离
        let top = event.clientY - distance

        if (top < 0) {
          top = 0
        }
        if (top > 81) {
          top = 81
        }
        // 音量柱的高度
        let height = (81 - top) / 81 * 93
        // 改变音量大小
        myAudio.volume = (81 - top) / 81
        // 改变style
        controller.style.top = top + 'px'
        pillar.style.height = height + 'px'
      }
      // 鼠标抬起
      document.onmouseup = () => {
        document.onmousemove = null
      }
    },
    // 歌曲进度调整
    songSliderPress(e) {
      // 获取歌曲进度滑块
      let songSlider = document.getElementById('songSlider')
      // 歌曲进度条
      let songProgress = document.getElementById('songProgressBar')
      // 鼠标起始点的距离，设置在滑块的中点
      let distance = e.clientX - songSlider.offsetLeft - songSlider.offsetWidth / 2
      // 播放百分比
      // console.log(this.playPercent);

      document.onmousemove = (event) => {
        // 计算移动的距离
        let left = event.clientX - distance
        // 划过的比例
        this.playPercent = left / 493
        // 控制比例大小
        if (this.playPercent >= 1) {
          this.playPercent = 1
        } 
        else if (this.playPercent <= 0) {
          this.playPercent = 0
        }
        // 设置宽度
        songProgress.style.width = this.playPercent * 100 + '%'
      }
      document.onmouseup = () => {
        setTimeout(() => {
          document.onmousemove = null
        }, 100);
      }
    },
    songSliderLose() {
      // 获取播放器
      let audioPlayer = document.getElementById('audioPlayer')
      // 播放器的进度
      audioPlayer.currentTime = this.playPercent * this.currentSong.time / 1000
      document.onmousemove = null
    },
    // 显示/隐藏播放列表
    showPlayList() {
      this.isPlayListShow = !this.isPlayListShow
    },
    // 上一首歌
    previousSong() {
      clearInterval(this.timer)
      // 序号减一
      this.currentSongIndex -= 1
      if (this.currentSongIndex < 0) {
        // 第一首之前是最后一首
        this.currentSongIndex = this.$store.state.playList.length - 1
      }
      // 初始状态
      this.isPlaying = false
      this.pause = false
      this.playClick()
    },
    // 下一首歌
    nextSong() {
      clearInterval(this.timer)
      this.currentSongIndex += 1
      if (this.currentSongIndex >= this.$store.state.playList.length) {
        this.currentSongIndex = 0
      }
      this.isPlaying = false
      this.pause = false
      this.playClick()
    },
    // 关闭列表窗口
    closePlayList() {
      this.isPlayListShow = false
    }
  },
};
</script>

<style lang="css" scoped>
@import url('./bottomPlayer.css');
</style>