import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AiringView from '../views/AiringView.vue'
import UpcomingView from '../views/UpcomingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/airing',
      name: 'airing',
      component: AiringView,
      meta: { transition: 'slide-left' },
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: UpcomingView,
      meta: { transition: 'slide-left' },
    }
  ]
})

export default router
