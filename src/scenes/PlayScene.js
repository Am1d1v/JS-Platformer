import Phaser from "phaser";


class PlayScene extends Phaser.Scene {
    constructor(){
        super('PlayScene');
    }

    create(){
        const map = this.createMap();
        const layers = this.createLayers(map);

        // Render player
        const player = this.createPlayer();

        // Set coliision between player and platforms
        this.physics.add.collider(player, layers.platforms);
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
        const platforms = map.createStaticLayer('platforms', tileSet);

        // Set collision to platforms
        platforms.setCollisionByExclusion(-1, true);

        return {
            environment,
            platforms
        }
    };

    // Render player
    createPlayer(){
        const player = this.physics.add.sprite(100, 250, 'idle1');
        player.body.setGravity(0, 100);

        // Prevent player to cross image borders
        player.setCollideWorldBounds(true);

        return player;
    }


}
export default PlayScene;