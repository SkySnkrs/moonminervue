import { AppState } from "@/AppState.js"


class MinesService {

    
    mine(bread){
        bread.value += AppState.click
        AppState.bread += AppState.click
    }
}

export const minesService = new MinesService()