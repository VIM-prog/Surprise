<template>
    <HeadTitle title="SURPRISE"></HeadTitle>
    <OurMission 
      slogan="Праздник-" 
      slogan2="легко!"
      description="Наша задача сделать такой праздник, который ты точно запомнишь"
    ></OurMission>
    <Animate 
      tag1="Инсталяция" 
      tag2="Уникальный дизайн" 
      tag3="Брендинг" 
      title="Мир в шаре" 
      :url="imageUrl"
    ></Animate>
  </template>
  
  <script setup>
  import Animate from '@/components/base/animate.vue';
  import HeadTitle from '@/components/base/headTitle.vue';
  import OurMission from '@/components/base/ourMission.vue';
  import imageUrl from '@/assets/images/img2.jpg';
  </script>