import 'phaser';
import { MyGame } from './game';

let configObject: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'canvas',
    width: 1920,
    height: 1080,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  backgroundColor: '#FFFFFF',
  scene: [MyGame],
};

new Phaser.Game(configObject);
