<template>
    <div class="card">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <p><strong>{{ price }} руб</strong></p>
      <div class="card-footer">
        <button class="btn-action" @click="$emit('order', id)">
          Заказать
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    id: [Number, String],
    title: String,
    description: String,
    price: [Number, String],
  });
  </script>

<style scoped>
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
</style>