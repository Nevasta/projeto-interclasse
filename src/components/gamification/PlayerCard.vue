<template>
  <div class="player-card">
    <div class="card-header">
      <img :src="player.team.logo" class="team-logo-card">
      <span class="player-position">{{ player.position }}</span>
    </div>
    <img :src="player.photo" class="player-photo">
    <h3 class="player-name">{{ player.name }}</h3>
    <div class="player-stats">
      <div><strong>Gols</strong><span>{{ player.stats.goals }}</span></div>
      <div><strong>Assist.</strong><span>{{ player.stats.assists }}</span></div>
      <div><strong>Jogos</strong><span>{{ player.stats.gamesPlayed }}</span></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  player: Object
});
</script>

<style scoped>
.player-card {
  width: 150px;
  flex-shrink: 0;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  border-radius: 15px;
  padding: 10px;
  box-shadow: 5px 5px 10px #d4d4d4, -5px -5px 10px #ffffff;
  text-align: center;
  font-family: 'Oswald', sans-serif; /* Fonte mais esportiva */
}
.card-header { display: flex; justify-content: space-between; align-items: center; }
.team-logo-card { width: 30px; height: 30px; }
.player-position { font-weight: bold; font-size: 14px; }
.player-photo { width: 80px; height: 80px; border-radius: 50%; margin: 10px auto; border: 3px solid var(--primary-color); }
.player-name { margin: 5px 0; font-size: 16px; }
.player-stats { display: flex; justify-content: space-around; font-size: 12px; margin-top: 10px; }
.player-stats div { display: flex; flex-direction: column; }
</style>