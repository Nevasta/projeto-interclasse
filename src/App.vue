<template>
  <div class="app-container">
    <main class="main-content">
      <RouterView />
    </main>
    <BottomNav />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import BottomNav from './components/layout/BottomNav.vue'
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 450px;
  margin: auto;
  background-color: #f0f2f5;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}

.main-content {
  flex-grow: 1;
  overflow-y: auto;
  padding-bottom: 60px;
}
</style>