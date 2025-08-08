<template>
  <RouterLink :to="`/partidas/${match.id}`" class="match-card">
    <div class="status-container">
      <div class="match-status" :class="match.status.toLowerCase()">
        {{ match.status === 'LIVE'? `${match.time}'` : (match.status === 'FINISHED'? 'FIM' : match.time) }}
      </div>
    </div>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--card-background);
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  color: var(--dark-text);
  position: relative;
  text-decoration: none;
}
.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
}
.team-logo {
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
}
.team-name {
  font-size: 14px;
  text-align: center;
}
.score {
  font-size: 28px;
  font-weight: bold;
}
.status-container {
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
}
.match-status {
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--light-text);
  font-weight: bold;
}
.live { background-color: #e74c3c; }
.finished { background-color: #34495e; }
.scheduled { background-color: #95a5a6; }
</style>