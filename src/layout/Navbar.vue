<template>
  <div class="navbar">
    <div class="navbar-left">
      <el-icon>
        <svg-icon icon="hamburger-closed"></svg-icon>
      </el-icon>
      <el-icon>
        <svg-icon icon="hamburger-opened"></svg-icon>
      </el-icon>
      <span></span>
    </div>
    <div class="navbar-right">
       <el-tooltip
        class="box-item"
        effect="dark"
        content="功能引导"
        placement="bottom"
      >
     <el-icon>
        <svg-icon icon="guide"></svg-icon>
      </el-icon>
      </el-tooltip>

      <el-icon>
        <svg-icon icon="search"></svg-icon>
      </el-icon>
      <el-icon>
        <svg-icon icon="hamburger-closed"></svg-icon>
      </el-icon>
       <el-tooltip
        class="box-item"
        effect="dark"
        content="主题修改"
        placement="bottom"
      >
      <el-icon>
        <svg-icon icon="change-theme"></svg-icon>
      </el-icon>
      </el-tooltip>
       <el-tooltip
        class="box-item"
        effect="dark"
        content="国际化"
        placement="bottom"
      >
      <el-icon>
        <svg-icon icon="language"></svg-icon>
      </el-icon>
      </el-tooltip>
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar shape="square" :size="40" :src="avatarUrl" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="home">首页</el-dropdown-item>
            <el-dropdown-item command="profile">课程主页</el-dropdown-item>
            <el-dropdown-item command="logout" divided
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()
const avatarUrl = computed(() => {
  return store.getters.userInfo.avatar
})
const handleCommand = (command) => {
  switch (command) {
    case 'home':
      handleToHome()
      break
    case 'logout':
      handleLogout()
      break
  }
}
const handleToHome = () => {
  router.push('/')
}
const handleLogout = async () => {
  try {
    await store.dispatch('user/logout')
    router.push('/login')
  } catch (err) {
    console.log(err)
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  // display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  .el-dropdown {
    margin: 5px 10px 0 0;
  }
  .el-avatar {
    background: none;
  }
  .navbar-left{
    float: left;
  }
  .navbar-right{
    float: right;
    padding: 0 18px 0 0;
    font-size: 24px;
    color: #5a5e66;

    .el-icon{
        margin-top: 12px;
      margin-right: 18px;
    }
  }

}
</style>
