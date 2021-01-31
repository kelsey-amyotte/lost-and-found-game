/*
Generic enemy class that extends Phaser sprites.
Classes for enemy types extend this class.
*/

export default class Node extends Phaser.GameObjects.Image {
    constructor(scene, player, cursor) {
        super(scene, Math.random() * 500, Math.random() * 500, 'url(../../assets/node.png)');
        scene.add.existing(this);
        this.setInteractive({ cursor: 'url(../assets/input/' + cursor + '.png), pointer'});
        this.alpha = .1;

        this.player = player;

        this.on('pointerup', function() {
            //scene.scene.switch('EventScene', cursor);
            this.player.actions--;
            console.log(this.player.actions);
        })
    }
}
