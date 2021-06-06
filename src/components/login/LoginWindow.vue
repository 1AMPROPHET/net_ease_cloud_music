<template>
  <div class="m-layer" style="top: 347px; left: 404px" v-if="$store.state.showLogin">
    <div class="zbar">
      <div class="zttl f-thide">手机号登录</div>
    </div>
    <div class="zcnt">
      <div class="lyct lyct-1">
        <div class="n-log2 n-log2-2">
          <div class="j-mob">
            <div class="u-phonewrap">
              <a href="javascript:void(0);" class="current">
                <span class="j-code">+86</span>
                <span class="icn u-icn2 u-icn2-17"></span>
              </a>
              <div class="txtwrap">
                <input type="text" class="j-phone txt u-txt" 
                  id="p" name="p" 
                  style="box-sizing: content-box" 
                  placeholder="请输入手机号">
              </div>
            </div>
          </div>
          <div class="f-mgt10">
            <input type="password" 
              name="pw" id="pw" 
              class="j-pwd u-txt" 
              placeholder="请输入密码">
          </div>
          <div class="j-err u-err" style="display: none"></div>
          <div class="f-mgt10">
            <label class="s-fc3">
              <input type="checkbox" checked="checked" class="j-auto u-auto">
              自动登录
            </label>
            <a href="javascript:void(0);" class="f-fr s-fc3">忘记密码?</a>
          </div>
          <div class="f-mgt20">
            <a href="javascript:void(0);" class="j-primary u-btn2 u-btn2-2">
              <i @click="login">登 录</i>
            </a>
          </div>
        </div>
        <div class="js-btmbar n-loginlink2 f-cb">
          <a href="javascript:void(0);" class="f-f1 s-primary">
              其他登陆方式
          </a>
        </div>
      </div>
    </div>
    <span class="zcls" title="关闭窗体" @click="closeWindow">x</span>
  </div>
</template>

<script>
import {Login, UserDetail, UserInfo} from '../../service/login.js'

export default {
  name: "LoginWindow",
  created() {},
  data() {
    return {
    };
  },
  props: {},
  methods: {
    // 点击×关闭窗口
    closeWindow() {
      this.$store.commit('login', false)
    },
    login() {
      // 获取输框的账号和密码
      let phone = document.getElementById('p').value
      let password = document.getElementById('pw').value
      // 登录
      Login(phone, password).then(res => {
        // 显示登录信息
        console.log(res);
        // 关闭登录窗口
        this.$store.commit('login', false)
        //  登录用户的详细信息
        if (res.data.code === 200) {
          this.$store.commit('changeStatus', true)
        }
        UserDetail(res.data.account.id).then(res => {
          console.log(res);
          const userInfo = new UserInfo(res.data)
          localStorage.setItem('userInfo', userInfo)
          this.$store.commit('getUserInfo', userInfo)
        })
      })
    }
  },
};
</script>

<style lang="css" scoped>
@import url('./style.css');
</style>