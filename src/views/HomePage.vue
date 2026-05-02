<template>
  <div class="home-container">
    <!-- 飘落蛋糕动画 -->
    <FallingFlowers />
    
    <div class="home-content">
      <h1 class="home-title">🎉 生日快乐！ 🎉</h1>
      <p class="home-message">愿你的每一天都充满甜蜜和快乐！</p>
      <button class="video-button" @click="goToVideo">
        🎬 观看特别视频 🎬
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import FallingFlowers from '../components/FallingFlowers.vue'

const router = useRouter()

const goToVideo = () => {
  router.push('/video')
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background: linear-gradient(to top, 
    #ff69b4 0%,     /* 更深的樱花粉色 */
    #ff85a2 15%,    /* 深粉色 */
    #ffa7b6 30%,    /* 中等粉色 */
    #ffb6c1 50%,    /* 樱花粉色 */
    #ffc0cb 70%,    /* 浅粉色 */
    #ffe4e9 85%,    /* 极浅粉色 */
    #ffffff 100%    /* 纯白色 */
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arial', sans-serif;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}

.home-content {
  text-align: center;
  color: #d63384;
  z-index: 1;
  position: relative;
}

.home-title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  animation: bounce 2s infinite;
}

.home-message {
  font-size: 2rem;
  color: #d63384;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  margin-bottom: 2rem;
}

.video-button {
  margin-top: 20px;
  padding: 15px 30px;
  background: linear-gradient(45deg, #ff6b9d, #ff8fab);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
}

.video-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 157, 0.5);
  background: linear-gradient(45deg, #ff8fab, #ff6b9d);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>