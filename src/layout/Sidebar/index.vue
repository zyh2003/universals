<template>
  <div class="">
        <ul>
          <li @click="$router.push('/1')">1</li>
          <li @click="$router.push('/2')">2</li>
          <li @click="$router.push('/3')">3</li>
          <li @click="$router.push('/4')">4</li>
          <li @click="$router.push('/5')">5</li>
        </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  ul{
    li{
      text-align: center;
      line-height: 30px;
      background-color: #fff;

    }
    li:hover{
      background-color: pink;
    }
  }
</style>
