import { Scene } from 'phaser'

export class LoadingScene extends Scene {
  
  constructor() {
    super('loading-scene')
  }

  preload() {
    this.load.baseURL = 'assets/'
    this.load.atlas('player', 'players.png', 'players.json')

    this.load.image('Platform', 'tilemaps/Platform.png')
    this.load.tilemapTiledJSON('tilemapPlatform', 'tilemaps/Platform.json')
  }

  create(): void {
    this.scene.start('game-scene')
  }

  update() {}
}
