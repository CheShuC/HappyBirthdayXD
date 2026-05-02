<template>
  <div class="birthday1-container">
    <!-- 飘落蛋糕动画 -->
    <FallingFlowers />
    
    <div class="birthday1-content">
      <h1 class="birthday1-title">🎂 特别的生日祝福 🎂</h1>
      <div class="birthday-card">
        <p class="birthday-wish">
          在这个特别的日子里，<br>
          愿你的笑容如阳光般灿烂，<br>
          愿你的心情如蛋糕般甜蜜，<br>
          愿你的每一天都充满惊喜和快乐！
        </p>
        <div class="cake-animation">
          🎂✨🎉
        </div>
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
.birthday1-container {
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, 
    #ff69b4 0%,     /* 深粉色 */
    #ff85a2 25%,    /* 中等粉色 */
    #ffb6c1 50%,    /* 樱花粉色 */
    #ffd1dc 75%,    /* 浅粉色 */
    #ffe4e9 100%    /* 极浅粉色 */
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

.birthday1-content {
  text-align: center;
  color: #d63384;
  z-index: 1;
  position: relative;
  max-width: 90%;
}

.birthday1-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  animation: pulse 2s infinite;
}

.birthday-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.birthday-wish {
  font-size: 1.8rem;
  line-height: 1.6;
  color: #e91e63;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.cake-animation {
  font-size: 3rem;
  margin-bottom: 2rem;
  animation: bounce 1.5s infinite;
}

.back-button {
  font-size: 1.2rem;
  color: #ffffff;
  background: linear-gradient(135deg, #ff69b4, #ff1493);
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.3);
  transition: all 0.3s ease;
}

.back-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 105, 180, 0.5);
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
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

/* 响应式设计 */
@media (max-width: 768px) {
  .birthday1-title {
    font-size: 2.2rem;
  }
  
  .birthday-wish {
    font-size: 1.4rem;
  }
  
  .birthday-card {
    padding: 2rem;
  }
  
  .cake-animation {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .birthday1-title {
    font-size: 1.8rem;
  }
  
  .birthday-wish {
    font-size: 1.2rem;
  }
  
  .birthday-card {
    padding: 1.5rem;
  }
}
</style>