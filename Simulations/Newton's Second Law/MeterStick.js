let MeterStick = class {
  constructor (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  create () {
    rect(this.x, this.y, this.width, this.height);
    fill('#C08401');
  }

}
