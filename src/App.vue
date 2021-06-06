<template>
  <div class="main-body">
    <topbar/>
    <router-view/>
    <bottom/>
    <bottom-player/>
    <login-window/>
    <Mask/>
    <toast ref="toast"/>
  </div>
</template>

<script>
import Bottom from './components/bottom/Bottom.vue'
import BottomPlayer from './components/bottomPlayer/BottomPlayer.vue'
import LoginWindow from './components/login/LoginWindow.vue'
import Mask from './components/login/Mask.vue'
import Topbar from './components/topbar/topbar.vue'
import Toast from './components/Toast/Toast.vue'
import eventBus from './common/utils/mitt/eventBus.js'

export default {
  name: 'app',
  components: {
    Topbar,
    Bottom,
    BottomPlayer,
    LoginWindow,
    Mask,
    Toast  
  },
  mounted() {
    eventBus.on('alreadyAdded', () => {
      this.$refs.toast.show('已存在于播放列表')
    })
    eventBus.on('noCopyright', () => {
      this.$refs.toast.show('无音乐版权')
    })
  },
  methods: {
  },
}
</script>

<style>
  
</style>
