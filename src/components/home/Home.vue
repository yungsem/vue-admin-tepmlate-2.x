<template>
  <div class="home">
    <el-container>
      <el-aside>
        <side-bar></side-bar>
      </el-aside>
      <el-container>
        <el-header>
          <top-head></top-head>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBar from '@/components/home/SideBar.vue'
import TopHead from '@/components/home/TopHead.vue'

export default {
  created () {
  },
  components: {
    SideBar,
    TopHead
  }
}
</script>

<style scoped lang="stylus">
@import "~@/common/stylus/theme"

.home
  .el-container
    .el-aside
      width auto !important
    .el-container
      .el-header
        padding 0
        height $top-head-height !important
      .el-main
        height "calc(100vh - %s)" % $top-head-height
        background-color $main-content-bg-color-default
        padding 10px
</style>
