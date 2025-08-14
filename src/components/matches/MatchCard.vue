<template>
  <RouterLink :to="`/partidas/${match.id}`" class="match-card card">
    <div class="match-header">
      <span class="league-name">Interclasse - Rodada 1</span>
      <span class="match-status" :class="match.status.toLowerCase()">
        <span v-if="match.status === 'LIVE'" class="live-indicator"></span>
        {{ match.status === 'LIVE'? `${match.time}'` : (match.status === 'FINISHED'? 'FIM' : match.time) }}
      </span>
    </div>
    <div class="match-body">
      <div class="team">
        <img :src="match.homeTeam.logo" :alt="match.homeTeam.name" class="team-logo">
        <span class="team-name">{{ match.homeTeam.name }}</span>
      </div>
      <div class="score">
        {{ match.score }}
      </div>
      <div class="team">
        <img :src="match.awayTeam.logo" :alt="match.awayTeam.name" class="team-logo">
        <span class="team-name">{{ match.awayTeam.name }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  match: Object
});
</script>

<style scoped>
.match-card {
  padding: 16px;
  color: var(--text-primary);
  transition: transform 0.2s ease-in-out;
}

.match-card:hover {
  transform: translateY(-4px);
}

.match-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: var(--text-secondary);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border-color);
}

.match-status {
  display: flex;
  align-items: center;
  font-weight: bold;
}

.live {
  color: var(--primary-color);
}

.live-indicator {
  width: 8px;
  height: 8px;
  background-color: var(--primary-color);
  border-radius: 50%;
  margin-right: 6px;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(29, 185, 84, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(29, 185, 84, 0); }
  100% { box-shadow: 0 0 0 0 rgba(29, 185, 84, 0); }
}

.match-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
}

.team-logo {
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
}

.team-name {
  font-size: 14px;
  font-weight: 500;
  text-align: center;
}

.score {
  font-size: 36px;
  font-weight: bold;
  min-width: 80px;
  text-align: center;
}
</style>