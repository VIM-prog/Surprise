<template>
    <HeadTitle title="SURPRISE"></HeadTitle>
    <OurMission 
      purpose="(Our mission)"
      slogan="Праздник-" 
      slogan2="легко!"
      description="Наша задача сделать такой праздник, который ты точно запомнишь"
    ></OurMission>
    <Animate 
      tag1="Весело" 
      tag2="Неповторимо" 
      tag3="и_со_вкусом" 
      title="Как у нас проходят праздники?" 
      :url="funGif"
    ></Animate>
  </template>
  
  <script setup>
  import Animate from '@/components/base/animate.vue';
  import HeadTitle from '@/components/base/headTitle.vue';
  import OurMission from '@/components/base/ourMission.vue';
  import funGif from '@/assets/images/giphy.gif';
  </script>

  <style scoped>
  </style>