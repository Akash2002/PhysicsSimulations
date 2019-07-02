let Particle = class {
  constructor(x, y, radius) {
    this.delta_x = 0;
    this.dx = 0.15;
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  create () {
    ellipse(this.x, this.y, this.radius, this.radius);
    fill('#404041');
    noStroke();
  }

  accelerate () {
    this.x += 0.5*(this.delta_x+=this.dx) + 0.5;
    
  }

}
