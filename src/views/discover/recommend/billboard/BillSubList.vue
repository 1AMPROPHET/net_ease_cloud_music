<template>
  <dl class="blk">
    <dt class="top">
      <div class="cver u-cover u-cover-4">
        <slot name="img"></slot>
      </div>
      <div class="tit">
        <slot name="title"></slot>
      </div>
    </dt>
    <dd>
      <slot name="list"></slot>
    </dd>
  </dl>
</template>

<script>
export default {
  name: "BillSubList",
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