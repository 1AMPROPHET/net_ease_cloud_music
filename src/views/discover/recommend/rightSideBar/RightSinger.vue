<template>
  <div class="n-singer" v-if="Object.keys(this.$store.state.artist).length !== 0">
    <h3 class="v-hd3">
      <span class="f-f1">入驻歌手</span>
      <a href="" class="more s-fc3">查看全部></a>
    </h3>
    <ul class="n-enter f-cb" id="singer-list">
      <li v-for="index in 5" :key="index">
        <a href="" class="itm f-tdn">
          <div class="head">
            <img :src="this.$store.state.artist[index - 1].picUrl" alt="" class="j-img">
          </div>
          <div class="ifo">
            <h4>
              <span class="nm f-fs1 f-ib f-thide">{{this.$store.state.artist[index - 1].name}}</span>
            </h4>
            <p class="f-thide s-fc3">{{this.$store.state.artist[index - 1].alias[0]}}</p>
          </div>
        </a>
      </li>
    </ul>
    <div class="apply">
      <a href="https://music.163.com/st/musician" target="_blank" class="u-btn2 u-btn2-1">
        <i>申请成为网易音乐人</i>      
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightSinger",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>