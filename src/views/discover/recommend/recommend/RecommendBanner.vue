<template>
  <div id="rec-banner" 
    @mouseenter="stopBanner" 
    @mouseleave="startBanner"
    v-if="Object.keys(banners).length !== 0">
    <div class="bg-border">
      <div id="banner-bg"></div>
    </div>
    <div class="wrap">
      <swiper class="banner">
        <swiper-item v-for="(item, index) in banners" 
          :key="index" 
          class="banner-item" 
          :class="{active: index === currentIndex}">
          <a :href="item.url">
            <img :src="item.imageUrl" alt="" class="img">
          </a>
        </swiper-item>
      </swiper>
      <div class="leftArrow btnl" @click="leftClick"></div>
      <div class="rightArrow btnl" @click="rightClick"></div>
      <div class="indicator">
        <span v-for="(item, indey) in banners" 
          :key="indey" 
          class="dots" 
          :class="{redDots: currentIndex === indey}"
          @click="dotClick(indey)">
        </span>
      </div>
      <div class="download">
        <a href="" id="side-download" class="btn"></a>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        <span class="shadow-left"></span>
        <span class="shadow-right"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '../../../../components/swiper/Swiper.vue';
import SwiperItem from '../../../../components/swiper/SwiperItem.vue';
export default {
  name: "recommendBanner",
  components: {Swiper, SwiperItem},
  created() {
    setTimeout(() => {
      this.setStyle()
      this.startTimer()
    }, 100);
  },
  mounted() {
    
  },
  deactivated() {
    // 离开页面时停止banner播放
    this.stopTimer()
  },
  activated() {
    this.startTimer()
  },
  data() {
    return {
      timer: null,
      currentIndex: 0,
      bgStyle: null
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    },
    delay: {
      type: Number,
      default() {
        return 3000
      }
    }
  },
  methods: {
    // 获取对象style
    setStyle() {
      setTimeout(() => {
        let background = document.getElementById('banner-bg')
        if (background) {
          this.bgStyle = background.style
        }
      }, 200);
    },
    // 创建banner的循环
    startTimer() {
      this.timer = setInterval(() => {
        this.currentIndex++
        // 创建循环
        if (this.currentIndex >= this.banners.length) {
          this.currentIndex = 0
        }
        // 改变背景图
        if (this.bgStyle) {
          this.bgStyle.backgroundImage = `url(${this.banners[this.currentIndex].imageUrl})`
        }
      }, this.delay)
    },
    // 停止函数
    stopTimer() {
      clearInterval(this.timer)
    },
    // 鼠标移出开始banner
    startBanner() {
      this.startTimer()
    },
    // 鼠标移入停止banner
    stopBanner() {
      this.stopTimer()
    },
    // indicator的点击事件，切换图片
    dotClick(indey) {
      this.currentIndex = indey
      // 改变背景
      let bannerBg = document.getElementById('banner-bg')
      if (bannerBg !== undefined) {
        // console.log('wwww');
        bannerBg.style.backgroundImage = `url(${this.banners[this.currentIndex].imageUrl})`
      }
    },
    // 前一张图片
    leftClick() {
      this.currentIndex--
      if (this.currentIndex < 0) {
        this.currentIndex = this.banners.length - 1
      }
      // 顺便改变背景
      let bannerBg = document.getElementById('banner-bg')
      if (bannerBg !== undefined) {
        // console.log('wwww');
        bannerBg.style.backgroundImage = `url(${this.banners[this.currentIndex].imageUrl})`
      }
      // console.log(this.currentIndex);
    },
    // 后一张图片
    rightClick() {
      this.currentIndex++
      if (this.currentIndex >= this.banners.length) {
        this.currentIndex = 0
      }
      let bannerBg = document.getElementById('banner-bg')
      if (bannerBg !== undefined) {
        bannerBg.style.backgroundImage = `url(${this.banners[this.currentIndex].imageUrl})`
      }
      // console.log(this.currentIndex);
    }
  },
};
</script>

<style lang="css" scoped>

</style>