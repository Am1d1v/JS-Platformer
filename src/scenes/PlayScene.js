import Phaser from "phaser";


class PlayScene extends Phaser.Scene {
    constructor(){
        super('PlayScene');
    }

    create(){

        // Render map
        const map = this.make.tilemap({key: 'crystalWorld'});

        // Tiles sets
        const tileSet1 = map.addTilesetImage('main_lev_build_1', 'tileSet-1');
        const tileSet2 = map.addTilesetImage('main_lev_build_2', 'tileSet-2');

        map.createStaticLayer('environment', tileSet1);
        map.createStaticLayer('platforms', tileSet2);
    }


}
export default PlayScene;