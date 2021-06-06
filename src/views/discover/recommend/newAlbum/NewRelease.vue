<template>
  <div class="new-release">
    <div class="header2">
      <div class="tit">新碟上架</div>
      <span class="more">
        <div class="txt">更多</div>
        <i class="cor"></i>
      </span>
    </div>
    <div class="n-disk">
      <album-roller/>
    </div>
  </div>
</template>

<script>
import AlbumRoller from './AlbumRoller.vue';
export default {
  name: "NewRelease",
  components: {AlbumRoller},
  created() {},
  data() {
    return {};
  },
  props: {

  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>