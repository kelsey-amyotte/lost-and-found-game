export default class Event extends Phaser.GameObjects.Group {
    constructor() {
        this.elements = [];
    }

    enqueue(e) {
        this.elements.push(e);
    }

    dequeue() {
        return this.elements.shift();
    }

    isEmpty() {
        return this.elements.length == 0;
    }

    length() {
        return this.elements.length;
    }

    peek() {
        if (this.isEmpty()) {
            return this.elements[0]
        } else {
            return undefined;
        }
    }
}
