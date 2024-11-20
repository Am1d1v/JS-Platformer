import Phaser from "phaser";
import Player from "../entities/Player";


class PlayScene extends Phaser.Scene {
    constructor(config){
        super('PlayScene');

        this.config = config;
    }

    create(){
        const map = this.createMap();
        const layers = this.createLayers(map);

        // Render player
        const player = this.createPlayer();

        // Player's movement speed (pixels per second)
        this.playerSpeed = 180;

        // Set collision between player and platforms
        this.createPlayerColliders(player, {colliders: {
            platformColliders: layers.platforms_colliders
        }});

        // Setup Following Camera
        this.setupFollowUpCameraOn(player);

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

        // Player zones
        const playerZone = map.getObjectLayer('player_zones').objects;
  
        // Set collision to platforms
        platforms_colliders.setCollisionByExclusion(-1, true);

        return {
            environment,
            platforms,
            platforms_colliders,
            playerZone
        }
    };

    // Render player
    createPlayer(){
        return new Player(this, 100, 250);
    }

    createPlayerColliders(player, {colliders}){
        player.addCollider(colliders.platformColliders);
    }

    // Setup Following Camera on Player
    setupFollowUpCameraOn(player){

        const {height, width, mapOffset, zoomFactor} = this.config;

        // Fall camera effect 
        this.physics.world.setBounds(0, 0, width + mapOffset, height + 300);

        // Camera boundary, camera stop following after cross boundary 
        this.cameras.main.setBounds(0, 0, width + mapOffset, height).setZoom(zoomFactor);

        this.cameras.main.startFollow(player);
    }

}
export default PlayScene;