import GameEventChoice from './GameEventChoice'

export default class GameEventChoiceGroup extends Phaser.GameObjects.Group {
    constructor(scene, playerChoices) {
        super(scene);

        scene.add.group();

        this.scene = scene;

        this.playerChoices = playerChoices;

        this.choices = this.displayChoices();

        this.addMultiple(this.choices);
    }

    displayChoices() {
        var playerChoicesList = [];
        var pos = 600;
        debugger;
        this.playerChoices.forEach(function(playerChoice) {
            var choice = new GameEventChoice(this.scene, 500, pos, playerChoice)
            playerChoicesList.push(choice);
            pos += 50;
        });

        return playerChoicesList;
    }
}
