<template>
  <nav class="bottom-nav">
    <RouterLink to="/" class="nav-item" active-class="active">
      <span>🏠</span>
      <span class="label">Início</span>
    </RouterLink>
    <RouterLink to="/partidas" class="nav-item" active-class="active">
      <span>⚽</span>
      <span class="label">Partidas</span>
    </RouterLink>
    <RouterLink to="/classificacao" class="nav-item" active-class="active">
      <span>📊</span>
      <span class="label">Classificação</span>
    </RouterLink>
    <RouterLink to="/noticias" class="nav-item" active-class="active">
      <span>📰</span>
      <span class="label">Notícias</span>
    </RouterLink>
    <RouterLink to="/perfil" class="nav-item" active-class="active">
      <span>👤</span>
      <span class="label">Perfil</span>
    </RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 450px;
  margin: auto;
  height: 60px;
  background-color: var(--card-background);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid var(--border-color);
  box-shadow: 0 -2px 5px rgba(0,0,0,0.05);
}
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #888;
  font-size: 10px;
}
.nav-item span:first-child {
  font-size: 24px;
}
.nav-item.active {
  color: var(--primary-color);
}
</style>