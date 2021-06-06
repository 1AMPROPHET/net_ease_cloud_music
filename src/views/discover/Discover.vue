<template>
  <router-view/>
</template>

<script>
import {getList} from '../../service/recommend'


export default {
  name: "Discover",
  components: {},
  created() {
    this.getCategories()
  },
  deactivated() {
    
  },
  data() {
    return {
      
    }
  },
  props: {},
  methods: {
    getCategories() {
      getList().then(res => {
        // console.log(res);
        this.$store.state.billCategories = res.data.list
      })
    }
  }
};
</script>

<style lang="css" scoped>
@import url('./css/discover.css');
@import url('./css/recommendBanner.css');
@import url('./css/rightBar.css');
</style>