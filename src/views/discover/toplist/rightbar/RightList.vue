<template>
  <div class="g-wrap12">
    <div class="u-title u-title-1 f-cb">
      <h3>
        <span class="f-ff2">歌曲列表</span>
      </h3>
      <span class="sub s-fc3">
        <span>{{currentListInfo.trackCount}}</span>
        首歌
      </span>
      <div class="more s-fc3">
        播放: 
        <strong class="s-fc6" id="play-count">{{currentListInfo.playCount}}</strong>
        次
      </div>
    </div>
    <song-list :currentList="currentList"/>
    <comment-box :currentList="currentList"/>
  </div>
</template>

<script>
import CommentBox from './CommentBox.vue';
import SongList from './SongList.vue';
export default {
  name: "RightList",
  components: {SongList, CommentBox},
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