import { AppState } from "@/AppState.js"


class MinesService {

    
    mine(bread){
        bread.value++
        AppState.bread++
    }
}

export const minesService = new MinesService()