import PlayerChoice from './PlayerChoice'

export default class Event {
    constructor() {
        this.playerChoices = [];
        this.eventText = "";
    }

    addChoice(id, text) {
        this.playerChoices.push(new PlayerChoice(id, text));
    }

    removeChoice(id) {
        var choice = this.playerChoices.find(x => x.id == id);
        this.playerChoices.remove(choice);
    }
}