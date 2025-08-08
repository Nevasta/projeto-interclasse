<template>
  <div class="news-card card">
    <img :src="article.image" alt="News image" class="news-image">
    <div class="news-content">
      <h3>{{ article.title }}</h3>
      <p>{{ article.summary }}</p>
      <a href="#">Leia mais</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  article: Object
});
</script>

<style scoped>
.card {
  background: var(--card-background);
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  overflow: hidden;
}
.news-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.news-content {
  padding: 16px;
}
.news-content h3 {
  margin-top: 0;
}
</style>