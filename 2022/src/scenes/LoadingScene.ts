import { Scene } from 'phaser'

export default class LoadingScene extends Scene {
  
  constructor() {
    super('loading-scene')
  }

  preload() {
    this.load.baseURL = 'assets/'
    this.load.image('logo', 'logo.png')
  }

  init() {}

  create(): void {
    this.add.sprite(100, 100, 'logo')
  }

  update() {}
}
