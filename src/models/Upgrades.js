export class Upgrades {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.cost = data.cost;
        this.quantity = 0;
        this.multiplier = 1;
    }
}