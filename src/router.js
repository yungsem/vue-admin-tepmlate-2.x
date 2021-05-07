import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login.vue'
import Home from '@/components/home/Home.vue'
import User from '@/components/user/User.vue'
import NoPermission from '@/components/common/NoPermission.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/noPermission',
          name: 'noPermission',
          component: NoPermission
        },
        {
          path: '/user',
          component: User
        }
      ]
    }
  ]
})

export default router
