<script setup>
import BurgerMenu from './components/ui/burger-menu.vue';

</script>
<template>
   <BurgerMenu class="fix"></BurgerMenu>
   <router-view></router-view>
</template>
<style scoped>
.fix {
   position: fixed;
   left: 0%;
}
</style>
