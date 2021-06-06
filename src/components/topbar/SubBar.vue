<template>
  <div id="g_nav" class="m-subnav">
    <div class="wrap">
      <ul class="nav">
        <li v-for="(item, index) in subnav" :key="index" @click="subnavClick(index)">
          <a href="javascript:void(0);" :class="{active: index === $store.state.subBarIndex}">
            <div>
              {{item.title}}
              <span :class="{whiteicon: index === 2}"></span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {subnav} from '../../common/staticData.js'
export default {
  name: "SubNav",
  created() {
  },
  data() {
    return {
      subnav
    };
  },
  props: {},
  methods: {
    // 副导航的点击事件
    subnavClick(index) {
      this.$store.commit('changeSubBarIndex', index)
      this.$router.push(this.subnav[index].link)
    }
  }
};
</script>

<style lang="css" scoped>
@import './css/subbar-style.css'
</style>