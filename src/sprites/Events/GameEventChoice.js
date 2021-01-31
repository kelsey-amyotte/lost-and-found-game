export default class GameEventChoice extends Phaser.GameObjects.Text {
    constructor(scene, x, y, data) {   
        debugger;     
        var style = {
            fontFamily: 'Arial',
            fontSize: '36px',
            color: '#574744'
        };
        super(scene, x, y, data.text, style);
        //debugger;
        scene.add.existing(this);

        this.scene = scene;

        this.id = data.id;

        this.fadeIn();
        
        this.setInteractive().on('pointerdown', function() { this.selectChoice()});

        this.setOrigin(0.5);
    }

    fadeIn() {
        this.scene.tweens.add({
            targets: this,
            alpha: { start: 0, to: 1 },
            duration: 1000,
        }, this);
    }

    selectChoice() {
        return this.id;
    }
}
