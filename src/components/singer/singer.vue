<template>
    <div class="singer" ref="singer">
      <list-view @select="selectSinger" :data="singers" ref="list"></list-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      singers: []
    }
  },
  created() {

  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="scss">
  .singer {
    position: fixed;
    top: 88px;
    bottom: 0;
    width: 100%;
  }
</style>