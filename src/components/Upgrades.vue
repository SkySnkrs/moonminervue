<script setup>
import { AppState } from '@/AppState';
import { upgradesService } from '@/services/UpgradesService';
import { computed } from 'vue';

const upgrades = AppState.Upgrades;
const click = computed(()=> AppState.click)
const autoClick = computed(() => AppState.autoClick)

let autoUpgrade = []
let notAuto = []

for (let i = 0; i < upgrades.length; i++) {
    const upgrade = upgrades[i];
    if (upgrade.auto === true){
        autoUpgrade.push(upgrade)
    } else{
        notAuto.push(upgrade)
    }
    
}
function autoMine(){
    upgradesService.autoMine()
}

setInterval(() => {
    autoMine();
}, 3000);

function buyUpgrade(id){
    upgradesService.buyUpgrade(id)
}
</script>


<template>
    <section class="upgradeSection">
        <div class="notAuto row text-light justify-content-around text-center p-3">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-start fw-bold mb-0">Clicking Bread Getta Upgrades</h4> 
                <p class="text-end mb-0">
                    Your Total Bread Getting: {{ click }}
                </p>
            </div>
            <div v-for="upgrade in notAuto" :key="upgrade.name" class="col-md-6">
                <div class="upgradeCard text-center  align-items-center">
                    {{ upgrade.name }}, Cost: <i class="mdi mdi-bread-slice"></i> {{ upgrade.cost }}

                    <div class="text-end mt-3">
                        <button @click="buyUpgrade(upgrade.id)" class="btn btn-success p-2">
                            Buy <i class="mdi mdi-bread-slice fs-5"></i>{{ upgrade.cost }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="autoUpgrades row text-light justify-content-around text-center p-3">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-start fw-bold mb-0">Auto Bread Getta Upgrades</h4> 
                <p class="text-end mb-0">
                    Your Total Auto Bread Getting: {{ autoClick }} / 3s
                </p>
            </div>
            <div v-for="upgrade in autoUpgrade" :key="upgrade.name" class="col-md-6">
                <div class="upgradeCard text-center  align-items-center">
                    {{ upgrade.name }}, Cost: <i class="mdi mdi-bread-slice"></i> {{ upgrade.cost }}

                    <div class="text-end mt-3">
                        <button @click="buyUpgrade(upgrade.id)" class="btn btn-success p-2">
                            Buy <i class="mdi mdi-bread-slice fs-5"></i>{{ upgrade.cost }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>

.upgradeSection{
    border: 2px solid lightgrey;
}

.notAuto{
    margin-top: 1em;
}
.autoUpgrades{
    margin-top: 1em;
    margin-bottom: 1em;

}
.upgradeCard{
    border: 1px solid white;
    box-shadow: 2px 2px white;
    padding: 1.25em;
    margin-top: 1em;
}

</style>