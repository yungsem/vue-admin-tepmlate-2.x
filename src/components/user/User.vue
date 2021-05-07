<template>
  <div class="user">
    <el-card class="search-container" shadow="never">
    </el-card>
    <el-card class="table-container" shadow="never">
    </el-card>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="stylus">
@import "~@/common/stylus/theme"

.user
  .search-container
    margin-bottom .625rem
  .table-container
    .table-page
      padding-top .625rem
      text-align right
      .el-pagination
        padding-right 0
.el-button--primary
  &:focus
    background-color $top-head-bg-color-default
  &:hover
    background-color $top-head-bg-color-hover
</style>
