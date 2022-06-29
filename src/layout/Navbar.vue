<template>
  <div class="navbar">
    <el-icon>
      <svg-icon icon="hamburger-closed"></svg-icon>
    </el-icon>
    <el-icon>
      <svg-icon icon="hamburger-opened"></svg-icon>
    </el-icon>
    <span></span>
    <div>
      <el-icon>
        <svg-icon icon="guide"></svg-icon>
      </el-icon>
      <el-icon>
        <svg-icon icon="search"></svg-icon>
      </el-icon>
      <el-icon>
        <svg-icon icon="hamburger-closed"></svg-icon>
      </el-icon>
      <el-icon>
        <svg-icon icon="change-theme"></svg-icon>
      </el-icon>
      <el-icon>
        <svg-icon icon="language"></svg-icon>
      </el-icon>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
</style>
