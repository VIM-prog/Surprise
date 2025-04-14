<script setup>
import BurgerMenu from '@/components/ui/burgerMenu.vue';
import MainMenu from '@/components/ui/mainMenu.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const isMobile = ref(window.innerWidth <= 768);
const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <MainMenu class="fix" v-show="!isMobile"></MainMenu>
  <BurgerMenu class="fix" v-show="isMobile"></BurgerMenu>
  <router-view></router-view>
</template>

<style>
.fix {
  position: fixed;
  left: 0%;
  z-index: 1000;
}
</style>