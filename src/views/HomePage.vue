<template>
  <div class="home-container">
    <!-- 飘落蛋糕动画 -->
    <FallingFlowers />
    
    <!-- 居中图片，图层在背景和文字之间 -->
    <div class="center-image-container">
      <img src="@/assets/images/fufu1.png" alt="生日图片" class="center-image">
    </div>
    
    <div class="home-content">
      <h1 class="home-title">🎉 生日快乐！ 🎉</h1>
      <button class="video-button" @click="goToVideo">
        点击我！
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

/* 居中图片容器 */
.center-image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1; /* 在背景之上，文字之下 */
  pointer-events: none; /* 防止图片干扰点击事件 */
}

/* 居中图片样式 */
.center-image {
  max-width: 90%; /* 放大到90% */
  max-height: 90%; /* 放大到90% */
  transform: scale(1.5); /* 额外放大1.5倍 */
  object-fit: contain;
  opacity: 0.8; /* 适当透明度，让文字更清晰 */
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2)); /* 添加阴影效果 */
  animation: float-gentle 6s ease-in-out infinite; /* 添加浮动动画 */
}

/* 浮动动画 */
@keyframes float-gentle {
  0%, 100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.02);
  }
}

.home-content {
  text-align: center;
  color: #d63384;
  z-index: 2; /* 在图片之上 */
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