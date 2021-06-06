<template>
  <div class="n-dj n-dj-1" v-if="Object.keys(this.$store.state.hotDj).length !== 0">
    <h3 class="v-hd3">热门主播</h3>
    <ul class="n-hotdj f-cb" id="hotdj-list">
      <li v-for="index in 5" :key="index">
        <a href="" class="cver">
          <img :src="this.$store.state.hotDj[index - 1].picUrl" alt="" class="j-img">
        </a>
        <div class="info">
          <p>
            <a href="" class="nm-icn f-thide s-fc0">{{this.$store.state.hotDj[index - 1].name}}</a>
          </p>
          <p class="f-thide s-fc3">{{this.$store.state.hotDj[index - 1].rcmdtext}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RightDj",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>