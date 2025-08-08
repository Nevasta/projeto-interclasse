<template>
  <div v-if="match">
    <header class="match-header">
      <div class="team-info">
        <img :src="match.homeTeam.logo" :alt="match.homeTeam.name">
        <span>{{ match.homeTeam.name }}</span>
      </div>
      <div class="score-info">
        <div class="score">{{ match.score }}</div>
        <div class="time">{{ match.status === 'LIVE'? `${match.time}'` : match.status }}</div>
      </div>
      <div class="team-info">
        <img :src="match.awayTeam.logo" :alt="match.awayTeam.name">
        <span>{{ match.awayTeam.name }}</span>
      </div>
    </header>

    <div class="tabs">
      <button @click="activeTab = 'timeline'" :class="{ active: activeTab === 'timeline' }">Linha do Tempo</button>
      <button @click="activeTab = 'lineups'" :class="{ active: activeTab === 'lineups' }">Escalações</button>
    </div>

    <div class="tab-content">
      <div v-if="activeTab === 'timeline'" class="timeline">
        <div v-for="event in match.events" :key="event.time" class="timeline-event">
          <span>{{ event.time }}'</span>
          <span>{{ event.type === 'goal'? '⚽' : '🟨' }}</span>
          <span>{{ event.player }} ({{ event.detail }})</span>
        </div>
      </div>
      <div v-if="activeTab === 'lineups'" class="lineups">
        <div class="team-lineup">
          <h3>{{ match.homeTeam.name }}</h3>
          <ul>
            <li v-for="player in match.homeTeam.lineup" :key="player.id">{{ player.name }}</li>
          </ul>
        </div>
        <div class="team-lineup">
          <h3>{{ match.awayTeam.name }}</h3>
          <ul>
            <li v-for="player in match.awayTeam.lineup" :key="player.id">{{ player.name }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getMatchById } from '../data/api';

const props = defineProps({ id: String });
const match = ref(null);
const activeTab = ref('timeline');

onMounted(() => {
  match.value = getMatchById(parseInt(props.id));
});
</script>

<style scoped>
/* Estilos para o cabeçalho, abas e conteúdo das abas */
.match-header { display: flex; justify-content: space-around; align-items: center; padding: 20px; background: var(--primary-color); color: var(--light-text); }
.team-info { display: flex; flex-direction: column; align-items: center; }
.team-info img { width: 60px; height: 60px; margin-bottom: 10px; }
.score-info { text-align: center; }
.score { font-size: 48px; font-weight: bold; }
.time { font-size: 14px; }
.tabs { display: flex; }
.tabs button { flex: 1; padding: 15px; border: none; background: #eee; font-size: 16px; cursor: pointer; }
.tabs button.active { background: var(--card-background); font-weight: bold; border-bottom: 2px solid var(--primary-color); }
.tab-content { padding: 16px; }
.timeline-event { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--border-color); }
.lineups { display: flex; justify-content: space-between; }
.team-lineup ul { list-style: none; padding: 0; }
</style>