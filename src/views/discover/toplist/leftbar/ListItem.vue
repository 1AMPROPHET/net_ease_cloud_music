<template>
  <li class="mine">
    <div class="item f-cb">
      <div class="left">
        <a href="" class="avatar">
          <slot name="img"></slot>
          <span class="msk"></span>
        </a>
      </div>
      <p class="name">
        <a href="" class="s-fc0">
          <slot name="item-name"></slot>
        </a>
      </p>
      <p class="s-fc4">
        <slot name="updateFrequency"></slot>
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: "listItem",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>