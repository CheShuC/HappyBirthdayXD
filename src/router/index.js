import { createRouter, createWebHashHistory } from 'vue-router'
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
  history: createWebHashHistory(),
  routes
})
 
export default router