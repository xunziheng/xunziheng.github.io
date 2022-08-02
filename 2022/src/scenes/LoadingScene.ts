import { Scene } from 'phaser'

export class LoadingScene extends Scene {
  
  constructor() {
    super('loading-scene')
  }

  preload() {
    this.load.baseURL = 'assets/'
    this.load.image('player', 'logo.png')

    this.load.image('Platform', 'tilemaps/Platform.png')
    this.load.tilemapTiledJSON('tilemapPlatform', 'tilemaps/Platform.json')
  }

  create(): void {
    this.scene.start('game-scene')
  }

  update() {}
}
