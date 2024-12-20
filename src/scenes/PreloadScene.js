import Phaser from "phaser";


class PreloadScene extends Phaser.Scene {
    constructor(){
        super('PreloadScene');
    }

    // Load Assets
    preload(){
        // Load default scene background & platforms
        this.load.tilemapTiledJSON('map', 'assets/crystal_world_map.json');
        this.load.image('tileSet-1', 'assets/main_lev_build_1.png');
        this.load.image('tileSet-2', 'assets/main_lev_build_2.png');

        // Load player's idle sprite
        //this.load.image('idle1', 'assets/player/movements/idle01.png');

        // Load player's movement animation
        this.load.spritesheet('playerMoveSprite', 'assets/player/move_sprite_1.png', {
            frameWidth: 32,
            frameHeight: 38,
            spacing: 32
        });
    };

    create(){
        this.scene.start('PlayScene');
    };

};

export default PreloadScene;