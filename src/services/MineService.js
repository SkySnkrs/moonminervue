import { AppState } from "@/AppState.js"


class MinesService {

    
    mine(){
        AppState.bread += AppState.click
    }
}

export const minesService = new MinesService()