import GameMessage from '../sprites/GameMessage' 
import GameWorldLogic from '../Profile/GameWorldLogic';
import GameWorld from '../sprites/Gameworld';
import WeatherUI from '../sprites/UI/WeatherUI';
import ActionsUI from '../sprites/UI/ActionsUI';
import DayLoop from '../Logic/DayLoop';
import Player from '../Profile/Player';

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
    }

    create() {

        this.input.setDefaultCursor('url(../assets/input/cursor.png), pointer');

        this.cameras.main.backgroundColor.setTo(255, 248, 247);

        this.worldLogic = new GameWorldLogic();

        this.playerLogic = new Player();

        this.dayLoop = new DayLoop(this, this.worldLogic, this.playerLogic);

        this.weatherUI = new WeatherUI(this, this.worldLogic.weatherCondition);

        this.actionsUI = new ActionsUI(this, this.playerLogic.actions);

        this.messageService = new GameMessage(this, "Start of Day 1");

        new GameWorld(this, this.playerLogic);
    }

    update() {
        this.weatherUI.changeWeather("Weather: " + this.worldLogic.weatherCondition);
        this.actionsUI.changeActions("Actions: " + this.playerLogic.actions);
        if (this.playerLogic.actions <= 0) {
            this.dayLoop.endDay();
            new GameMessage(this, "Start of Day " + this.dayLoop.dayCount)
        }
    }
}

export default GameScene;
