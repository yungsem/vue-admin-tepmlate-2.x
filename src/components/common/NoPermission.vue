<template>
  <div class="no-permission">
    <div class="content">
      <i class="iconfont icon-permissions"></i>
      <div class="text">对不起，您没有权限访问该页面...</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.no-permission
  position relative
  height 100%
  .content
    text-align center
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    .icon-permissions
      font-size 200px
    .text
      font-size 20px
</style>
