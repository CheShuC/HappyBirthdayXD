<template>
  <div class="video-page-container">
    <!-- 飘落蛋糕动画 -->
    <FallingFlowers />
    
    <div class="video-content">
      <h1 class="video-title">🎬 特别的生日视频 🎬</h1>
      
      <!-- 视频容器 -->
      <div class="video-wrapper">
        <div class="video-placeholder">
          <h2>🎬 生日视频 🎬</h2>
          <p>这里将播放特别的生日祝福视频</p>
          <div class="video-icon">📹</div>
          <p><small>（视频文件稍后添加）</small></p>
        </div>
      </div>
      
      <div class="video-controls">
        <button class="back-button" @click="goBack">
          ↩ 返回首页
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import FallingFlowers from '../components/FallingFlowers.vue'

const router = useRouter()

const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
.video-page-container {
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

.video-content {
  text-align: center;
  color: #d63384;
  z-index: 1;
  position: relative;
  max-width: 95%;
}

.video-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  animation: pulse 2s infinite;
}

.video-wrapper {
  background: transparent;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0); /* 移除边框阴影 */
  margin-bottom: 2rem;
}

.video-placeholder {
  background: rgba(255, 255, 255, 0.9);
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  color: #e91e63;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.video-icon {
  font-size: 4rem;
  margin: 1rem 0;
  animation: pulse 2s infinite;
}

.video-placeholder h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.video-placeholder p {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
  border: none;
  outline: none;
  background: transparent;
  border-radius: 15px;
}

/* 隐藏视频播放器的默认边框和控制栏背景 */
.birthday-video::-webkit-media-controls-panel {
  background: transparent !important;
}

.birthday-video::-webkit-media-controls {
  background: transparent !important;
}

.video-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.back-button {
  padding: 12px 24px;
  background: linear-gradient(45deg, #ff6b9d, #ff8fab);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
}

.back-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 157, 0.5);
  background: linear-gradient(45deg, #ff8fab, #ff6b9d);
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

/* 响应式设计 */
@media (max-width: 768px) {
  .video-title {
    font-size: 2rem;
  }
  
  .birthday-video {
    max-width: 95vw;
    max-height: 60vh;
  }
  
  .back-button {
    font-size: 1rem;
    padding: 10px 20px;
  }
}
</style>