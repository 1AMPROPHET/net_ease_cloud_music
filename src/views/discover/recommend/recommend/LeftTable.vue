<template>
  <ul class="left-table">
    <li v-for="(item, index) in tableList" :key="index">
      <div class="u-cover">
        <img :src="item.picUrl" alt="">
        <a href="javascript:void(0);" :title="item.name" class="msk"></a>
        <div class="bottom">
          <a href="javascript:void(0);" class="icon-play"></a>
          <span class="icon-headset"></span>
          <span class="nb">{{format(item.playCount)}}</span>
        </div>
      </div>
      <p class="dec">
        <a href="javascript:void(0);" class="tit">{{item.name}}</a>
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "LeftTable",
  created() {},
  data() {
    return {};
  },
  props: {
    tableList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    // 格式化数字表达
    format(num) {
      return num >= 10000 ? (num / 10000).toFixed(0) + '万' : num
    }
  },
  computed: {
    
  }
};
</script>

<style lang="scss" scoped></style>