<template>
  <div>
    <h1 class="page-title">Meu Perfil</h1>
    <div class="profile-card">
      <img :src="user.avatar" alt="User Avatar" class="profile-avatar">
      <h2>{{ user.name }}</h2>
      <p>Time Favorito: {{ user.favoriteTeam }}</p>

      <div class="gamification-stats">
        <div class="level">Nível: {{ user.level }} ({{ user.xp }} XP)</div>
        <progress :value="user.xp" :max="user.nextLevelXp"></progress>
      </div>

      <h3>Meus Emblemas</h3>
      <div class="badges-grid">
        <div v-for="badge in user.badges" :key="badge.name" class="badge">
          <span class="badge-icon">{{ badge.icon }}</span>
          <span class="badge-name">{{ badge.name }}</span>
        </div>
      </div>
      
      <h3>Meus Cards de Jogador</h3>
      <div class="player-cards-collection">
        <PlayerCard v-for="card in collectedCards" :key="card.id" :player="card.player" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getUser, getCollectedPlayerCards } from '../data/api';
import PlayerCard from '../components/gamification/PlayerCard.vue';

const user = ref(getUser());
const collectedCards = ref(getCollectedPlayerCards());
</script>

<style scoped>
.profile-card { padding: 16px; text-align: center; }
.profile-avatar { width: 100px; height: 100px; border-radius: 50%; margin-bottom: 10px; }
.gamification-stats { margin: 20px 0; }
.level { font-weight: bold; margin-bottom: 5px; }
progress { width: 80%; }
.badges-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); gap: 10px; margin-top: 10px; }
.badge { display: flex; flex-direction: column; align-items: center; padding: 10px; background: #f0f2f5; border-radius: 8px; }
.badge-icon { font-size: 30px; }
.badge-name { font-size: 12px; margin-top: 5px; }
.player-cards-collection { display: flex; gap: 10px; overflow-x: auto; padding: 10px; }
</style>