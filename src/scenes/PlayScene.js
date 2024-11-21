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

        const playerZones = this.getPlayerZones(layers.playerZones);

        // Render player
        const player = this.createPlayer(playerZones);

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

        // Player zones(Spawn Point)
        const playerZones = map.getObjectLayer('player_zones');
  
        // Set collision to platforms
        platforms_colliders.setCollisionByExclusion(-1, true);

        return {
            environment,
            platforms,
            platforms_colliders,
            playerZones
        }
    };

    // Render player
    createPlayer({start}){
        return new Player(this, start.x, start.y);
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

    getPlayerZones(playeZonesLayer){
        const playerZones = playeZonesLayer.objects;
        
        console.log(playerZones);

        return {
            start: playerZones.find(zone => zone.name === "startZone"),
            end: playerZones.find(zone => zone.name === "endZone")
        }
    }

}
export default PlayScene;