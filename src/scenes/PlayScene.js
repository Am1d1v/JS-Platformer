import Phaser from "phaser";
import Player from "../entities/Player";


class PlayScene extends Phaser.Scene {
    constructor(){
        super('PlayScene');
    }

    create(){
        const map = this.createMap();
        const layers = this.createLayers(map);

        // Render player
        const player = this.createPlayer();

        // Player's movement speed (pixels per second)
        this.playerSpeed = 180;

        // Set coliision between player and platforms
        this.physics.add.collider(player, layers.platforms_colliders);

    }

    createMap(){
        // Render map
        const map = this.make.tilemap({key: 'map'});

        // Tiles sets
        map.addTilesetImage('main_lev_build_1', 'tileSet-1');

        return map;
    }

    createLayers(map){

        const tileSet = map.getTileset('main_lev_build_1');

        // Render platform's decorations
        const environment = map.createStaticLayer('environment', tileSet);

        // Render platforms(ground)
        const platforms = map.createStaticLayer('platforms', tileSet);

        // Render platforms(ground)
        const platforms_colliders = map.createStaticLayer('platforms_colliders', tileSet);
  
        // Set collision to platforms
        platforms_colliders.setCollisionByExclusion(-1, true);

        return {
            environment,
            platforms,
            platforms_colliders
        }
    };

    // Render player
    createPlayer(){
        return new Player(this, 100, 250);
    }

}
export default PlayScene;