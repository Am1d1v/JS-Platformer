import Phaser from "phaser";
import PlayScene from "./scenes/PlayScene";
import PreloadScene from './scenes/PreloadScene';


const WIDTH = 1200;
const HEIGHT = 600;

const MAP_WIDTH = 1600;

const SHARED_CONFIG = {
  width: document.body.offsetWidth,
  height: HEIGHT,
};

// Array of scenes
const SCENES = [PreloadScene, PlayScene];
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