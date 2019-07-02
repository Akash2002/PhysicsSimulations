let Particle = class {
  constructor(x, y, radius) {
    this.delta_x = 0;
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  create () {
    ellipse(this.x, this.y, this.radius, this.radius);
    fill('#000000');
    noStroke();
  }

  accelerate () {
    this.x += 0.5*(this.delta_x+=0.15) + 0.5;
  }

}
