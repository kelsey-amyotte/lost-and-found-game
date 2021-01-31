import DayLoop from '../../Logic/DayLoop'
import GameEventChoiceGroup from './GameEventChoiceGroup';
import GameEventText from './GameEventText'

export default class GameEventService {
    constructor(scene, eventText, playerChoices) {
        this.scene = scene;
        this.eventText = eventText;
        this.playerChoices = playerChoices;
        this.createEvent();
    }

    createEvent(eventText, playerChoices) {
        console.log(eventText);
        new GameEventText(this.scene, 500, 500, this.eventText);
        new GameEventChoiceGroup(this.scene, this.playerChoices)
    }
}