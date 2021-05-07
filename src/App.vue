<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import util from '@/common/js/util'

export default {
  created () {
    const routers = JSON.parse(sessionStorage.getItem('routes'))
    if (routers) {
      this.$router.addRoutes(util.generateRoutes(routers))
    }
  }
}
</script>

<style>
</style>
