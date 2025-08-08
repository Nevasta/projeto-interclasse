<template>
  <div class="prediction-widget card">
    <h4>Palpitômetro</h4>
    <p>Qual será o placar da próxima partida?</p>
    <div class="match-info">
      <span>{{ match.homeTeam.name }}</span>
      <strong>VS</strong>
      <span>{{ match.awayTeam.name }}</span>
    </div>
    <div class="prediction-inputs">
      <input type="number" min="0" />
      <span>-</span>
      <input type="number" min="0" />
    </div>
    <button>Enviar Palpite</button>
  </div>
</template>

<script setup>
defineProps({
  match: Object
});
</script>

<style scoped>
.card {
  background: var(--card-background);
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  text-align: center;
}
.match-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
  font-weight: bold;
}
.prediction-inputs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
}
.prediction-inputs input {
  width: 50px;
  text-align: center;
  font-size: 18px;
}
button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
</style>