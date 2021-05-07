<template>
  <div class="top-head">
    <div class="switch" @click="clickSwitch">
      <i class="iconfont icon-menu"></i>
    </div>
    <div class="logout">
      <div class="logout-avatar"></div>
      <el-dropdown
        class="logout-nav"
        placement="bottom-start"
        @command="handleCommand"
        trigger="click">
        <span class="el-dropdown-link">
          {{ realName }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      realName: '杨森'
    }
  },
  created () {
    this.realName = sessionStorage.getItem('realName')
  },
  methods: {
    ...mapMutations({
      setMenuOpen: 'SET_MENU_OPEN'
    }),
    clickSwitch () {
      this.setMenuOpen()
    },
    handleCommand (command) {
      if (command === 'logout') {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="stylus">
@import "~@/common/stylus/theme"

.top-head
  background $top-head-bg-color-default
  display flex
  align-items center
  justify-content space-between
  .switch
    width $top-head-height
    height $top-head-height
    line-height $top-head-height
    text-align center
    color $font-color-high
    &:hover
      cursor pointer
      background-color $top-head-bg-color-hover
  .logout
    display flex
    align-items center
    padding-right 60px
    .logout-avatar
      height 40px
      width 40px
      border-radius 50%
      background-image url('~@/common/image/avatar-boy.jpg')
      background-size contain
    .logout-nav
      cursor pointer
      margin-left 10px
      color $font-color-high
.el-dropdown-menu.el-popper
  background-color $side-bar-bg-color-default
  border 0
  border-radius 0
  padding 0
  .el-dropdown-menu__item
    color $font-color-default
    &:hover
      background-color $side-bar-bg-color-hover
      color $font-color-hover
  .popper__arrow
    display none !important
</style>
