import Phaser from "phaser";


class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'idle1');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        // Handle player's inputs
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        
        this.init();
    }

    init(){

        // Gravity params
        const gravity = 100;

        // Player X axis movement speed
        this.playerSpeed = 100

        this.body.setGravityY(gravity);

        // Prevent player to cross image borders
        this.setCollideWorldBounds(true);

    }

    preUpdate(){
        const {left, right} = this.cursors;

        // Handle player's movement
        if(left.isDown){ // Move to the left direction
            this.setVelocityX(-this.playerSpeed);
        } else if (right.isDown) { // Move to the right direction
            this.setVelocityX(this.playerSpeed);
        } else {
            // Stay on the same spot
            this.setVelocityX(0);
        }   
    }
}
export default Player;