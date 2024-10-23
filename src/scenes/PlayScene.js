import Phaser from "phaser";


class PlayScene extends Phaser.Scene {
    constructor(){
        super('PlayScene');
    }

    create(){
        const map = this.createMap();
        this.createLayers(map);

        // Render player
        this.createPlayer();
    }

    createMap(){
        // Render map
        const map = this.make.tilemap({key: 'crystalWorld'});

        // Tiles sets
        const layers = map.addTilesetImage('main_lev_build_1', 'tileSet-1');

        return map;
    }

    createLayers(map){

        const tileSet = map.getTileset('main_lev_build_1');

        // Render platform's decorations
        const environment = map.createStaticLayer('environment', tileSet);

        // Render platforms(ground)
        const platforms = map.createDynamicLayer('platforms', tileSet);

        return {
            environment,
            platforms
        }
    };

    // Render player
    createPlayer(){
        const player = this.physics.add.sprite(100, 300, 'idle1')
    }


}
export default PlayScene;