import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MatchesView from '../views/MatchesView.vue'
import MatchDetailView from '../views/MatchDetailView.vue'
import StandingsView from '../views/StandingsView.vue'
import NewsView from '../views/NewsView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/partidas', component: MatchesView },
  { path: '/partida/:id', component: MatchDetailView },
  { path: '/classificacao', component: StandingsView },
  { path: '/noticias', component: NewsView },
  { path: '/perfil', component: ProfileView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router