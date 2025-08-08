<template>
  <div class="home-view">
    <header class="home-header">
      <h1>Interclasse 2025</h1>
    </header>

    <div class="stories-section">
      <div class="story-bubble" v-for="story in stories" :key="story.id">
        <img :src="story.user.avatar" :alt="story.user.name">
        <span>{{ story.user.name }}</span>
      </div>
    </div>

    <div class="feed">
      <PredictionWidget :match="nextMatch" />

      <NewsArticleCard :article="mainArticle" />

      <MatchCard v-if="liveMatch" :match="liveMatch" />
      
      <UgcPost :post="ugcPost" />
    </div>

    <div class="card team-avatars">
      <div v-for="user in users" :key="user.id" class="avatar-block">
        <img :src="user.avatar" class="avatar-img" />
        <div class="avatar-name">{{ user.name }}</div>
      </div>
    </div>
    <div class="card">
      <h2>Palpitômetro</h2>
      <p>Qual será o placar da próxima partida?</p>
      <div class="score-predict">
        <span>2º Ano</span>
        <input type="number" min="0" max="20" />
        <span>VS</span>
        <input type="number" min="0" max="20" />
        <span>1º Ano</span>
      </div>
      <button class="btn">Enviar Palpite</button>
    </div>
    <div class="card">
      <h2>Notícias</h2>
      <img src="news.jpg" alt="News image" class="news-img" />
      <a href="#" class="btn-link">Leia mais</a>
    </div>
    <div class="card match-card">
      <div class="teams">
        <div class="team team-a">A<br><span>3º Ano A</span></div>
        <div class="score">2 - 1</div>
        <div class="team team-b">B<br><span>3º Ano B</span></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MatchCard from '../components/matches/MatchCard.vue';
import NewsArticleCard from '../components/news/NewsArticleCard.vue';
import PredictionWidget from '../components/gamification/PredictionWidget.vue';
import UgcPost from '../components/social/UgcPost.vue';
import { getMatches, getNews, getStories, getUgcPosts } from '../data/api';

const stories = ref(getStories());
const nextMatch = ref(getMatches().find(m => m.status === 'SCHEDULED'));
const liveMatch = ref(getMatches().find(m => m.status === 'LIVE'));
const mainArticle = ref(getNews());
const ugcPost = ref(getUgcPosts());
</script>

<style scoped>
.home-header {
  padding: 16px;
  background: var(--primary-color);
  color: var(--light-text);
  text-align: center;
}
.stories-section {
  display: flex;
  overflow-x: auto;
  padding: 12px;
  background: var(--card-background);
  border-bottom: 1px solid var(--border-color);
}
.story-bubble {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 15px;
  font-size: 12px;
}
.story-bubble img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #c13584;
  padding: 2px;
}
.feed {
  padding: 8px;
}
.team-avatars {
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
}
.avatar-block {
  text-align: center;
}
.avatar-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid #4f8cff;
  margin-bottom: 6px;
}
.avatar-name {
  font-size: 1rem;
  color: #636e72;
}
.score-predict {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 12px 0;
}
.news-img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
}
.btn-link {
  color: #4f8cff;
  text-decoration: underline;
  font-weight: 500;
}
.match-card .teams {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.team {
  font-weight: 600;
  text-align: center;
  width: 80px;
}
.score {
  font-size: 2rem;
  font-weight: 700;
  color: #4f8cff;
  background: #f6f8fa;
  border-radius: 8px;
  padding: 8px 16px;
}
</style>