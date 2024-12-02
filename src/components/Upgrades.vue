<script setup>
import { AppState } from '@/AppState';

const upgrades = AppState.Upgrades;
</script>


<template>
    <section class="row text-light">
        <div v-for="upgrade in upgrades" :key="upgrade.name" class="col-md-6">
            <div class="upgradeCard">
                {{ upgrade.name }} - Cost: {{ upgrade.cost }}
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>

.upgradeCard{
    border: 1px solid white;
    box-shadow: 2px 2px white;
    padding: 1.25em;
    margin-top: 1em;
}

</style>