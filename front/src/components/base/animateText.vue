<template>
  <div class="main">
    <div class="text">
      <h1>{{ displayedText }}</h1>
      <h2><a>{{ tag1 }}</a></h2>
      <h2><a> {{ tag2 }}</a></h2>
      <h2><a>{{ tag3 }}</a></h2>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps({
  content: String,
  tag1: String,
  tag2: String,
  tag3: String,
  url1: String,
  url2: String,
  url3: String
});
const displayedText = ref("");
onMounted(() => {
  typeText(props.content, 0); 
});
function typeText(word, currentIndex) {
  if (currentIndex <= word.length) {
    displayedText.value += word.charAt(currentIndex);
    setTimeout(() => {
      typeText(word, currentIndex + 1); 
    }, 100);
  }
}
</script>

<style scoped>
.main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  min-width: 6em;
  text-align: center;
}
a {
  color: black;
}
</style>