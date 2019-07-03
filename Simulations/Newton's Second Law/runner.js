var particle;
var meterStick;

var force, mass, speed;

var Dimensions;

var forceSlider, massSlider;
var clicked = false;

function setup() {

  background('#EAEAEB');
  Dimensions = Object.freeze({
    "width": windowWidth * 0.8,
    "height": windowHeight * 0.8
  });

  forceSlider = createSlider(0, 255, 100);
  forceSlider.position(Dimensions.width/4, Dimensions.height/10);
  forceSlider.style('width', '80px');

  massSlider = createSlider(0, 255, 100);
  massSlider.position(Dimensions.width - Dimensions.width/4, Dimensions.height/10);
  massSlider.style('width', '80px');

  createCanvas(Dimensions.width, Dimensions.height);
  meterStick = new MeterStick(Dimensions.width / 10, Dimensions.height - 120, Dimensions.width - (Dimensions.width / 10) * 2, 50);
  particle = new Particle(Dimensions.width / 10, Dimensions.height - 150, 50);
}

function draw() {
  background('#EAEAEB');

  textSize(20);
  text("Force: ", Dimensions.width/4 - 80, Dimensions.height/10 + 6);

  force = round(map(forceSlider.value(), 0, 255, 0, 1000));
  textSize(16);
  text(force + " N", Dimensions.width/4 + 80, Dimensions.height/10 + 6);

  textSize(20);
  text("Mass: ", Dimensions.width - Dimensions.width/4 - 80, Dimensions.height/10 + 6.5);

  textSize(16);
  mass = round(map(massSlider.value(), 0, 255, 0, 50));
  text(mass + " kg", Dimensions.width - Dimensions.width/4 + 80, Dimensions.height/10 + 6.5);

  meterStick.create();
  particle.create();
  particle.accelerate();
  particle.trackMovement();
}

function mousePressed () {
  clicked = true;
}

function calcMass () {
  console.log(input.value());
}
