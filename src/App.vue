// JS
<script setup>
import { computed, ref } from 'vue'
import { AppState } from './AppState.js'

const bread = ref(0)

</script>


// HTML
<template>
<main class="container-fluid">
  <section class="row">
    <div class="text-light text-center mt-4">
      <h2>Click Me To Get Yo Bread Up!</h2>
    </div>
    <div class="col-12 text-center my-3">
      <img @click="bread++" src="/src/assets/img/moon.png" alt="Image Of Moon" draggable="false"> 
    </div>
  </section>

  <section>
    <div class="text-center text-light">
      <p>Yo Bread {{ bread }}</p>
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
  user-select: none;
  cursor: pointer;
}

main{
  background-color: rgb(40, 40, 40);
}
</style>