<script setup>
import { AppState } from '@/AppState';
import { minesService } from '@/services/MineService';
import { computed } from "vue"

const bread = computed(()=> AppState.bread)

function mine(){
    minesService.mine(bread)
}

const message = computed(() => {
    if (bread.value >= 100000) {
        return 'HOLY S**T YOU ARE RICH';
    } else if (bread.value >= 1000) {
        return 'Maybe You Are Getting Somewhere';
    } else if (bread.value >= 100) {
        return 'You Actually Have Something';
    } else if (bread.value >= 250){
        return 'Could you be any slower...'
    } else if (bread.value >= 650){
        return 'MAN COME ON'
    } else {
        return 'BROKIE';
    }
});
</script>


<template>
    <section class="row">
        <div class="text-light text-center mt-4">
        <h2>Click Me To Get Yo Bread<i class="mdi mdi-bread-slice"></i> Up!</h2>
        </div>
        <div class="col-12 text-center my-3">
        <img @click="mine()" src="/src/assets/img/moon.png" alt="Image Of Moon" draggable="false"> 
        </div>
    </section>

    <section>
        <div class="text-center text-light">
        <p>Yo Bread: <i class="mdi mdi-bread-slice"></i>{{ bread }}</p>
        <p class="p-2 fw-bold text-warning">{{ message }}</p>
        </div>
    </section>
</template>


<style lang="scss" scoped>

img{
  height: 15em;
  aspect-ratio: 1/1;
  user-select: none;
  cursor: pointer;
}

</style>