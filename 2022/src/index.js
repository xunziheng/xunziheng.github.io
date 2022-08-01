import Phaser from 'phaser';
import './css/index.css'
import logoImg from './assets/logo.png';

class MyGame extends Phaser.Scene
{
  constructor () {
    super();
  }

  preload () {
    this.load.image('logo', logoImg);
  }
    
  create () {
    const logo = this.add.image(400, 150, 'logo');
  
    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1
    });
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: window.innerWidth,
  height: window.innerHeight,
  scene: MyGame
};

const game = new Phaser.Game(config);

window.addEventListener('resize', function (event) {
  game.scale.resize(window.innerWidth, window.innerHeight);
}, false);