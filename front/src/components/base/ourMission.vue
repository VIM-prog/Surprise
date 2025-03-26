<template>
    <div class="container">
      <h3 :style="{ opacity: transperentValue}">{{ purpose }}</h3>
      <div>
        <h2 class="right" :style="{ transform: `translateX(${offsetX}px)`}">{{ slogan }}</h2>
        <h2 class="left" :style="{ transform: `translateX(${offsetX2}px)`}">{{ slogan2 }}</h2>
      </div>
      <p> {{ description }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  const offsetX = ref(0)
  const offsetX2 = ref(0)
  const transperentValue = ref(0)
  defineProps ({
    slogan: String,
    slogan2: String,
    description: String,
    purpose: String,
  })

  function handleScroll() {
  requestAnimationFrame(() => {
    const scrollY = window.scrollY;
    const scrollLimit = 2000; 
    transperentValue.value = Math.min(scrollY / 1200, 1);
    offsetX.value = Math.min(0, -200 + scrollY * (400 / scrollLimit));
    offsetX2.value = Math.max(0, 200 - scrollY * (400 / scrollLimit));
  });
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  
  <style scoped>
    .container {
      height: 90vh;
      margin: 0 auto;
    }
    
    .right, .left {
      transition: transform 0.2s ease; 
    }
    p{
      font-size: 2rem;
      width: 50vh;
      margin: 0 auto;
    }
    h2 {
      font-size: 10rem;
    }

    h3 {
      transition: opacity 0.6s ease-in-out; 
    }

    * {
      font-family: monospace;
      margin-top: 0;
      padding: 0;
      margin-bottom: 0;
    }
  </style>