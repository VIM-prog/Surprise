<script setup>
  import { Slide } from 'vue3-burger-menu'
</script>
<template>
  <Slide right>
    <a href="/" id="home" class="menu-item">
      <span class="menu-text">ГЛАВНАЯ</span>
    </a>
    <a href="price" id="projects" class="menu-item">
      <span class="menu-text">ПРАЙС-ЛИСТ</span>
    </a>
    <a href="projects" id="projects" class="menu-item">
      <span class="menu-text">ПРОЕКТЫ</span>
    </a>
    <a href="join" id="join" class="menu-item">
      <span class="menu-text">ПРИСОЕДИНИТЬСЯ</span>
    </a>
    <a href="about" id="about" class="menu-item">
      <span class="menu-text">О НАС</span>
    </a>
  </Slide>
</template>
<style scoped>
.menu-item {
  display: block;
  text-decoration: none;
  transition: all 0.5ms;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0);
}

.menu-text {
  transition: 200ms linear 50ms;
}

.menu-text:hover {
  color: #8DE41C;
}

</style>