export default class WeatherUI extends Phaser.GameObjects.Text {
    constructor(scene, message) {
        var style = {
            fontFamily: 'Arial',
            fontSize: '16px',
            fill: '#574744',
        }

        var x = 10;
        var y = 775;

        super(scene, x, y, "Weather: " + message, style);
        //debugger;
        scene.add.existing(this);

        this.scene = scene;

        this.setOrigin(0);
    }

    changeWeather(weather) {
        this.text = weather;
    }
}
