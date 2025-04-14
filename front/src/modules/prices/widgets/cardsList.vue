<template>
    <div class="main">
      <Menu :menuItems="menuItems" @select="handleMenuSelect"></Menu>
      <CardsContainer :cards="filteredCards" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Menu from '../components/menu.vue';
  import CardsContainer from '../components/cardsContainer.vue';
  import { getActive, getForClient, getForCorparation } from '../api/get';
  
  const menuItems = ref([
    { label: 'Все услуги', value: 'active' },
    { label: 'Для частных клиентов', value: 'forClients' },
    { label: 'Для корпоративных клиентов', value: 'forCorparations' }
  ]);
  
  const filteredCards = ref([]);
  
  const fetchCards = async (type) => {
    let response;
  
    try {
      switch (type) {
        case 'active':
          response = await getActive();
          break;
        case 'forClients':
          response = await getForClient();
          break;
        case 'forCorparations':
          response = await getForCorparation();
          break;
        default:
          response = { data: [] };
      }
  
      filteredCards.value = response.data; 
    } catch (error) {
      console.error("Error fetching cards:", error);
      filteredCards.value = [];
    }
  };
  
  const handleMenuSelect = (value) => {
    fetchCards(value); 
  };
  
  onMounted(() => {
    fetchCards('active');
  });
  </script>

<style scoped>
    .main {
    padding: 3rem 2rem; 
    }
</style>