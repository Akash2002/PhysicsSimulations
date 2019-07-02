let Particle = class {

  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    ellipse(x, y, radius, radius);
    fill('#404041');

    noStroke();
  }

}
