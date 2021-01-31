export default class GameEventText extends Phaser.GameObjects.Text {
    constructor(scene, x, y, message, style) {
        super(scene, x, y, message, style);
        //debugger;
        scene.add.existing(this);

        this.scene = scene;

        this.fade_in();
        
        //this.setInteractive().on('pointerdown', function() { this.fade_out()});

        this.setOrigin(0.5);
    }

    fade_in() {
        this.scene.tweens.add({
            targets: this,
            alpha: { start: 0, to: 1 },
            duration: 1000,
        }, this);
    }

    fade_out() {
        this.scene.tweens.add({
            targets: this,
            alpha: { start: 1, to: 0 },
            duration: 1000,
        }, this);
    }
}
