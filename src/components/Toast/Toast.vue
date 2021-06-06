<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>


<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message, duration = 1500) {
      this.message = message
      this.isShow = true

      setTimeout(() => {
        this.message = ''
        this.isShow = false
      }, duration);
    }
  },
}
</script>

<style lang="css" scoped>
@import url('./toast.css');
</style>