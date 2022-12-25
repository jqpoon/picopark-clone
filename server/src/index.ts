import 'phaser';
import { EnvironmentScene } from './scenes/environment';
import { LoadingScene } from './scenes/loading';
import { UIScene } from './scenes/ui';

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
  scene: [LoadingScene, UIScene, EnvironmentScene],
};

new Phaser.Game(configObject);
