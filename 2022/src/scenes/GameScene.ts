import { Scene } from 'phaser'
import { Player } from '../classes'

export class GameScene extends Scene {
  private player!: Player
  private map!: any
  private tileset!: any
  private groundLayer!: any
  private wallsLayer!: any

  constructor() {
    super('game-scene')
  }

  create(): void {
    this.initMap()
    // this.player = new Player(this, 100, 100)
  }

  update(): void {
    // this.player.update()
  }

  private initMap(): void {
    this.map = this.make.tilemap({
      key: "tilemapPlatform",
      tileWidth: 16,
      tileHeight: 16,
    });
    this.tileset = this.map.addTilesetImage("nature-paltformer-tileset-16x16", "Platform");
    this.groundLayer = this.map.createLayer("ground", this.tileset, 0, 0);
    // 设置世界的边缘
    this.physics.world.setBounds(
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );
  }
 
}
