<template>
  <div id="toplist" class="g-bd3 g-bd3-1 f-cb">
    <left-bar @changeCategory="changeCategory"/>
    <right-bar :currentList="currentList" :currentListInfo="currentListInfo"/>
    <back-top ref="bt" @backTopClick="backTopClick"/>
  </div>
</template>

<script>
import {getRankDetail, getAllList} from '../../../../service/rank'
import {listDetail} from '../../../../service/rank'
import {getListComment} from '../../../../service/comment.js'
import BackTop from '../../../../components/backtop/BackTop.vue';
import LeftBar from '../leftbar/LeftBar.vue';
import RightBar from '../rightbar/RightBar.vue';
export default {
  name: "TopList",
  components: {LeftBar, BackTop, RightBar},
  created() {
    this.getCurrentList()
  },
  updated() {
    window.scrollTo(0, 0)
  },
  mounted() {
    window.addEventListener('scroll', this.backTopShow)
  },
  unmounted() {
    document.removeEventListener('scroll', this.backTopShow)
  },
  data() {
    return {
      currentList: {},
      currentListInfo: {}
    };
  },
  props: {},
  methods: {
    // 返回顶部是否显示
    backTopShow() {
      let scrollTop = window.pageYOffset
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
    },
    // 获取当前榜单类别
    getCurrentList() {
      getAllList().then(res => {
        // 榜单信息
        this.currentListInfo = new listDetail(res.data.list[this.$store.state.categoryIndex])
        // 榜单详情
        getRankDetail(res.data.list[this.$store.state.categoryIndex].id).then(res => {
          // console.log(res);
          this.currentList = res.data.playlist
        })
        // 获取榜单评论
        getListComment(res.data.list[this.$store.state.categoryIndex].id).then(res => {
          console.log(res);
          this.$store.commit('getComment', res.data)
        })
      })
    },
    // 获取榜单类别的序号, 发送网络请求
    changeCategory() {
      getAllList().then(res => {
        // 新的详情
        this.currentListInfo = new listDetail(res.data.list[this.$store.state.categoryIndex])
        // 新的榜单
        getRankDetail(res.data.list[this.$store.state.categoryIndex].id).then(res => {
          this.currentList = res.data.playlist
        })
        // 获取榜单评论
        getListComment(res.data.list[this.$store.state.categoryIndex].id).then(res => {
          console.log(res);
          this.$store.commit('getComment', res.data)
        })
      })
    }
  },
  computed: {
  }
};
</script>

<style lang="css" scoped>
@import url('../../css/toplist.css');
</style>