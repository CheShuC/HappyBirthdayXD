<template>
  <div class="falling-flowers">
    <div 
      v-for="(flower, index) in flowers" 
      :key="index"
      :class="['flower', `flower-${flower.type}`]"
      :style="{
        left: `${flower.left}%`,
        animationDuration: `${flower.duration}s`,
        animationDelay: `${flower.delay}s`,
        transform: `rotate(${flower.rotation}deg) scale(${flower.scale})`
      }"
    >
      {{ flower.emoji }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const flowers = ref([])
const flowerTypes = [
  { emoji: '🎂', class: 'birthday-cake' },
  { emoji: '🍰', class: 'shortcake' },
  { emoji: '🧁', class: 'cupcake' },
  { emoji: '🥮', class: 'mooncake' },
  { emoji: '🍮', class: 'custard' },
  { emoji: '🍩', class: 'doughnut' },
  { emoji: '🍪', class: 'cookie' },
  { emoji: '🍫', class: 'chocolate' },
  { emoji: '🍬', class: 'candy' },
  { emoji: '🍭', class: 'lollipop' }
]

let animationInterval

const createFlower = () => {
  const typeIndex = Math.floor(Math.random() * flowerTypes.length)
  const flowerType = flowerTypes[typeIndex]
  
  flowers.value.push({
    type: flowerType.class,
    emoji: flowerType.emoji,
    left: Math.random() * 100,
    duration: 3 + Math.random() * 4, // 3-7秒
    delay: Math.random() * 2,
    rotation: Math.random() * 360,
    scale: 0.5 + Math.random() * 0.5 // 0.5-1倍大小
  })
  
  // 限制花朵数量，避免性能问题
  if (flowers.value.length > 50) {
    flowers.value.shift()
  }
}

const startAnimation = () => {
  // 初始创建一些花朵
  for (let i = 0; i < 15; i++) {
    setTimeout(createFlower, i * 200)
  }
  
  // 持续创建新花朵
  animationInterval = setInterval(createFlower, 300)
}

const stopAnimation = () => {
  if (animationInterval) {
    clearInterval(animationInterval)
  }
}

onMounted(() => {
  startAnimation()
})

onUnmounted(() => {
  stopAnimation()
})
</script>

<style scoped>
.falling-flowers {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
}

.flower {
  position: absolute;
  font-size: 24px;
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  opacity: 0;
  user-select: none;
}

@keyframes fall {
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

/* 不同类型蛋糕的特殊效果 */
.flower.birthday-cake {
  animation-timing-function: ease-in-out;
  filter: drop-shadow(0 0 3px rgba(255, 0, 0, 0.4));
  font-size: 28px;
}

.flower.shortcake {
  animation-timing-function: ease-in;
  filter: drop-shadow(0 0 3px rgba(255, 182, 193, 0.5));
}

.flower.cupcake {
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 0 3px rgba(255, 105, 180, 0.4));
}

.flower.mooncake {
  animation-timing-function: ease-out;
  filter: drop-shadow(0 0 3px rgba(210, 180, 140, 0.4));
}

.flower.custard {
  animation-timing-function: linear;
  filter: drop-shadow(0 0 3px rgba(255, 255, 0, 0.3));
}

.flower.doughnut {
  animation-timing-function: ease-in-out;
  filter: drop-shadow(0 0 3px rgba(139, 69, 19, 0.4));
}

.flower.cookie {
  animation-timing-function: ease-in;
  filter: drop-shadow(0 0 3px rgba(160, 82, 45, 0.4));
}

.flower.chocolate {
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 0 3px rgba(101, 67, 33, 0.4));
}

.flower.candy {
  animation-timing-function: ease-out;
  filter: drop-shadow(0 0 3px rgba(255, 0, 255, 0.3));
}

.flower.lollipop {
  animation-timing-function: linear;
  filter: drop-shadow(0 0 3px rgba(255, 0, 0, 0.3));
}
</style>