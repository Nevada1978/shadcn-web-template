<script setup lang="ts">
// 不再需要导入 HelloWorld
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- 使用 router-view 渲染当前路由对应的组件 -->
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
