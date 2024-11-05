import Phaser from "phaser";
import initAnimation from './PlayerAnimations';


class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'playerMoveSprite');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        // Handle player's inputs
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        
        this.init();
        this.initEvents();
    }

    init(){

        // Gravity params
        const gravity = 600;

        // Player X axis movement speed
        this.playerSpeed = 180

        // Set gravity to player
        this.body.setGravityY(gravity);

        // Jumps counter. 
        this.jumpCount = 0;

        // How many jumps available in the air(After first jump)
        this.consecutiveJumps = 1;

        // Prevent player to cross image borders
        this.setCollideWorldBounds(true);

        // Player's movement animation
        initAnimation(this.scene.anims);

    }

    initEvents(){
        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
    }

    // Update sprite's animations
    update(){
        const {left, right, space, up} = this.cursors;

        // Player in on the floor/ground/platform
        const isOnFloor = this.body.onFloor();

        // Check that space bar was presse only 1 time
        const isSpaceJustDown = Phaser.Input.Keyboard.JustDown(space);

        // Check that up key was presse only 1 time
        const isUpJustDown = Phaser.Input.Keyboard.JustDown(up);

        // Handle player's movement X axis
        if(left.isDown){ // Move to the left direction

            this.setVelocityX(-this.playerSpeed);

            // Flip player's sprite on X axis sheet depending on movement direction
            this.setFlipX(true);
            
        } else if (right.isDown) { // Move to the right direction

            this.setVelocityX(this.playerSpeed);

            // Flip player's sprite on X axis sheet depending on movement direction
            this.setFlipX(false);

        } else {
            // Stay on the same spot
            this.setVelocityX(0);
        }   

        // Jumping. Decreasing player's Y axis
        if((isOnFloor || this.jumpCount < this.consecutiveJumps) && (isSpaceJustDown || isUpJustDown)){
            this.setVelocityY(-500);
            this.play('jump');
            this.jumpCount += 1;
            console.log(this.jumpCount);
        }

        // Set jump counter to 0 if player is on the ground
        if(isOnFloor) this.jumpCount = 0;

        // Switching between idle & running animations
        if(isOnFloor){
            this.body.velocity.x === 0 ? this.play('idle', true) : this.play('run', true);
        } else {
            this.play('jump');
        }
        

    }
}
export default Player;