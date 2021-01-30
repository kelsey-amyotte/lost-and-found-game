import Node from '../sprites/Node';

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
    }

    create() {

        this.input.setDefaultCursor('url(../assets/input/cursor.png), pointer');

        this.cameras.main.backgroundColor.setTo(255, 248, 247);

        // Add and play the music
        //this.music = this.sound.add('overworld');
        //this.music.play({
        //    loop: true
        //});

        /*parseObjectLayers() {
            // The map has one object layer with enemies as stamped tiles,
            // each tile has properties containing info on what enemy it represents.
            this.map.getObjectLayer('nodes').objects.forEach(
                (enemy) => {
                    let enemyObject;
                    switch (this.tileset.tileProperties[enemy.gid - 1].name) {
                        case 'explore':
                            enemyObject = new Goomba({
                                scene: this,
                                key: 'sprites16',
                                x: enemy.x,
                                y: enemy.y
                            });
                            break;
                        case 'turtle':
                            enemyObject = new Turtle({
                                scene: this,
                                key: 'mario-sprites',
                                x: enemy.x,
                                y: enemy.y
                            });
                            break;
                        default:
                            console.error('Unknown:', this.tileset.tileProperties[enemy.gid - 1]); // eslint-disable-line no-console
                            break;
                    }
                    this.enemyGroup.add(enemyObject);
                }
            );
    
            // The map has an object layer with 'modifiers' that do 'stuff', see below
            this.map.getObjectLayer('modifiers').objects.forEach((modifier) => {
                let tile, properties, type;
    
                // Get property stuff from the tile if present or just from the object layer directly
                if (typeof modifier.gid !== 'undefined') {
                    properties = this.tileset.tileProperties[modifier.gid - 1];
                    type = properties.type;
                    if (properties.hasOwnProperty('powerUp')) {
                        type = 'powerUp';
                    }
                } else {
                    type = modifier.properties.type;
                }
    
                switch (type) {
                    case 'powerUp':
                        // Modifies a questionmark below the modifier to contain something else than the default (coin)
                        tile = this.groundLayer.getTileAt(modifier.x / 16, modifier.y / 16 - 1);
                        tile.powerUp = properties.powerUp;
                        tile.properties.callback = 'questionMark';
                        if (!tile.collides) {
                            // Hidden block without a question mark
                            tile.setCollision(false, false, false, true);
                        }
                        break;
                    case 'pipe':
                        // Adds info on where to go from a pipe under the modifier
                        tile = this.groundLayer.getTileAt(modifier.x / 16, modifier.y / 16);
                        tile.properties.dest = parseInt(modifier.properties.goto);
                        break;
                    case 'dest':
                        // Adds a destination so that a pipe can find it
                        this.destinations[modifier.properties.id] = {
                            x: modifier.x + modifier.width / 2,
                            top: (modifier.y < 16)
                        };
                        break;
                    case 'room':
                        // Adds a 'room' that is just info on bounds so that we can add sections below pipes
                        // in an level just using one tilemap.
                        this.rooms.push({
                            x: modifier.x,
                            width: modifier.width,
                            sky: modifier.properties.sky
                        });
                        break;
                }
            });
        }*/

        this.createHUD();
    }

    update() {
    }

    updateScore() {
    }

    createHUD() {
        console.log("hud");
    }
}

export default GameScene;
