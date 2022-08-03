import { Scene, Tilemaps } from 'phaser'
import { Player } from '../classes'

export class GameScene extends Scene {
  private player!: Player
  private map!: Tilemaps.Tilemap
  private tileset!: Tilemaps.Tileset
  private groundLayer!: Tilemaps.TilemapLayer

  constructor() {
    super('game-scene')
  }

  create(): void {
    this.initMap()
    this.player = new Player(this, 100, 100)
    // this.showDebugWalls();
    this.physics.add.collider(this.player, this.groundLayer)
  }

  update(): void {
    this.player.update()
  }

  private initMap(): void {
    this.map = this.make.tilemap({
      key: "tilemapPlatform",
      tileWidth: 16,
      tileHeight: 16,
    });
    this.tileset = this.map.addTilesetImage("nature-paltformer-tileset-16x16", "Platform");
    this.groundLayer = this.map.createLayer("ground", this.tileset, 0, 0);
    this.groundLayer.setCollisionByProperty({ collides: true });
    // 设置世界的边缘
    this.physics.world.setBounds(
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );
  }

  private showDebugWalls(): void {
    const debugGraphics = this.add.graphics().setAlpha(0.7);
    this.groundLayer.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(24, 234, 48, 255),
    });
  }
}
