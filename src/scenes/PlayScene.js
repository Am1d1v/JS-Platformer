import Phaser from "phaser";


class PlayScene extends Phaser.Scene {
    constructor(){
        super('PlayScene');
    }

    create(){
        const map = this.createMap();
        this.createLayers(map);
    }

    createMap(){
        // Render map
        const map = this.make.tilemap({key: 'crystalWorld'});

        // Tiles sets
        map.addTilesetImage('main_lev_build_1', 'tileSet-1');

        return map;
    }

    createLayers(map){

        const tileSet = map.getTileset('main_lev_build_1');

        // Render platform's decorations
        map.createStaticLayer('environment', tileSet);

        // Render platforms(ground)
        map.createStaticLayer('platforms', tileSet);
    }


}
export default PlayScene;