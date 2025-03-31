<template>
  <div class="main">
    <div class="menu">
      <button class="btn-menu">Все мероприятия</button>
      <button class="btn-menu">Для частных клиентов</button>
      <button class="btn-menu">Для корпоративных клиентов</button>
    </div>
    <div class="cards-container">
      <div class="card" v-for="card in cardData" :key="card.id">
        <h2>{{ card.title }}</h2>
        <p>{{ card.description }}</p>
        <p><strong>{{ card.price }} руб</strong></p>
        <div class="card-footer">
          <button class="btn-action">Заказать</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 3rem 2rem; 
  background: #f8f9fa; 
}

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

.btn-action {
  width: 100%;
  background: #000; 
  color: #fff;
}

.btn-action:hover {
  box-shadow: 5px -5px 5px #B915CC;
  background: #8DE41C; 
  color: #000;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08); 
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
}

.card h2 {
  font-size: 1.25rem;
  margin-bottom: 0.8rem;
  color: #333;
}

.card p {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.card .price {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0;
}


.card-footer {
  margin-top: auto; 
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-top: 1.5rem; 
  text-align: center; 
}
</style>

<script setup>
const cardData = [
    {
        id: 1,
        title: "Корпоративное мероприятие",
        description: "Профессиональная организация событий для укрепления команды и имиджа вашего бизнеса.",
        typeForDisplay: "Корпоративным клиентам",
        clientCategory: "corporate", 
        price: 250000
    },
    {
        id: 2,
        title: "Организация деловых приемов и конференций",
        description: "Безупречное проведение статусных бизнес-встреч, форумов и конференций.",
        typeForDisplay: "Корпоративным клиентам",
        clientCategory: "corporate",
        price: 350000
    },
    {
        id: 3,
        title: "Эксклюзивная свадьба 'Ваша История'",
        description: "Создание уникального свадебного торжества премиум-класса под ключ.",
        typeForDisplay: "Частным клиентам",
        clientCategory: "private",
        price: 850000
    },
    {
        id: 4,
        title: "Проведение статусных частных торжеств",
        description: "Организация юбилеев, годовщин и других значимых событий на высшем уровне.",
        typeForDisplay: "Частным клиентам",
        clientCategory: "private",
        price: 450000
    },
    {
        id: 5,
        title: "Юбилей компании 'Новый Рубеж'",
        description: "Масштабное и респектабельное празднование юбилея вашей организации.",
        typeForDisplay: "Корпоративным клиентам",
        clientCategory: "corporate",
        price: 600000
    },
    {
    id: 6,
          title: "Организация выставок и презентаций",
          description: "Профессиональная подготовка и проведение выставок, презентаций и показов.",
          typeForDisplay: "Корпоративным клиентам",
          clientCategory: "corporate",
          price: 400000
      },
      {
          id: 7,
          title: "Проведение благотворительных вечеров",
          description: "Организация вечеров и мероприятий для поддержки социальных проектов и фондов.",
          typeForDisplay: "Частным клиентам",
          clientCategory: "private",
          price: 300000
      },
      {
          id: 8,
          title: "Организация детских праздников",
          description: "Создание незабываемых детских праздников и мероприятий.",
          typeForDisplay: "Частным клиентам",
          clientCategory: "private",
          price: 200000
      },
      {
          id: 9,
          title: "Проведение спортивных мероприятий",
          description: "Организация спортивных соревнований, турниров и фестивалей.",
          typeForDisplay: "Корпоративным клиентам",
          clientCategory: "corporate",
          price: 500000
      },
      {
          id: 10,
          title: "Организация концертных программ",
          description: "Создание уникальных концертных программ и мероприятий.",
          typeForDisplay: "Частным клиентам",
          clientCategory: "private",
          price: 650000
      },
      {
          id: 11,
          title: "Проведение фестивалей и ярмарок",
          description: "Организация фестивалей, ярмарок и других массовых мероприятий.",
          typeForDisplay: "Корпоративным клиентам",
          clientCategory: "corporate",
          price: 800000
      }
      ];
</script>