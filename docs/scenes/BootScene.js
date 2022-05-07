/* THE BOOT SCENE */
class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    console.log("preloading");
    this.loadImages();
    this.loadBitmapText();
    this.loadSpriteSheets();
    this.loadAudio();
  }

  /* Loading the images */
  loadImages() {
    this.load.image("applered", "assets/applered.png");
    this.load.image("applegreen", "assets/applegreen.png");
    this.load.image("appleate", "assets/appleate.png");
    this.load.image("appleworm", "assets/appleworm.png");
    this.load.image("orchard", "assets/orchard.png");
    this.load.image("mybutton1", "assets/my_button01.png");
    this.load.image("mybutton2", "assets/my_button02.png");
  }

  /* Loading the text */
  loadBitmapText() {
    this.load.bitmapFont('bmFont', 'assets/bitmapfonts/font.png', 'assets/bitmapfonts/font.fnt');
  }

  /* Loading the sprite sheet */
  loadSpriteSheets() {
    this.load.spritesheet("farmer", "assets/farmersprite.png", {
      frameWidth: 140,
      frameHeight: 190,
    });
  }

  /* Loading audio */
  loadAudio() {
    this.load.audio("bgmusic", [
      "assets/audio/bgmusic.mp3",
    ]);
  }

  /* Go to the title scene */
  create() {
    this.scene.start("Title");
  }
}