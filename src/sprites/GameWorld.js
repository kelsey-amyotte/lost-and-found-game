import Node from './Node';
import LootNode from './LootNode';
import WoodNode from './WoodNode';

export default class GameWorld extends Phaser.GameObjects.Group {
    constructor(scene, player) {
        super(scene);
        scene.add.group();

        this.scene = scene;

        this.player = player;

        this.nodes = this.get_nodes();

        this.addMultiple(this.nodes);

    }

    get_nodes() {
        var nodeList = [];

        var number_of_nodes = Phaser.Math.Between(3, 5);

        for(var i = 0; i < number_of_nodes; i++) {
            if (Phaser.Math.Between(1, 2) == 1) {
                nodeList.push(new LootNode(this.scene, this.player));
            } else {
                nodeList.push(new WoodNode(this.scene, this.player));
            }
        }

        return nodeList;
    }
}
