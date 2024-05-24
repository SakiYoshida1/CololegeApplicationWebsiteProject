import { createRouter, createWebHistory} from 'vue-router'
import HomeView from './views/HomeView.vue'
import MasterAppView from './views/MasterAppView.vue'
import PhDAppView from './views/PhDAppView.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/home',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/master',
        name: 'master',
        component: MasterAppView,
      },
      {
        path: '/phd',
        name: 'phd',
        component: PhDAppView,
      }
    ]
  })