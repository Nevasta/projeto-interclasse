<template>
  <div class="home-view">
    <!-- Header com logo e boas-vindas -->
    <header class="home-header">
      <img src="@/assets/CELC-logo.png" alt="Interclasse Logo" class="logo" />
      <h1>Bem-vindo ao Interclasse 2025!</h1>
      <p class="subtitle">Acompanhe partidas, notícias e participe da competição escolar.</p>
      <div class="quick-actions">
        <router-link to="/partidas" class="action-card">
          <span>🏆</span>
          <span>Partidas</span>
        </router-link>
        <router-link to="/noticias" class="action-card">
          <span>📰</span>
          <span>Notícias</span>
        </router-link>
        <router-link to="/classicicacao" class="action-card">
          <span>📊</span>
          <span>Classificação</span>
        </router-link>
        <router-link to="/profile" class="action-card">
          <span>👤</span>
          <span>Meu Perfil</span>
        </router-link>
      </div>
    </header>

    <!-- Stories dos usuários -->
    <section class="stories-section">
      <div class="story-bubble" v-for="story in stories" :key="story.id">
        <img :src="story.user.avatar" :alt="story.user.name">
        <span>{{ story.user.name }}</span>
      </div>
    </section>

    <!-- Feed principal -->
    <section class="feed">
      <NewsArticleCard :article="mainArticle" />
      <MatchCard v-if="liveMatch" :match="liveMatch" />
      <UgcPost :post="ugcPost" />
    </section>

    <!-- Palpitômetro -->
    <section class="card"> 
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
    </section>

    <!-- Avatares dos times -->
    <section class="card team-avatars">
      <div v-for="user in users" :key="user.id" class="avatar-block">
        <img :src="user.avatar" class="avatar-img" />
        <div class="avatar-name">{{ user.name }}</div>
      </div>
    </section>

    <!-- Última notícia -->
    <section class="card">
      <h2>Notícias</h2>
      <img src="news.jpg" alt="News image" class="news-img" />
      <a href="#" class="btn-link">Leia mais</a>
    </section>

    <!-- Última partida -->
    <section class="card match-card">
      <div class="teams">
        <div class="team team-a">A<br><span>3º Ano A</span></div>
        <div class="score">2 - 1</div>
        <div class="team team-b">B<br><span>3º Ano B</span></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MatchCard from '../components/matches/MatchCard.vue';
import NewsArticleCard from '../components/news/NewsArticleCard.vue';
import UgcPost from '../components/social/UgcPost.vue';
import { getMatches, getNews, getStories, getUgcPosts, getUsers } from '../data/api.js';

const stories = ref(getStories());
const liveMatch = ref(getMatches().find(m => m.status === 'LIVE'));
const mainArticle = ref(getNews());
const ugcPost = ref(getUgcPosts());
const users = ref(getUsers());
</script>

<style scoped>
.home-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px 0 16px;
  text-align: center;
  animation: fadeIn 0.8s;
  background: var(--primary-color);
  color: var(--light-text);
  border-radius: 0 0 18px 18px;
  margin-bottom: 12px;
}
.logo {
  width: 96px;
  margin-bottom: 18px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
}
h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 8px;
}
.subtitle {
  font-size: 1.1rem;
  color: #64748b;
  margin-bottom: 28px;
}
.quick-actions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  width: 100%;
  max-width: 340px;
  margin-bottom: 18px;
}
.action-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f1f5f9;
  border-radius: 14px;
  padding: 18px 0;
  font-size: 1.1rem;
  color: #334155;
  text-decoration: none;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  transition: background 0.2s, box-shadow 0.2s;
}
.action-card:hover {
  background: #e0e7ff;
  box-shadow: 0 2px 8px rgba(59,130,246,0.08);
}
.stories-section {
  display: flex;
  overflow-x: auto;
  padding: 12px;
  background: var(--card-background);
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 12px;
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
  margin-bottom: 12px;
}
.card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  padding: 18px;
  margin-bottom: 16px;
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
.btn {
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn:hover {
  background: #2563eb;
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
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(16px);}
  to { opacity: 1; transform: translateY(0);}
}
</style>