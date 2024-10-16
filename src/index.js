import Phaser from "phaser";
import PlayScene from "./scenes/PlayScene";

const WIDTH = 1200;
const HEIGHT = 600;

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
};

// Array of scenes
const SCENES = [PlayScene];
const createScene = Scene => new Scene(SHARED_CONFIG);

// Scenes initialization
const initScenes = () => SCENES.map(createScene);

// Game Configuration
const config = {
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  scene: initScenes()
};



new Phaser.Game(config);