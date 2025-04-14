<template>
    <div class="cards-container">
      <Card
        v-for="card in cards"
        :key="card.id"
        :id="card.id"
        :title="card.title"
        :description="card.description"
        :price="card.price"
        @order="handleOrder"
      />
    </div>
  </template>
  
  <script setup>
  import Card from './card.vue';
  
  defineProps({
    cards: {
      type: Array,
      required: true,
    },
  });
  
  const handleOrder = (id) => {
    console.log('Заказ карточки с id:', id);
  };
  </script>

<style scoped>
    .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    }
</style>