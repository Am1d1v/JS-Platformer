import Phaser from "phaser";


class PreloadScene extends Phaser.Scene {
    constructor(){
        super('PreloadScene');
    }

    // Load Assets
    preload(){
        // Load default scene background
        this.load.tilemapTiledJSON('crystalWorld', 'assets/crystal_world_map.json');
        this.load.image('tileSet-1', 'assets/main_lev_build_1.png');
        this.load.image('tileSet-2', 'assets/main_lev_build_2.png');
    };

    create(){
        this.scene.start('PlayScene');
    };

};

export default PreloadScene;