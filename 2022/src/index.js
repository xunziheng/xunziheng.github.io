import Phaser from 'phaser';
import './css/index.css'

class MainGame extends Phaser.Scene
{
  constructor () {
    super();
  }

  preload () {

  }
    
  create () {
    
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-root',
  width: window.innerWidth,
  height: window.innerHeight,
  scene: MainGame
};

const game = new Phaser.Game(config);

window.addEventListener('resize', function (event) {
  game.scale.resize(window.innerWidth, window.innerHeight);
}, false);