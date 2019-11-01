<template>
  <div>
    <div class="header">
      <h1 class="text">Welcome to MusicHouse</h1>
    </div>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/recommend">
        <span class="tab-link">推荐</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/singer">
        <span class="tab-link">歌手</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/rank">
        <span class="tab-link">排行</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
  @import "@/common/scss/variable.scss";
  @import "@/common/scss/mixin.scss";

  .header {
    position: relative;
    height: 44px;
    text-align: center;
    color: $color-theme;
    font-size: 0;
    .text {
      display: inline-block;
      vertical-align: top;
      line-height: 44px;
      font-size: $font-size-large;
    }
  }
  .tab {
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: $font-size-medium-x;
    .tab-item {
      flex: 1;
      text-align: center;
      .tab-link {
        padding-bottom: 5px;
        color: $color-text-l;
      }
      &.router-link-active  {
        .tab-link {
          color: $color-theme;
          border-bottom: 2px solid $color-theme;
        }
      }
    }
  }
</style>
