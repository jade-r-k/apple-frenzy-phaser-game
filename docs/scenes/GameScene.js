/* GAME SCENE */
class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  init() {
    /* speed the player moves at */
    this.playerSpeed = 4;

    /* the max and min the fruit can move on the y axis */
    this.fruitMaxY = 590;
    this.fruitMinY = 0;

    /* score */
    this.score = 0;

    /* gets the width and height of canvas */
    this.scaleW = this.sys.game.config.width;
    this.scaleH = this.sys.game.config.height;
  }

  create() {
    this.createAudio();
    this.createInput();
    this.createBackground();
    this.createPlayer();
    this.createRed();
    this.createGreen();
    this.createAte();
    this.createWorm();
    this.createText();
  }

  /* background music */
  createAudio() {
    this.music = this.sound.add("bgmusic");
    this.music.play();
  }

  /* this reads what keys you are pressing on the keyboard */
  createInput() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  /* background */
  createBackground() {
    this.bg = this.add.sprite(0, 0, "orchard");
    this.bg.setOrigin(0, 0);
  }

  /* creating the player and setting up for score */
  createPlayer() {
    this.player = this.physics.add.sprite(640, 520, "farmer");
    this.player.setCollideWorldBounds(true);
    this.player.score = 0;
    this.player.apples = 0;

    /* animating the sprite */
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("farmer", {
        start: 3,
        end: 4
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("farmer", {
        start: 0,
        end: 1
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "stand",
      frames: [{
        key: "farmer",
        frame: 2
      }],
      frameRate: 10,
    });
  }

  /* Creating the red apples */
  createRed() {
    this.red = this.physics.add.group({
      key: "applered",
      repeat: 2,
      score: 1,
      setXY: {
        x: -250,
        y: 500,
        stepX: 150,
        stepY: 20,
      },
    });

    Phaser.Actions.ScaleXY(this.red.getChildren(), -0.25, -0.25);

    Phaser.Actions.Call(
      this.red.getChildren(),
      function (applered) {
        applered.speed = Math.random() * 2 + 2;
      },
      this
    );
  }

  /* Creating the green apples */
  createGreen() {
    this.green = this.physics.add.group({
      key: "applegreen",
      repeat: 2,
      score: 1,
      setXY: {
        x: -250,
        y: 500,
        stepX: 150,
        stepY: 20,
      },
    });

    Phaser.Actions.ScaleXY(this.green.getChildren(), -0.25, -0.25);

    Phaser.Actions.Call(
      this.green.getChildren(),
      function (applegreen) {
        applegreen.speed = Math.random() * 2 + 2;
      },
      this
    );
  }

  /* Creating the ate apples */
  createAte() {
    this.ate = this.physics.add.group({
      key: "appleate",
      repeat: 1,
      setXY: {
        x: -250,
        y: 500,
        stepX: 150,
        stepY: 20,
      },
    });

    Phaser.Actions.ScaleXY(this.ate.getChildren(), -0.25, -0.25);

    Phaser.Actions.Call(
      this.ate.getChildren(),
      function (appleate) {
        appleate.speed = Math.random() * 2 + 3;
      },
      this
    );
  }

  /* Creating the worm apples */
  createWorm() {
    this.worm = this.physics.add.group({
      key: "appleworm",
      repeat: 1,
      setXY: {
        x: -250,
        y: 500,
        stepX: 150,
        stepY: 20,
      },
    });

    Phaser.Actions.ScaleXY(this.worm.getChildren(), -0.25, -0.25);

    Phaser.Actions.Call(
      this.worm.getChildren(),
      function (appleworm) {
        appleworm.speed = Math.random() * 2 + 3;
      },
      this
    );
  }

  /*Score text */
  createText() {
    this.scoreText = this.add.bitmapText(16, 16, 'bmFont', 'Apples Caught: 0');
    this.scoreText.setScale(0.4);
  }

  /* Update */
  update() {

    /* Controls */
    if (this.cursors.left.isDown) {
      this.player.x -= this.playerSpeed;
      this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.x += this.playerSpeed;
      this.player.anims.play("right", true);
    } else {
      this.player.anims.play("stand");
    }

    /* Score */
    console.log(this.player.score);
    this.scoreText.setText("Apples caught: " + this.player.score);

    /* Animating the red apples */
    let red = this.red.getChildren();
    let numRed = red.length;
    for (let i = 0; i < numRed; i++) {
      red[i].y += red[i].speed;

      if (red[i].y >= this.fruitMaxY && red[i].speed > 0) {
        red[i].y = 0;
        red[i].x = Math.random() * 1280;
      }
      if (Phaser.Geom.Intersects.RectangleToRectangle(
          this.player.getBounds(),
          red[i].getBounds())) {

        this.player.apples++;
        this.player.score = 1 * this.player.apples;
        red[i].y = 0;
        red[i].x = Math.random() * 1280;
      }
    }

    /* Animating the green apples */
    let green = this.green.getChildren();
    let numGreen = green.length;
    for (let i = 0; i < numGreen; i++) {
      green[i].y += green[i].speed;

      if (green[i].y >= this.fruitMaxY && green[i].speed > 0) {
        green[i].y = 0;
        green[i].x = Math.random() * 1280;
      }
      if (Phaser.Geom.Intersects.RectangleToRectangle(
          this.player.getBounds(),
          green[i].getBounds())) {

        this.player.apples++;
        this.player.score = 1 * this.player.apples;
        green[i].y = 0;
        green[i].x = Math.random() * 1280;
      }
    }

    /* Animating the ate apples */
    let ate = this.ate.getChildren();
    let numAte = ate.length;
    for (let i = 0; i < numAte; i++) {
      ate[i].y += ate[i].speed;

      if (ate[i].y >= this.fruitMaxY && ate[i].speed > 0) {
        ate[i].y = 0;
        ate[i].x = Math.random() * 1280;
      }
      if (Phaser.Geom.Intersects.RectangleToRectangle(
          this.player.getBounds(),
          ate[i].getBounds())) {

        this.gameOver();
        break;
      }
    }

    /* Animating the worm apples */
    let worm = this.worm.getChildren();
    let numWorm = worm.length;
    for (let i = 0; i < numWorm; i++) {
      worm[i].y += worm[i].speed;

      if (worm[i].y >= this.fruitMaxY && worm[i].speed > 0) {
        worm[i].y = 0;
        worm[i].x = Math.random() * 1280;
      }

      if (Phaser.Geom.Intersects.RectangleToRectangle(
          this.player.getBounds(),
          worm[i].getBounds())) {

        this.gameOver();
        break;
      }
    }


  }

  /* Game Over */
  gameOver() {
    console.log("Game Over")
    this.music.stop();
    this.scene.start("GameOver", {
      score: this.player.score
    });
  }
}