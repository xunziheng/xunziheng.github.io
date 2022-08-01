import { Scene } from 'phaser'
import { Player } from '../classes'

export class GameScene extends Scene {
  private player!: Player

  constructor() {
    super('game-scene')
  }

  create(): void {
    this.player = new Player(this, 100, 100)
  }

  update(): void {
    this.player.update()
  }
}
