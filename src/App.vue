// JS
<script setup>
import { computed } from 'vue'
import { AppState } from './AppState.js'
import Moon from './components/Moon.vue';



</script>


// HTML
<template>
<main class="container-fluid">
  <Moon/>
</main>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";

main{
  background-color: rgb(40, 40, 40);
}

</style>