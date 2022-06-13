import Phaser from "phaser";

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.image("logo", "src/assets/logo.png");
    this.load.image("sky", "src/assets/sky.png");
    this.load.image("ground", "src/assets/platform.png");
    this.load.image("star", "src/assets/star.png");
    this.load.image("bomb", "src/assets/bomb.png");
    this.load.spritesheet("dude", "src/assets/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    /* Create background */
    this.add.image(400, 300, "sky");

    /* Add platforms */
    const platforms = this.physics.add.staticGroup();
    // Refresh body here since we have changed the scale of a static body
    platforms.create(400, 568, "ground").setScale(2).refreshBody();
    platforms.create(600, 400, "ground");
    platforms.create(50, 250, "ground");
    platforms.create(750, 220, "ground");

    // /* Add flying logo */
    // const logo = this.add.image(400, 150, "logo");
    // this.logo = logo;

    // this.tweens.add({
    //   targets: logo,
    //   y: 450,
    //   duration: 2000,
    //   ease: "Power2",
    //   yoyo: true,
    //   loop: -1,
    // });

    const player = this.physics.add.sprite(100, 450, "dude");

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    this.player = player;

    this.physics.add.collider(player, platforms);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("left", true);

    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("right", true);

    } else {
      this.player.setVelocityX(0);
      this.player.anims.play("turn");

    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: MyGame,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
};

const game = new Phaser.Game(config);
