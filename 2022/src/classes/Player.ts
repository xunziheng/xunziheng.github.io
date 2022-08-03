import { Physics } from 'phaser'

export class Player extends Physics.Arcade.Sprite {

  private cursors: Phaser.Types.Input.Keyboard.CursorKeys
  
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'player')
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.setScale(0.3)
    this.cursors = this.scene.input.keyboard.createCursorKeys()
    this.initAnimations();
    this.setGravityY(20000);
  }

  protected checkFlip(): void {
    if (this.body.velocity.x < 0) {
      this.scaleX = 0.3
    } else {
      this.scaleX = -0.3
    }
  }

  update(): void {    
    if (this.cursors.left.isDown) {
      this.body.velocity.x = -110
      this.checkFlip()
      this.anims.play("run", true);
    } else if (this.cursors.right.isDown) {
      this.body.velocity.x = 110
      this.checkFlip()
      this.anims.play("run", true);
    } else {
      this.setVelocity(0)
    }

    if (this.cursors.up.isDown && this.body.blocked.down) {
      this.setVelocityY(-5000)
    }
  }

  private initAnimations(): void {
    this.scene.anims.create({
      key: "run",
      frames: this.scene.anims.generateFrameNames("player", {
        prefix: "run-",
        start: 1,
        end: 4,
      }),
      frameRate: 8,
    });
  }
}
