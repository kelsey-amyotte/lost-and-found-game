import Node from './Node';

export default class ExploreNode extends Node {
    constructor(config) {
        super(config);
    }

    create() {
        this.generate();
    }

    generate() {
        this.physics.add.sprite(100, 100, '../../assets/node.png')
    }

    update() {
        // If it's not activated, then just skip the update method (see Enemy.js)
        if (!this.activated()) {
            return;
        }
    }
}