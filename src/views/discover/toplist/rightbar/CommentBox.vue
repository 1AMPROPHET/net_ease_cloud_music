<template>
  <div class="n-cmt" id="comment-box">
    <div>
      <div class="u-title u-title-1">
        <h3>
          <span class="f-ff2">评论</span>
        </h3>
        <span class="sub s-fc3">
          共
          <span class="j-flag">{{currentList.commentCount}}</span>
          条评论
        </span>
      </div>
      <div class="m-cmmt">
        <div class="iptarea">
          <div class="head">
            <img src="../../../../assets/img/toplist/default_avatar.jpg" alt="">
          </div>
          <div class="j-flag">
            <div>
              <div class="m-cmmtipt f-cb f-pr">
                <div class="u-txtwrap holder-parent f-pr" style="display: block">
                  <textarea class="u-txt area j-flag" placeholder="评论"></textarea>
                </div>
                <div class="btns f-cb f-pr">
                  <i class="icn u-icn u-icn-41 j-flag"></i>
                  <a href="" class="btn u-btn u-btn-1 j-flag">评论</a>
                  <span class="zs s-fc4 j-flag">140</span>
                </div>
                <div class="corr u-arr">
                  <em class="arrline">◆</em>
                  <span class="arrclr">◆</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cmmts j-flag">
          <h3 class="u-hd4">最新评论({{$store.state.currentListComments.total}})</h3>
          <div class="itm" v-for="(item, index) in $store.state.currentListComments.comments" :key="index">
            <div class="head">
              <a href="">
                <img :src="item.user.avatarUrl" alt="">
              </a>
            </div>
            <div class="cntwrap">
              <div>
                <div class="cnt f-brk">
                  <a href="" class="s-fc7">{{item.user.nickname}}</a>
                  {{item.content}}
                </div>
              </div>
              <div class="que f-brk f-pr s-fc3" v-if="item.beReplied.length !== 0">
                <span class="darr">
                  <i class="bd">◆</i>
                  <i class="bg">◆</i>
                </span>
                <a href="" class="s-fc7">{{item.beReplied[0].user.nickname}}</a>
                :&nbsp;&nbsp;{{item.beReplied[0].content}}
              </div>
              <div class="rp">
                <div class="time s-fc4">{{formatTime(item.time)}}</div>
                <a href="">
                  <i class="zan u-icn2 u-icn2-12"></i>
                  ({{item.likedCount}})
                </a>
                <span class="sep">|</span>
                <a href="" class="s-fc3">回复</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentBox",
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
    }
  },
  methods: {
    formatTime(num) {
      let time = new Date(num)
      let hour = time.getHours()
      let minute = time.getMinutes()
      hour = hour > 9 ? hour : '0' + hour
      minute = minute > 9 ? minute : '0' + minute
      return hour + ':' + minute
    }
  },
};
</script>

<style lang="scss" scoped></style>