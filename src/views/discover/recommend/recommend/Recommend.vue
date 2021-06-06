<template>
  <div id="rec-module">
    <recommend-banner :banners="banners" :delay="5000"/>
    <div id="recommend">
      <div class="g-mn1">
        <div class="g-mn1c">
          <div class="g-wrap3">
            <div class="n-rcmd">
              <hot-rec-nav/>
              <left-table :tableList="hotRecommend"/>
            </div>
            <div class="music-ad"></div>
            <new-release/>
            <bill-board 
              :speedUpBoard="speedUpBoard"
              :newSongsBoard="newSongsBoard"
              :originalBoard="originalBoard"/>
          </div>
        </div>
      </div>
      <right-bar/>
    </div>
    <back-top ref="bt" @backTopClick="backTopClick"/>
  </div>
</template>

<script>
import {getTopBanner, getHotRecommend, getTopList} from '../../../../service/recommend'
import {getDjHotRadios, getDjRadioRecommend, getHotDj} from '../../../../service/djradio'
import {getHotAlbums} from '../../../../service/album'
import {getArtistList} from '../../../../service/artist'
import HotRecNav from './HotRecNav.vue';
import LeftTable from './LeftTable.vue';
import NewRelease from '../newAlbum/NewRelease.vue';
import RightBar from '../rightSideBar/RightBar.vue';
import RecommendBanner from './RecommendBanner.vue'
import BillBoard from '../billboard/BillBoard.vue'
import BackTop from '../../../../components/backtop/BackTop.vue'
export default {
  name: "Recommend",
  components: {
    HotRecNav, 
    LeftTable,
    NewRelease,
    RightBar,
    RecommendBanner,
    BillBoard,
    BackTop,
  },
  created() {
    // this.getInfo()
  },
  mounted() {
    this.getInfo()
    window.addEventListener('scroll', this.backTopShow)
  },
  unmounted() {
    document.removeEventListener('scroll', this.backTopShow)
  },
  data() {
    return {
      banners: [],
      hotRecommend: [],
      newAlbums: [],
      speedUpBoard: {},
      newSongsBoard: {},
      originalBoard: {}
    };
  },
  props: {
  },
  methods: {
    getInfo() {
      // 获取banner图片
      getTopBanner().then(res => {
        // console.log(res);
        this.banners = res.data.banners
        // console.log(this.banners);
      })
      // 获取热门推荐
      getHotRecommend().then(res => {
        // console.log(res);
        this.hotRecommend = res.data.result
      })
      // djradio
      // getDjRadioCatelist().then(res => {
      //   console.log(res);
      // })
      // 新碟上架
      getHotAlbums().then(res => {
        // console.log(res);
        this.newAlbums = res.data.albums
        // 去掉两个
        this.newAlbums.splice(10, 2)
        // this.newAlbums.shift()
        // console.log(this.newAlbums.length);
        this.$store.state.newAlbums = this.newAlbums
      })
      getTopList(19723756).then(res => {
        // 飙升榜
        // console.log(res);
        this.speedUpBoard = res.data.playlist
      })
      getTopList(3779629).then(res => {
        // 新歌榜
        // console.log(res);
        this.newSongsBoard = res.data.playlist
      })
      // // getTopList(1).then(res => {
      // //   // 热歌榜
      // //   console.log(res);
      // // })
      getTopList(2884035).then(res => {
        // 原创榜
        // console.log(res);
        this.originalBoard = res.data.playlist
      })
      getArtistList(-1, 1, 'a').then(res => {
        // 歌手榜
        // console.log(res);
        this.$store.state.artist = res.data.artists
      })
      getDjRadioRecommend(0)
      getDjHotRadios()
      getHotDj('hours').then(res => {
        // 热门主播
        // console.log(res);
        this.$store.state.hotDj = res.data.toplist
      })
    },
    // 监听页面的高度,是否显示返回顶部按钮
    backTopShow() {
      // 获取页面高度
      let scrollTop = window.pageYOffset
      // console.log(scrollTop);
      // 返回顶部
      if (this.$refs.bt) {
          if (scrollTop > 0) {
          this.$refs.bt.$el.style.display = 'block'
        } else {
          this.$refs.bt.$el.style.display = 'none'
        }
      }
    },
    // 点击返回顶部
    backTopClick() {
      window.scrollTo(0, 0)
    }
  }
};
</script>

<style lang="css" scoped>

</style>