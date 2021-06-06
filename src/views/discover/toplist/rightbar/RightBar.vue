<template>
  <div class="g-mn3">
    <div class="g-mn3c">
      <right-top :currentList="currentList" :currentListInfo="currentListInfo"/>
      <right-list :currentList="currentList" :currentListInfo="currentListInfo"/>
    </div>
  </div>
</template>

<script>
import RightList from './RightList.vue';
import RightTop from './RightTop.vue';
export default {
  name: "RightBar",
  components: {RightTop, RightList},
  created() {},
  data() {
    return {};
  },
  props: {
    currentList: {
      type: Object,
      default() {
        return {}
      }
    },
    currentListInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>