<script setup lang="ts">
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
const data = useData()
const { theme } = data
</script>

<template>
  <Layout>
    <template #aside-outline-after>
      <div class="recommend-container">
        <p>如果支持作者那就赞助一下吧</p>
        <img :src="theme.recommend.mpwx" alt="小狮子前端">
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.recommend-container {
  padding: 16px;
  font-size: 14px;
}

.recommend-container p {
  color: rgb(135 143 160);
  cursor: pointer;
}

.recommend-container img {
  width: 150px;
  margin-left: -8px;
}
</style>