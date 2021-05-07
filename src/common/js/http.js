import axios from 'axios'
import router from '@/router'
import { BASE_URL } from '@/common/js/constant'

// 创建一个 axios 实例
const http = axios.create({
  baseURL: BASE_URL
})

// 配置请求拦截器
// 在 header 中加入 token
http.interceptors.request.use((config) => {
  config.headers.token = sessionStorage.getItem('token')
  return config
})

// 配置响应拦截器
// 如果后端接口返回 401，表示未登录或登录状态失效，跳转到登录页
http.interceptors.response.use((response) => {
  if (response.data.code === '401') {
    location.reload()
    sessionStorage.clear()
    router.replace({
      path: '/',
      query: { redirect: router.currentRoute.fullPath }
    })
  }
  return response
})

export default http
