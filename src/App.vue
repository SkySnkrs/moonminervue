// JS
<script setup>
import { computed } from 'vue'
import { AppState } from './AppState.js'
import Moon from './components/Moon.vue';
import Upgrades from './components/Upgrades.vue';



</script>


// HTML
<template>
<main class="container-fluid">
  <Moon/>
</main>
<footer class="container-fluid">
  <Upgrades/>
</footer>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";

main{
  background-color: rgb(40, 40, 40);
  max-height: 70dvh;
}

footer{
  background-color: rgb(40, 40, 40);
  color: lightcyan;
  min-height: 30dvh;


}

</style>