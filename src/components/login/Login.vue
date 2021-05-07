<template>
  <div class="login">
    <el-form class="login-form" :model="loginForm" ref="loginForm">
      <h1 class="title">后台管理</h1>
      <el-form-item prop="username" :rules="loginRules.username">
        <el-input class="login-input" v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
      </el-form-item>
      <el-form-item prop="password" :rules="loginRules.password">
        <el-input class="login-input" v-model="loginForm.password" prefix-icon="iconfont icon-password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="submit-btn" @click="handleLogin" type="primary" size="medium">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, message: '请输入用户名' }],
        password: [{ required: true, message: '请输入密码' }]
      }
    }
  },
  created () {
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 跳转到 home
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>

<style lang="stylus">
@import "~@/common/stylus/theme"

.login
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  background $login-bg-color-default
  .login-form
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 28.125rem
    background $login-form-bg-color-default
    border-radius .25rem
    padding 1.875rem
    .title
      margin-bottom 2.5rem
      text-align center
      font-size 1.625rem
      color $font-color-default
    .login-input .el-input__inner
      background transparent
      border 1px solid $login-form-input-border-color-default
      color $font-color-default
      &:focus
        border 1px solid $login-form-input-border-color-focus
    .el-form-item.is-error .el-input__inner
      border-color $login-form-input-border-color-error
    .submit-btn
      width 100%
</style>
