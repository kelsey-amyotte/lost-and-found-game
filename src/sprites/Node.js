/*
Generic enemy class that extends Phaser sprites.
Classes for enemy types extend this class.
*/

export default class Node extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.add.existing(this);
        this.available = true;

        // Standard sprite is 16x16 pixels with a smaller body
        this.body.setSize(12, 12);
        this.body.offset.set(10, 12);
    }

    activated() {
    }

    kill() {
        this.scene.nodeGroup.remove(this);
        this.destroy();
    }
}
