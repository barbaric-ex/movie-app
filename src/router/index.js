import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '@/views/Contact.vue'
import MyMovies from '@/views/MyMovies.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/my-movies',
      name: 'my-movies',
      component: MyMovies,
    },
  ],
})

export default router
