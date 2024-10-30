import Phaser from "phaser";


class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'idle1');

        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        this.init();
    }

    init(){

        // Gravity params
        const gravity = 100;

        // 
        this.playerSpeed = 100

        this.body.setGravityY(gravity);

        // Prevent player to cross image borders
        this.setCollideWorldBounds(true);

    }
}
export default Player;