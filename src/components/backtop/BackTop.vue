<template>
  <div class="m-back" @click="backTopClick"></div>
</template>

<script>
export default {
  name: "m-back",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {
    backTopClick() {
      this.$emit('backTopClick')
    }
  },
};
</script>

<style lang="css" scoped>
.m-back {
  display: none;
  position: fixed;
  left: 50%;
  margin-left: 500px;
  bottom: 160px;
  width: 49px;
  height: 44px;
  background-position: -265px -47px;
  background-image: url('../../assets/img/sprite/sprite.png');
  cursor: pointer;
  z-index: 999;
}
.m-back:hover {
  background-position: -325px -47px;
}
</style>