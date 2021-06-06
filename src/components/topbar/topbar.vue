<template>
  <div id="g-topbar">
    <div class="m-top">
      <div class="wrap">
        <h1 class="logo">
          <a href="/#" hidefocus="true"></a>
        </h1>
        <ul class="m-nav">
          <li v-for="(item, index) in navbarData" :key="index" @click="navClick(index)">
            <span>
              <a href="javascript:void(0);" :class="{focus: index === navIndex}">
                <span>{{item.title}}</span>
                <sub class="cor">&nbsp;</sub>
              </a>
            </span>
          </li>
        </ul>
        <div class="m-login m-tophead f-pr" :class="{isLogin: $store.state.loginStatus}">
          <a href="javascript:void(0);" class="link" v-if="!$store.state.loginStatus" @click="login">登录</a>
          <div class="head f-f1 f-pr" v-if="$store.state.loginStatus">
            <img :src="$store.state.userInfo.avatarUrl" alt="">
          </div>
          <small-menu/>
        </div>
        <a href="/login?targetUrl=%2Fcreatorcenter" class="creator-center">创作者中心</a>
        <div class="m-search">
          <div class="searchBg">
            <span class="parent">
              <input type="text" name="search" id="search" class="txt" @blur="leave">
              <label for="" 
                class="placeholder" 
                id="placeholder" 
                @click="search">
                音乐/视频/电台/用户
              </label>
            </span>
          </div>
        </div>
      </div>
    </div>
    <sub-bar/>
  </div>
</template>

<script>
import {navbarData} from '../../common/staticData.js'
import SubBar from './SubBar.vue'
import SmallMenu from './SmallMenu'

export default {
  name: "topbar",
  components: { SubBar, SmallMenu },
  created() {

  },
  mounted() {
    
  },
  data() {
    return {
      navbarData,
      navIndex: 0,
      avatar: ''
    };
  },
  props: {},
  methods: {
    // 切换路由
    navClick(index) {
      if (index < 3 || index === 5) {
        this.navIndex = index
        this.$router.replace(this.navbarData[this.navIndex].link).catch(err => {console.log(err);})
      }
    },
    // 搜索框的显示
    search() {
      document.getElementById('search').focus()
      // 去除遮盖层label
      document.getElementById('placeholder').style.display = 'none'
      
    },
    leave() {
      // 显示遮盖层
      document.getElementById('placeholder').style.display = 'block'
    },
    // 登录
    login() {
      this.$store.commit('login', true)
    }
  },
};
</script>

<style lang="css" scoped>
@import './css/topbar-style.css'
</style>