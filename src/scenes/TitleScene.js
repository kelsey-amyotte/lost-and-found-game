class TitleScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'TitleScene'
        });
    }
    preload() {
        //this.load.atlas('mario-sprites', 'assets/mario-sprites.png', 'assets/mario-sprites.json');
    }

    create() {
        this.input.setDefaultCursor('url(../assets/input/cursor.png), pointer');

        this.cameras.main.backgroundColor.setTo(255, 248, 247);
        const x = this.scale.width * 0.5;
        const y = this.scale.height * 0.5;

        this.add.text(x, y - 20, 'Lost & Found', {
            fontFamily: 'Arial',
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#574744'
        }).setOrigin(0.5);

        var playButton = this.add.text(x, y + 55, 'Play', {
            fontFamily: 'Arial',
            fontSize: '36px',
            color: '#574744'
        }).setOrigin(0.5);


        playButton.setInteractive().on('pointerdown', function() {
            console.log("started");
            this.scene.scene.start('GameScene');
        });

    }

    update() {
    }

    restartScene() {
        //        this.attractMode.stop();
        this.scene.launch('GameScene');
        this.scene.bringToTop();

        this.registry.set('restartScene', false);
    }
}

export default TitleScene;
