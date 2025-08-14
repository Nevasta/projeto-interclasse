<template>
  <div class="player-card">
    <div class="card-background"></div>
    <div class="card-content">
      <div class="player-info">
        <span class="player-position">{{ player.position }}</span>
        <h3 class="player-name">{{ player.name }}</h3>
      </div>
      <img :src="player.photo" class="player-photo">
      <div class="team-logo-container">
        <img :src="player.team.logo" class="team-logo-card">
      </div>
      <div class="player-stats">
        <div>
          <span>{{ player.stats.gamesPlayed }}</span>
          <label>JOGOS</label>
        </div>
        <div class="stat-divider"></div>
        <div>
          <span>{{ player.stats.goals }}</span>
          <label>GOLS</label>
        </div>
        <div class="stat-divider"></div>
        <div>
          <span>{{ player.stats.assists }}</span>
          <label>ASSIST.</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  player: Object
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Roboto:wght@400;700&display=swap');

.player-card {
  width: 180px;
  height: 250px;
  flex-shrink: 0;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  color: white;
  font-family: 'Roboto', sans-serif;
}

.card-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(160deg, #2d3436 0%, #000000 100%);
  opacity: 0.9;
  z-index: 1;
}

.card-content {
  position: relative;
  z-index: 2;
  padding: 15px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.player-info {
  text-align: center;
}

.player-position {
  font-size: 14px;
  font-weight: 700;
  color: var(--primary-color);
  text-transform: uppercase;
}

.player-name {
  font-family: 'Oswald', sans-serif;
  font-size: 22px;
  margin: 2px 0;
  text-transform: uppercase;
  line-height: 1.1;
}

.player-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px auto;
  border: 4px solid var(--primary-color);
  object-fit: cover;
  background-color: #333;
}

.team-logo-container {
  position: absolute;
  top: 10px;
  right: 10px;
}

.team-logo-card {
  width: 35px;
  height: 35px;
  opacity: 0.8;
}

.player-stats {
  margin-top: auto;
  display: flex;
  justify-content: space-around;
  text-align: center;
  background: rgba(0,0,0,0.3);
  padding: 8px 0;
  border-radius: 8px;
}

.player-stats div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.player-stats span {
  font-size: 20px;
  font-weight: 700;
}

.player-stats label {
  font-size: 10px;
  color: var(--text-secondary);
  font-weight: bold;
}

.stat-divider {
  width: 1px;
  background-color: var(--border-color);
}
</style>