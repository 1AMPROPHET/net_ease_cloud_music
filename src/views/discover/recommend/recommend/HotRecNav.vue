<template>
  <div class="hotRecNav">
    <div class="header2">
      <div class="tit">热门推荐</div>
      <div class="tab">
        <div class="tab-item" v-for="(item, index) in  hotRecNav" :key="index">
          <div class="subtitle">{{item.title}}</div>
          <span class="line">|</span>
        </div>
      </div>
      <span class="more">
        <div class="txt">更多</div>
        <i class="cor"></i>
      </span>
    </div>
  </div>
</template>

<script>
import {hotRecNav} from '../../../../common/staticData.js'

export default {
  name: "hotRecNav",
  created() {},
  data() {
    return {
      hotRecNav
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped></style>