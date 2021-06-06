<template>
  <div class="m-mask" v-if="$store.state.showLogin">&nbsp;</div>
</template>

<script>
export default {
  name: "Mask",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
div.m-mask {
  z-index: 1001;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
</style>