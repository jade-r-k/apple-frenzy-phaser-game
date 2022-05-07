class UiButton extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key, hoverKey, text, targetCallback) {
    super(scene, x, y);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.key = key;
    this.hoverKey = hoverKey;
    this.text = text;
    this.targetCallback = targetCallback;

    this.createButton();
    this.scene.add.existing(this);
  }

  createButton() {
    this.button = this.scene.add.image(0, 0, 'mybutton1');
    this.button.setInteractive();
    this.button.setScale(1.4);

    this.buttonText = this.scene.add.bitmapText(0, 0, 'bmFont', this.text);
    this.buttonText.setScale(0.42);
    this.buttonText.setTint(0xffffff, 0xffffff, 0xffffff, 0xffffff);
    this.buttonText.setOrigin(0, -0.3);

    Phaser.Display.Align.In.Center(this.buttonText, this.button);

    this.add(this.button);
    this.add(this.buttonText);

    this.button.on('pointerdown', () => {
      this.targetCallback();
    });

    this.button.on('pointerover', () => {
      this.button.setTexture(this.hoverKey);
    });

    this.button.on('pointerout', () => {
      this.button.setTexture(this.key);
    });
  }
}