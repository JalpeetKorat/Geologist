class Stone extends BaseClass {
    constructor(x, y) {
        super(x, y, 150, 150);
        this.image = loadImage("Images/Stone.png");
    };

    display() {
        super.display();
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
  }
};
