<script setup>
import { AppState } from '@/AppState';
import { minesService } from '@/services/MineService';
import { computed } from "vue"

const bread = computed(()=> AppState.bread)

function mine(){
    minesService.mine(bread)
}

</script>


<template>
    <section class="row">
        <div class="text-light text-center mt-4">
        <h2>Click Me To Get Yo Bread Up!</h2>
        </div>
        <div class="col-12 text-center my-3">
        <img @click="mine()" src="/src/assets/img/moon.png" alt="Image Of Moon" draggable="false"> 
        </div>
    </section>

    <section>
        <div class="text-center text-light">
        <p>Yo Bread {{ bread }}</p>
        </div>
    </section>
</template>


<style lang="scss" scoped>

img{
  height: 20em;
  aspect-ratio: 1/1;
  user-select: none;
  cursor: pointer;
}

</style>