// JS
<script setup>
import { computed, ref } from 'vue'
import { AppState } from './AppState.js'

const cheese = ref(0)

</script>


// HTML
<template>
<main class="container-fluid">
  <section class="row">
    <div class="col-12 text-center my-3">
      <img src="/src/assets/img/moon.png" alt="Image Of Moon"> 
    </div>
       
  </section>
</main>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";

img{
  height: 20em;
  aspect-ratio: 1/1;
  text-shadow: 2px 2px red;
}

main{
  background-color: rgb(40, 40, 40);
}
</style>