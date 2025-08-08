<template>
  <div>
    <h1 class="page-title">Partidas</h1>
    <div class="matches-list">
      <MatchCard v-for="match in matches" :key="match.id" :match="match" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MatchCard from '../components/matches/MatchCard.vue';
import { getMatches } from '../data/api';

const matches = ref(getMatches());
</script>

<style scoped>
.matches-list {
  padding: 8px;
}
</style>