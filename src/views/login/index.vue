<template>
  <div class="login-container">
    <el-form
      ref="LoginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
        <span class="translate">
          <svg-icon class="language" iconClass="language"></svg-icon>
        </span>
      </div>
      <el-form-item prop="username">
        <span class="users">
          <svg-icon class="user" iconClass="user"></svg-icon>
        </span>
        <el-input v-model.trim="loginForm.username" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="passwords">
          <svg-icon class="password" iconClass="password"></svg-icon>
        </span>
        <el-input
          :type="inputType"
          v-model.trim="loginForm.password"
        ></el-input>
        <span class="show-pwd">
          <svg-icon
            class="eye"
            :iconClass="inputType === 'password' ? 'eye' : 'eye-open'"
            @click="handllePassWordStatus"
          />
        </span>
      </el-form-item>
      <el-button
        class="login-button"
        type="primary"
        @click="handleLoginSubmit()"
        >登录</el-button
      >
    </el-form>
  </div>
</template>
<script setup>
import UserApi from '@/api/user'
import { reactive, ref } from 'vue'
import { validatePassword } from './rule'
import { useRouter } from 'vue-router'
import md5 from 'md5'
const router = useRouter()
const LoginForm = ref()
const inputType = ref('password')
const loginForm = reactive({
  username: 'admin',
  password: '123456'
})
const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword
    }
  ]
})
const handleLoginSubmit = async () => {
  if (!LoginForm.value) return
  await LoginForm.value.validate(async (valid) => {
    if (valid) {
      alert('登录成功')
      loginForm.password = md5(loginForm.password)
      const response = await UserApi.login(loginForm)
      console.log(response)
      router.push('/Home')
    }
  })
}
const handllePassWordStatus = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login-container {
  position: relative;
  height: 100%;
  background-color: $bg;
  .login-form {
    width: 520px;
    padding: 0 35px;
    position: absolute;
    left: 50%;
    margin-left: -260px;
    top: 160px;
    overflow: hidden;
    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        display: inline-block;
      }
    }
    ::v-deep .el-input {
      position: relative;
      display: inline-block;
      height: 47px;
      width: 85%;
      .el-input__wrapper {
        background: transparent;
        box-shadow: none;
        .el-input__suffix {
          position: absolute;
          right: -60px;
        }
        .el-input__prefix {
          margin-right: 12px;
        }
      }
      .el-input__wrapper.is-focus {
        box-shadow: none;
      }
      input {
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
    .users {
      display: inline-block;
      width: 30px;
      height: 30px;
      .user {
        width: 1.2em;
        height: 1.2em;
      }
    }
    .passwords {
      display: inline-block;
      width: 30px;
      height: 30px;
      .password {
        width: 1.2em;
        height: 1.2em;
      }
    }
    .show-pwd {
      position: absolute;
      right: 20px;
      top: 10px;
      width: 30px;
      height: 30px;
      box-sizing: border-box;
      .eye {
        width: 1em;
        height: 1em;
        // background-color: #fff;
      }
      // font-size: 16px;
      // color: $dark_gray;
      // background-color: #fff;
      cursor: pointer;
      // user-select: none;
    }
    .title-container {
      position: relative;
      .translate {
        position: absolute;
        right: 0;
        top: 0;
        width: 30px;
        height: 30px;
        line-height: 30px;
        background-color: $cursor;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 2px;
        .language {
          width: 1.5em;
          height: 1.5em;
        }
      }
      .title {
        font-size: 26px;
        color: $light_gray;
        text-align: center;
        font-weight: bold;
        margin-bottom: 40px;
      }
      .icon {
        position: absolute;
        top: 0;
        right: 0;
        color: $light_gray;
        font-size: 22px;
      }
    }
    .login-button {
      width: 100%;
      margin-bottom: 30px;
    }
  }
}
</style>
