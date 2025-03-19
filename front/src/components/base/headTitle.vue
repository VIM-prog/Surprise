<template>
    <div class="container">
      <h1 class="sticky-text" :style="{ transform: `translateY(${offsetY}px)`,  opacity: opacityValue}">
        {{ title }}
        </h1>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  const opacityValue = ref(1)
  const offsetY = ref(0)
  
  function handleScroll() {
    requestAnimationFrame(() => {
      offsetY.value = window.scrollY * -0.5
      opacityValue.value = Math.max(1 - scrollY / 800, 0)
    })
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  
  defineProps({
    title: String
  })
  </script>
  
  <style scoped>
  .container {
    min-height: 120vh; 
  }
  
  h1 {
    font-family: monospace;
    position: fixed;
    margin: 0 auto;
    left: 5%;
    bottom: 0; 
    transform: translate(-50%, 0);
    font-size: 15rem;
    transition: transform 0.1s ease-out;
    user-select: none;
  }
  </style>