<template>
  <div class="g-sd3 g-sd3-1 f-cb">
    <div class="n-minelst n-minelst-2">
      <h2 class="f-ff1">云音乐特色榜</h2>
      <ul class="f-cb">
        <template v-for="(item, index) in this.$store.state.billCategories">
          <list-item 
            :key="index" 
            v-if="index < 4" 
            :class="{selected: $store.state.categoryIndex === index}"
            @click="changeCategory(index)">
            <template v-slot:img>
              <img :src="item.coverImgUrl" alt="">
            </template>
            <template v-slot:item-name>
              {{item.name}}
            </template>
            <template v-slot:updateFrequency>
              {{item.updateFrequency}}
            </template>
          </list-item>
        </template>
      </ul>
      <h2 class="f-ff1">全球媒体榜</h2>
      <ul class="f-cb">
        <template v-for="(item, index) in this.$store.state.billCategories">
          <list-item 
            :key="index" 
            v-if="index >= 4" 
            :class="{selected: $store.state.categoryIndex === index}"
            @click="changeCategory(index)">
            <template v-slot:img>
              <img :src="item.coverImgUrl" alt="">
            </template>
            <template v-slot:item-name>
              {{item.name}}
            </template>
            <template v-slot:updateFrequency>
              {{item.updateFrequency}}
            </template>
          </list-item>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem.vue';
export default {
  components: { ListItem },
  name: "LeftBar",
  created() {},
  data() {
    return {
    };
  },
  props: {},
  methods: {
    // 点击榜单改变类别
    changeCategory(index) {
      this.$store.commit('changeCategoryIndex', index)
      // 发送事件和序号
      this.$emit('changeCategory')
    }
  },
};
</script>

<style lang="scss" scoped></style>