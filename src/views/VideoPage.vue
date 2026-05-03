<template>
  <div class="video-page-container">
    <!-- 飘落蛋糕动画 -->
    <FallingFlowers />
    
    <!-- 视频播放器 -->
    <div class="video-wrapper">
      <div class="video-player">
        <video 
          controls 
          autoplay 
          muted 
          loop
          class="birthday-video"
          :poster="videoPoster" 
        >
          <source :src="videoSrc" type="video/mp4">
          您的浏览器不支持视频播放。
        </video>
      </div>
    </div>
  </div>
</template>

<script setup>
import FallingFlowers from '../components/FallingFlowers.vue'

// 视频路径配置 - 使用阿里云OSS链接
const videoSrc = 'https://webproject-test.oss-cn-beijing.aliyuncs.com/HappyBirthday.mp4'
const videoPoster = '/videos/video-poster.jpg' // 可选：视频封面图
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
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}

.video-wrapper {
  max-width: 90%;
  width: 800px;
}

.video-player {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.birthday-video {
  width: 100%;
  height: auto;
  max-height: 80vh;
  display: block;
  border-radius: 15px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .video-wrapper {
    max-width: 95%;
  }
  
  .birthday-video {
    max-height: 70vh;
  }
}
</style>