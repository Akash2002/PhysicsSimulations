let MeterStick = class {

  constructor (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  create () {
    rect(this.x, this.y, this.width, this.height);
    for (var i = Dimensions.width / 10; i < Dimensions.width - Dimensions.width/10; i+=50) {
      fill (255);
      rect(i, Dimensions.height - 120, 5, 10);
    }
    fill('#C08401');
  }

}
