/* THE GAME OVER SCENE */
class GameOverScene extends Phaser.Scene {
  constructor(s) {
    super('GameOver');

  }

  init(data) {
    this.scaleW = this.sys.game.config.width;
    this.scaleH = this.sys.game.config.height;

    /* Bringing the final score from the game scene */
    this.score = data.score
  }

  create() {

    /* Game over text */
    this.titleText = this.add.bitmapText(this.scaleW / 2,
      this.scaleH / 2 - 150, 'bmFont', 'Game Over');
    this.titleText.setOrigin(0.5);
    this.titleText.setScale(0.7);
    this.titleText.setTint(0xa40000, 0xa40000, 0xa40000, 0xa40000);

    /* Score text */
    this.scoreText = this.add.bitmapText(this.scaleW / 2, this.scaleH / 2 - 25, 'bmFont', 'Total apples caught: ' + this.score);
    this.scoreText.setOrigin(0.5);
    this.scoreText.setScale(0.4);

    /* Button back to title scene */
    this.titleButton = new UiButton(this, this.scaleW / 2, this.scaleH * 0.65, 'mybutton1', 'mybutton2', 'Play again', this.startScene.bind(this, 'Title'));

  }

  /* Tells button to jump to scene */
  startScene(targetScene) {
    this.scene.start(targetScene);
  }
}