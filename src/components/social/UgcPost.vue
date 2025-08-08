<template>
  <div class="ugc-post card">
    <div class="post-header">
      <img
        v-if="post.user && post.user.avatar"
        :src="post.user.avatar"
        :alt="post.user.name || 'Usuário'"
        class="user-avatar"
      >
      <strong v-if="post.user">{{ post.user.name }}</strong>
      <strong v-else>Usuário desconhecido</strong>
    </div>
    <img :src="post.image" alt="User generated content" class="post-image">
    <div class="post-caption">
      <p>{{ post.caption }}</p>
    </div>
    <div class="post-actions">
      <span>❤️ {{ post.likes }} Curtidas</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  post: Object
});
</script>

<style scoped>
.card {
  background: var(--card-background);
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.post-header {
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 10px;
}
.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.post-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}
.post-caption,.post-actions {
  padding: 0 12px 12px 12px;
}
</style>