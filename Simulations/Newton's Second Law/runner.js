var particle;
var meterStick;

var Dimensions;

var slider;

function setup() {
  Dimensions = Object.freeze({
    "width": windowWidth * 0.8,
    "height": windowHeight * 0.8
  });

  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
  
  console.log(Dimensions.width / 10);
  createCanvas(Dimensions.width, Dimensions.height);
  meterStick = new MeterStick(Dimensions.width / 10, Dimensions.height - 120, Dimensions.width - (Dimensions.width / 10) * 2, 50);
  particle = new Particle(Dimensions.width / 10, Dimensions.height - 150, 50);
}

function draw() {
  background('#EAEAEB');
  meterStick.create();
  particle.create();
  particle.accelerate();
}
