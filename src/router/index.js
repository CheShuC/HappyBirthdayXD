import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import VideoPage from '../views/VideoPage.vue'
 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/video',
    name: 'VideoPage',
    component: VideoPage
  }
]
 
const router = createRouter({
  history: createWebHistory(),
  routes
})
 
export default router