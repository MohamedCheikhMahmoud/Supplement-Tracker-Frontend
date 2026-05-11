// Importiert Funktionen für Vue Router
import { createRouter, createWebHistory } from 'vue-router'

// Importiert die Homepage
import HomeView from '../views/HomeView.vue'

// Definiert alle Seiten/Routen der App
const routes = [
  {
    // Homepage
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    // Supplements-Seite
    path: '/supplements',
    name: 'supplements',

    // Lazy Loading der Seite
    component: () => import('../views/SupplementsView.vue')
  },

  {
    // About-Seite
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

// Erstellt den Router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Exportiert den Router
export default router
