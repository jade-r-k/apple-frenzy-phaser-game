/* CONFIG */
var config = {
  type: Phaser.AUTO,

  /* width and height of canvas */
  width: 1280,
  height: 720,

  /* scenes */
  scene: [
    BootScene,
    TitleScene,
    HelpScene,
    GameScene,
    GameOverScene
  ],

  /* physics */
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: {
        y: 0,
      },
    },
  },
};

var game = new Phaser.Game(config);