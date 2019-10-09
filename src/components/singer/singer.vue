<template>
  <div class="singer" ref="singer">
    singer
  </div>
</template>

<script>
  import Singer from '@/common/js/singer'
  import { getSingerList } from '@/api/singer'
  import { ERR_OK } from '@/api/config'

  export default {
    data() {
      return {
        singers: []
      }
    },
    created() {
      this._getSingerList();
    },
    methods: {
      _getSingerList() {
        getSingerList().then((res) => {
          if(res.code === ERR_OK) {
            this.singers =  res.data.list;
          }
        })
      }
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