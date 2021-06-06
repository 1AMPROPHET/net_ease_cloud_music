<template>
  <div class="g-ft">
    <div class="m-ft">
      <div class="wrap f-cb">
        <copy/>
        <enter/>
      </div>
    </div>
  </div>
</template>

<script>
import Copy from './Copy.vue'
import Enter from './Enter.vue';

export default {
  name: "bottom",
  components: {Copy, Enter},
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
@import url('./bottom.css');
</style>