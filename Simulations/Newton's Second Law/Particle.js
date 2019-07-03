let Particle = class {
  constructor(x, y, radius) {
    this.delta_x = 0;
    this.dx = 0.15;
    this.x = x;
    this.y = y;
    this.c = 0;
    this.min = 0;
    this.i = 0;
    this.stPos = 0;
    this.endPos = 0;
    this.speedArr = new Array(5);
    this.radius = radius;
    this.nCalc = false;
  }

  create () {
    ellipse(this.x, this.y, this.radius, this.radius);
    fill('#404041');
    noStroke();
  }

  accelerate () {
    this.x += 0.5*(this.delta_x+=this.dx) + 0.5;
  }

  trackMovement () {
    if (this.x < Dimensions.width - (Dimensions.width / 10)) {

    }
  }

}
