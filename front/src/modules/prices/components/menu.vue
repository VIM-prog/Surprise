
<template>
    <div class="menu">
      <button
        class="btn-menu"
        v-for="menuItem in menuItems"
        :key="menuItem.value"
        @click="$emit('select', menuItem.value)"
      >
        {{ menuItem.label }}
      </button>
    </div>
</template>
  
<script setup>
  defineProps({
    menuItems: {
      type: Array,
      required: true,
    },
  });
</script>

<style scoped>
    .menu {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem; 
    justify-content: center;
    }
    button {
    padding: 0.8rem 1.8rem;
    border: none;
    border-radius: 30px;
    font-weight: 600; 
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    letter-spacing: 0.5px;
    }

    .btn-menu {
    background: #fff;
    color: #333;
    width: 300px;
    border: 1px solid #eee;
    }

    .btn-menu:hover {
    background: #e9ecef; 
    color: #000;
    border-color: #dee2e6;
    }

</style>

  