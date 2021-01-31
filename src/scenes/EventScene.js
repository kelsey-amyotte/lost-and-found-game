import GameEventService from '../sprites/Events/GameEventService'

class EventScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'EventScene'
        });

        this.choicePicked = false;
    }

    preload() {
    }

    create(data) {
        // set cursor
        this.input.setDefaultCursor('url(../assets/input/cursor.png), pointer');

        // set background color
        this.cameras.main.backgroundColor.setTo(255, 248, 247);

        // show event
        this.eventService = new GameEventService(this, data.eventText, data.playerChoices);
    }

    update() {
        if (this.choicePicked) {
            this.scene.scene.switch('GameScene');
            this.scene.scene.remove('EventScene');
        }
    }

    /*create(data) {
        // set cursor
        this.input.setDefaultCursor('url(../assets/input/cursor.png), pointer');

        // set background color
        this.cameras.main.backgroundColor.setTo(255, 248, 247);

        // show event
        this.eventService = new EventService(this);
        this.eventService.create_event(data.eventText, this.playerChoices);
    }*/

    update() {
    }
}

export default EventScene;
