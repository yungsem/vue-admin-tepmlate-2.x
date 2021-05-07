<template>
  <div class="side-bar">
    <!-- logo -->
    <div class="logo">
      <i class="iconfont icon-round-user"></i>
      <span class="logo-text" :class="{active: menuOpen}">{{ menuOpen ? '' : 'ADMIN' }}</span>
    </div>
    <!-- menu -->
    <div class="menu-container">
      <el-menu
      class="menu"
      active-text-color="#09A1B8"
      :collapse="menuOpen"
      unique-opened
      router
      @open="handleOpen"
      @select="handleSelect"
      :default-active="defaultActive"
      :default-openeds="defaultOpens"
      >
        <el-submenu v-for="(item,index) in items" :key="index" v-if="item.subs" :index="item.index">
          <template slot="title"><i :class="item.icon"></i><span slot="title">{{ item.title }}</span></template>
          <el-menu-item class="sub-menu-item" v-for="(subItem,subIndex) in item.subs" :key="subIndex" :index="subItem.index">{{ subItem.title }}</el-menu-item>
        </el-submenu>
        <el-menu-item v-for="(item,index) in items" :key="index" v-if="!item.subs" :index="item.index"><i :class="item.icon"></i><span slot="title">{{item.title}}</span></el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      isActive: false,
      logoText: 'ADMIN',
      defaultOpens: [],
      defaultActive: '',
      items: [
        {
          index: '1',
          title: '系统设置',
          icon: 'el-icon-setting',
          subs: [
            {
              index: '/user',
              title: '用户管理'
            },
            {
              index: '/noPermission',
              title: '没有权限'
            }
          ]
        }
      ]
    }
  },
  created () {
    // 获取刚打开的菜单
    const openedSubMenuIndex = sessionStorage.getItem('openedSubMenuIndex')
    this.defaultOpens = []
    this.defaultOpens.push(openedSubMenuIndex)
    this.defaultActive = sessionStorage.getItem('defaultActive')
  },
  methods: {
    handleOpen (key) {
      sessionStorage.setItem('openedSubMenuIndex', key)
    },
    handleSelect (index) {
      sessionStorage.setItem('defaultActive', index)
    }
  },
  computed: {
    ...mapGetters([
      'menuOpen'
    ])
  }
}
</script>

<style lang="stylus">
@import "~@/common/stylus/theme"

.side-bar
  .logo
    background-color $logo-bg-color-default
    height $top-head-height
    display flex
    justify-content center
    align-items center
    color $font-color-high
    .logo-text
      opacity 1
      transition opacity .5s
      &.active
        opacity 0
  .menu-container
    height "calc(100vh - %s)" % $top-head-height
    overflow-y auto
    overflow-x hidden
    background-color $side-bar-bg-color-default
    &::-webkit-scrollbar-track
      background-color $side-bar-bg-color-default
    &::-webkit-scrollbar
      width 0
    &::-webkit-scrollbar-thumb
      background-color $side-bar-bg-color-default
      border-radius 0
    .menu.el-menu
      border 0
      background-color $side-bar-bg-color-default
      &:not(.el-menu--collapse)
        width 250px
      .el-submenu__title
        color $font-color-default
        &:hover
          background-color $side-bar-bg-color-hover
        i
          color $font-color-default
      .el-menu--inline
        background-color $side-bar-bg-color-inner
        .el-menu-item
          color $font-color-default
          background-color $side-bar-bg-color-inner
          &:hover
            background-color $side-bar-bg-color-hover
.el-menu--vertical
  background-color transparent
  .el-menu.el-menu--popup-right-start
    background-color $side-bar-bg-color-default
    padding 0
    .el-menu-item.sub-menu-item
      background-color $side-bar-bg-color-default
      color $font-color-default
      &:hover
        background-color $side-bar-bg-color-hover
        color $font-color-hover
</style>
