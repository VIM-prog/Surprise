<template>
  <div class="container">
    <h2>{{ title }}</h2>
    <div class="image-wrapper">
      <div 
        class="image-container" 
        :style="{ backgroundImage: `url(${url})`, backgroundSize: 'cover'}"
      ></div>
      <div class="tags">
        <h3>{{ tag1 }}</h3>
        <h3>{{ tag2 }}</h3>
        <h3>{{ tag3 }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tag1: String,
  tag2: String,
  tag3: String,
  title: String,
  url: String
})

</script>

<style scoped>
.container {
  height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center; 
  align-items: center; 
  margin: 0 auto; 
}


.image-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.image-container {
  margin: 0;
  width: 90vh;
  height: 70vh;
}

.tags {
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 50px;
  max-width: 3vh;
}
h2 {
  margin: 0;
  font-size: 6rem;
}
.tags h3 {
  margin: 0;
  font-size: 1.5rem;

}
</style>