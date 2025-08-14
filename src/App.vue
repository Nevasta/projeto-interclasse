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
  background: linear-gradient(135deg, #e0e7ff 0%, #f0f2f5 100%);
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  border-left: 1px solid #e5e7eb;
  border-right: 1px solid #e5e7eb;
}

.main-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 24px 16px 72px 16px;
  border-radius: 16px 16px 0 0;
  background: rgba(255,255,255,0.95);
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
}

body, #app {
  background-color: var(--background-color);
  color: var(--text-primary);
}
</style>