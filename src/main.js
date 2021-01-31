import 'phaser';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';
import TitleScene from './scenes/TitleScene';
import EventScene from './scenes/EventScene';


const config = {
    type: Phaser.WEBGL,
    parent: 'content',
    width: 800,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
        }
    },
    scene: [
        BootScene,
        TitleScene,
        GameScene,
        EventScene
    ]
};

const game = new Phaser.Game(config); // eslint-disable-line no-unused-vars
