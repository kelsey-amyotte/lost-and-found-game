export default class GameWorld {
    constructor() {
        this.waterSupply = 20;
        this.foodSupply = 10;
        this.stoneSupply = 0;
        this.dirtSupply = 0;
        this.weatherCondition = "clear";
        //Clear, Hot, Hotter, Rain, Heavy Rain, Fog, Heavy Fog
        this.waterCollector = false
        this.firePitHealth = 0;
        this.foundMine = false;
        this.foundRiver = false;
        this.campMoved = false;
    }

    
}


