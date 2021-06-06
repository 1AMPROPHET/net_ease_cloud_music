<template>
  <div class="g-sd1">
    <login/>
    <right-singer/>
    <right-dj/>
  </div>
</template>

<script>
import Login from './Login.vue';
import RightDj from './RightDj.vue';
import RightSinger from './RightSinger.vue';
export default {
  name: "RightBar",
  components: {Login, RightSinger, RightDj},
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>