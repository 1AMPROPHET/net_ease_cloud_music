<template>
  <div class="copy">
    <p class="link" id="music-link">
      <span v-for="(item, index) in musicLink" :key="index">
        <a :href="item.link" 
          class="item s-fc4"
          target="_blank">
          {{item.title}}
        </a>
        <span class="line">|</span>
      </span>
    </p>
    <p class="right s-fc3">
      <span class="sep span">{{bottomInfo.owner}}</span>
      <span class="span">{{bottomInfo.business}}</span>
      <a href="javascript:void(0);" class="alink">{{bottomInfo.code}}</a>
    </p>
    <p class="contact s-fc3">
      <span class="sep span">{{bottomInfo.tel}}</span>
      <span class="span">{{bottomInfo.mail}}</span>
      <a :href="bottomInfo.mailAdress" class="slink" target="_blank">{{bottomInfo.mailAdress}}</a>
    </p>
    <p class="right s-fc3">
      <a :href="bottomInfo.number.link" class="alink s-fc3" target="_blank">{{bottomInfo.number.text}}</a>
      <a href="javascript:void(0);" class="alink s-fc3 police-link" target="_blank">
        <span class="police-logo"></span>
        <span class="police-text">{{bottomInfo.police}}</span>
      </a>
    </p>
  </div>
</template>

<script>
import {musicLink, bottomInfo} from '../../common/staticData'

export default {
  name: "Copy",
  created() {},
  data() {
    return {
      musicLink,
      bottomInfo
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>