<template>
  <div class="g-user-profile">
    <div class="n-myinfo n-myinfo-1 s-bg s-bg-1" v-if="!$store.state.loginStatus">
      <p class="note s-fc3">登陆网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a href="javascript:void(0);" 
        id="index-enter-default" 
        class="btn s-bg s-bg-2 f-tdn"
        @click="login">
        用户登录
      </a>
    </div>
    <div class="n-myinfo s-bg s-bg-5" v-if="$store.state.loginStatus">
      <div class="f-cb" style="overflow: auto">
        <a href="javascript:void(0);" class="head f-pr">
          <img :src="$store.state.userInfo.avatarUrl" alt="">
        </a>
        <div class="info">
          <h4 style="overflow: hidden">
            <a href="" class="nm nm-icn f-fs1 f-ib f-thide">{{$store.state.userInfo.nickname}}</a>
          </h4>
          <p>
            <a href="" class="u-lv u-icn2 u-icn2-lv">
              {{$store.state.userInfo.level}}
              <i class="right u-icn2 u-icn2-lvright"></i>
            </a>
          </p>
          <div class="btnwrap f-pr">
            <a href="" class="sign u-btn2 u-btn2-2">
              <i>签到</i>
            </a>
          </div>
        </div>
      </div>
      <ul class="dny s-fc3 f-cb">
        <li class="fst">
          <a href="">
            <strong id="event_count">0</strong>
            <span>动态</span>
          </a>
        </li>
        <li>
          <a href="">
            <strong id="follow_count">{{$store.state.userInfo.follows}}</strong>
            <span>关注</span>
          </a>
        </li>
        <li class="lst">
          <a href="">
            <strong id="fan_count">{{$store.state.userInfo.followeds}}</strong>
            <span>粉丝</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {
    // 显示登录窗口
    login() {
      this.$store.commit('login', true)
    }
  },
};
</script>

<style lang="scss" scoped></style>