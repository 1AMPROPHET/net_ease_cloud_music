<template>
  <ul class="enter f-fr">
    <li class="unit">
      <a :href="bottomEnterLink[0]" class="logo logonew logo-amped f-tid" target="_blank"></a>
      <span class="tt tt-amped"></span>
    </li>
    <li class="unit">
      <a :href="bottomEnterLink[1]" class="logo logonew logo-auth f-tid" target="_blank"></a>
      <span class="tt tt-auth"></span>
    </li>
    <li class="unit">
      <a :href="bottomEnterLink[2]" class="logo logonew logo-musician f-tid" target="_blank"></a>
      <span class="tt tt-musician"></span>
    </li>
    <li class="unit">
      <a :href="bottomEnterLink[3]" class="logo logonew logo-reward f-tid" target="_blank"></a>
      <span class="tt tt-reward"></span>
    </li>
    <li class="unit">
      <a :href="bottomEnterLink[4]" class="logo logonew logo-cash f-tid" target="_blank"></a>
      <span class="tt tt-cash"></span>
    </li>
  </ul>
</template>

<script>
import {bottomEnterLink} from '../../common/staticData'

export default {
  name: "Enter",
  created() {},
  data() {
    return {
      bottomEnterLink
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>