/* THE TITLE SCENE */
class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
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

    /* title */
    this.titleText = this.add.bitmapText(this.scaleW / 2, this.scaleH / 2 - 150, 'bmFont', 'Apple Frenzy', 75);
    this.titleText.setOrigin(0.5);
    this.titleText.setTint(0xa40000, 0x8db600, 0x8db600, 0x8db600);

    /* buttons */
    this.startGameButton = new UiButton(this, this.scaleW / 2, this.scaleH / 2, 'mybutton1', 'mybutton2', 'Start', this.startScene.bind(this, 'Game'));
    this.helpButton = new UiButton(this, this.scaleW / 2, this.scaleH / 2 + 100, 'mybutton1', 'mybutton2', 'Help', this.startScene.bind(this, 'Help'));
  }

  startScene(targetScene) {
    this.scene.start(targetScene);
  }
}