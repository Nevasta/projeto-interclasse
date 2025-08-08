<template>
  <div>
    <h1 class="page-title">Classificação</h1>
    <div class="standings-table">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Time</th>
            <th>P</th>
            <th>J</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>SG</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(team, index) in standings" :key="team.teamId">
            <td>{{ index + 1 }}</td>
            <td class="team-name-cell">
              <img :src="team.logo" :alt="team.name" class="team-logo-small">
              {{ team.name }}
            </td>
            <td><strong>{{ team.points }}</strong></td>
            <td>{{ team.played }}</td>
            <td>{{ team.wins }}</td>
            <td>{{ team.draws }}</td>
            <td>{{ team.losses }}</td>
            <td>{{ team.goalDifference }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getStandings } from '../data/api';

const standings = ref(getStandings());
</script>

<style scoped>
.standings-table { padding: 0 8px; }
table { width: 100%; border-collapse: collapse; background: var(--card-background); }
th, td { padding: 12px 8px; text-align: center; border-bottom: 1px solid var(--border-color); }
th { font-weight: bold; background-color: #f8f9fa; }
.team-name-cell { text-align: left; display: flex; align-items: center; }
.team-logo-small { width: 24px; height: 24px; margin-right: 8px; }
</style>