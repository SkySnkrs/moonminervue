import { AppState } from "@/AppState.js"

class UpgradesService{
    autoMine() {
        AppState.bread += AppState.autoClick
    }

    buyUpgrade(id){
        for (let i = 0; i < AppState.Upgrades.length; i++) {
            const upgrade = AppState.Upgrades[i];
            if(upgrade.id == id){
                if (upgrade.auto == false){
                    if (AppState.bread >= upgrade.cost){
                        AppState.bread -= upgrade.cost
                        AppState.click += upgrade.strength
                    } else{
                        return
                    }
                } else {
                    if (AppState.bread >= upgrade.cost){
                        AppState.bread -= upgrade.cost
                        AppState.autoClick += upgrade.strength
                    } else{
                        return
                    }
                }
            }
        }
    }
}

export const upgradesService = new UpgradesService()