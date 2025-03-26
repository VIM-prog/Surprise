<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import Menu from '@/components/ui/main-menu.vue';
import BurgerMenu from '@/components/ui/burger-menu.vue';

const route = useRoute();
const isMobile = ref(window.innerWidth <= 768);
const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};
const isAdmin = computed(() => route.name === 'Admin');

onMounted(() => {
  window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <Menu class="fix" v-show="!isMobile && !isAdmin"></Menu>
  <BurgerMenu class="fix" v-show="isMobile && !isAdmin"></BurgerMenu>
  <router-view></router-view>
</template>

<style>
.fix {
  position: fixed;
  left: 0%;
  z-index: 1000;
}
</style>