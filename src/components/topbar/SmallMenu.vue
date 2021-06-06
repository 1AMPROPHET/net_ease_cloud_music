<template>
  <div class="m-tlist m-tlist-lged j-uflag" style="display: none" v-if="$store.state.loginStatus">
    <ul class="f-cb lb mg">
      <li>
        <a href="" class="itm-1">
          <i class="icn icn-hm"></i>
          <em>{{smallMenu[0]}}</em>
        </a>
      </li>
      <li>
        <a href="" class="itm-2">
          <i class="icn icn-msg"></i>
          <em>{{smallMenu[1]}}</em>
        </a>
      </li>
      <li>
        <a href="" class="itm-2">
          <i class="icn icn-lv"></i>
          <em>{{smallMenu[2]}}</em>
        </a>
      </li>
      <li>
        <a href="" class="itm-2">
          <i class="icn icn-mbr"></i>
          <em>{{smallMenu[3]}}</em>
        </a>
      </li>
    </ul>
    <ul class="f-cb ltb mg">
      <li>
        <a href="" class="itm-2">
          <i class="icn icn-st"></i>
          <em>{{smallMenu[4]}}</em>
        </a>
      </li>
      <li>
        <a href="" class="itm-2">
          <i class="icn icn-verify"></i>
          <em>{{smallMenu[5]}}</em>
        </a>
      </li>
    </ul>
    <ul class="f-cb lt">
      <li @click="logout">
        <a href="" class="itm-3">
          <i class="icn icn-ex"></i>
          <em>{{smallMenu[6]}}</em>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {smallMenu} from '../../common/staticData.js'
import {Logout} from '../../service/login.js'

export default {
  name: "SmallMenu",
  created() {},
  data() {
    return {
      smallMenu
    };
  },
  props: {},
  methods: {
    logout() {
      Logout().then(res => {
        console.log(res);
        this.$store.commit('changeStatus', false)
        this.$store.commit('getUserInfo', {})
      })
    }
  },
};
</script>

<style lang="scss" scoped></style>