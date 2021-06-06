<template>
  <div class="g-wrap">
    <div class="m-info m-info-rank f-cb">
      <div class="cover u-cover u-cover-rank">
        <img :src="currentListInfo.coverImgUrl" alt="">
        <span class="msk"></span>
      </div>
      <div class="cnt">
        <div class="cntc m-info">
          <div class="hd f-cb">
            <h2 class="f-ff2">{{currentListInfo.name}}</h2>
          </div>
          <div class="user f-cb">
            <i class="u-icn u-icn-57"></i>
            <span class="sep s-fc3">最近更新: {{getMonth}}</span>
            <span class="s-fc4"> ({{currentListInfo.updateFrequency}}) </span>
          </div>
          <div class="btns f-cb">
            <a href="" class="u-btn2 u-btn2-2 u-btni-addply f-f1" title="播放" style="width: '61px'">
              <i>
                <em class="ply"></em>
                播放
              </i>
            </a>
            <a href="" title="添加到播放列表" class="u-btni u-btni-add"></a>
            <a href="" id="toplist-share" class="u-btni u-btni-share"><i>({{currentList.shareCount}})</i></a>
            <a href="" class="u-btni u-btni-dl"><i>下载</i></a>
            <a href="" class="u-btni u-btni-cmmt j-cmt">
              <i>
                (
                <span id="comment-count">{{currentList.commentCount}}</span>
                )
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightTop",
  created() {},
  mounted() {
  },
  data() {
    return {
      info: {}
    };
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
  methods: {
    
  },
  computed: {
    getMonth() {
      // 获取时间戳
      let date = new Date(this.currentListInfo.updateTime)
      // 计算月份
      let month = date.getMonth() + 1
      // 计算日期
      let day = date.getDate()
      // 格式化
      month =  month >= 10 ? month + '月' : '0' + month + '月'
      day = day >= 10 ? day + '日' : '0' + day + '日'
      return month + day
    }
  },
};
</script>

<style lang="scss" scoped></style>