<template>
  <div id="album-roller" class="inner" v-if="Object.keys($store.state.newAlbums).length !== 0">
    <div class="click-flag pre" @click="preClick"></div>
    <div class="swiper">
      <div class="roll" id="roll">
        <ul class="roller-flag" id="flag1">
          <li v-for="(item, index) in $store.state.newAlbums.length / 2" :key="index">
            <div class="u-cover u-cover-alb1">
              <img class="j-img" :src="$store.state.newAlbums[index].picUrl" alt="">
              <a href="javascript:void(0);" :title="$store.state.newAlbums[index].name" class="msk"></a>
            </div>
            <p class="f-thide">
              <a href="javascript:void(0);">{{$store.state.newAlbums[index].name}}</a>
            </p>
            <p class="tit f-thide" >
              <a href="">{{$store.state.newAlbums[index].artist.name}}</a>
            </p>
          </li>
        </ul>
        <ul class="roller-flag" id="flag2">
          <li v-for="(item, index) in $store.state.newAlbums.length / 2" :key="index">
            <div class="u-cover u-cover-alb1">
              <img class="j-img" :src="$store.state.newAlbums[index + 5].picUrl" alt="">
              <a href="javascript:void(0);" :title="$store.state.newAlbums[index + 5].name" class="msk"></a>
            </div>
            <p class="f-thide">
              <a href="javascript:void(0);">{{$store.state.newAlbums[index + 5].name}}</a>
            </p>
            <p class="tit f-thide" >
              <a href="">{{$store.state.newAlbums[index + 5].artist.name}}</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="click-flag next" @click="nextClick"></div>
  </div>
</template>

<script>
export default {
  name: "album-roller",
  created() {
    setTimeout(() => {
      this.handleDom()
    }, 300)
  },
  data() {
    return {
      rollWidth: 645,
      currentIndex: 1,
      rollStyle: null,
      duration: 500
    };
  },
  props: {},
  methods: {
    handleDom() {
      // roller的连续滑动
      let roll = document.querySelector('.roll')
      let ul1 = document.getElementById('flag1')
      let ul2 = document.getElementById('flag2')
      if (roll !== undefined && ul1 !== null && ul2 !== null) {
        // 复制元素节点
        let cloneFirst = ul1.cloneNode(true)
        let cloneLast = ul2.cloneNode(true)
        // 前后插入
        roll.insertBefore(cloneLast, ul1)
        roll.appendChild(cloneFirst)
        // 移动到开始位置
        roll.style.transform = `translateX(-645px)`
        this.rollStyle = roll.style
      }
    },
    scroll(position) {
      this.rollStyle.transition = this.duration + 'ms'
      this.rollStyle.transform = `translateX(${position}px)`
    },
    // pre点击事件
    preClick() {
      // 实现无缝轮播
      this.currentIndex--
      this.scroll(-this.currentIndex * this.rollWidth)
      // 检查位置是否是第一个ul元素
      setTimeout(() => {
        if (this.currentIndex <= 0) {
          this.currentIndex = 2
          this.rollStyle.transition = '0ms'
          this.rollStyle.transform = `translateX(${-this.currentIndex * this.rollWidth}px)`
        }
      }, this.duration)
    },
    // next点击事件
    nextClick() {
      this.currentIndex++
      this.scroll(-this.currentIndex * this.rollWidth)
      // 检查是否是最后一个ul元素
      setTimeout(() => {
        if (this.currentIndex >= 3) {
          this.currentIndex = 1
          this.rollStyle.transition = '0ms'
          this.rollStyle.transform = `translateX(${-this.currentIndex * this.rollWidth}px)`
        }
      }, this.duration)
    }
  },
};
</script>

<style lang="scss" scoped></style>