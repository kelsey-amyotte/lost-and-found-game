export default class ActionsUI extends Phaser.GameObjects.Text {
    constructor(scene, message) {
        var style = {
            fontFamily: 'Arial',
            fontSize: '16px',
            fill: '#574744',
        }

        var x = 700;
        var y = 775;

        super(scene, x, y, "Actions: " + message, style);
        //debugger;
        scene.add.existing(this);

        this.scene = scene;

        this.setOrigin(0);
    }

    changeActions(action) {
        this.text = action;
    }
}
