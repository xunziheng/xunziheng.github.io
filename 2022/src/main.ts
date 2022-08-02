import { Game, Scale, Types, AUTO } from 'phaser'
import './style.css'
import { GameScene, LoadingScene } from './scenes'

export const gameConfig: Types.Core.GameConfig = {
  type: AUTO,
  parent: 'phaser-root',
  // backgroundColor: '#EFC4CE',
  backgroundColor: '#ffffff',
  scale: {
    mode: Scale.ScaleModes.NONE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  render: {
    antialiasGL: false,
    pixelArt: true,
  },
  callbacks: {
    postBoot: () => {
      sizeChanged()
    },
  },
  canvasStyle: `display: block; width: 100%; height: 100%;`,
  autoFocus: true,
  audio: {
    disableWebAudio: false,
  },
  scene: [LoadingScene, GameScene],
}

window.game = new Game(gameConfig)

function sizeChanged() {
  if (window.game.isBooted) {
    setTimeout(() => {
      window.game.scale.resize(window.innerWidth, window.innerHeight)

      window.game.canvas.setAttribute(
        'style',
        `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`
      )
    }, 100)
  }
}

window.onresize = () => sizeChanged()
