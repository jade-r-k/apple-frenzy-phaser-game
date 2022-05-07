/* HELP SCENE */
class HelpScene extends Phaser.Scene {
  constructor() {
    super('Help');
  }

  init() {
    /* gets the width and height of canvas */
    this.scaleW = this.sys.game.config.width;
    this.scaleH = this.sys.game.config.height;
  }

  create() {
    /* background */
    this.bg = this.add.sprite(0, 0, "orchard");
    this.bg.setOrigin(0, 0);

    /* help text */
    this.lineOne = this.add.bitmapText(this.scaleW / 2, this.scaleH / 2 - 200, 'bmFont', 'Use the arrow keys to move left or right.', 25);
    this.lineTwo = this.add.bitmapText(this.scaleW / 2, this.scaleH / 2 - 150, 'bmFont', 'Try to catch as many delicious apples you can.', 25);
    this.lineThree = this.add.bitmapText(this.scaleW / 2, this.scaleH / 2 - 100, 'bmFont', 'Avoid the rotten apples or the game is over.', 25);
    this.lineOne.setOrigin(0.5);
    this.lineTwo.setOrigin(0.5);
    this.lineThree.setOrigin(0.5);

    /* button */
    this.titleButton = new UiButton(this, this.scaleW / 2, this.scaleH / 2, 'mybutton1', 'mybutton2', 'Back', this.startScene.bind(this, 'Title'));
  }

  startScene(targetScene) {
    this.scene.start(targetScene);
  }
}