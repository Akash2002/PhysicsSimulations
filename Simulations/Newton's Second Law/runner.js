var particle;
var meterStick;

function setup () {
  createCanvas(windowWidth * 0.8, windowHeight * 0.8);
}

function draw () {
  background('#EAEAEB');
  particle = new Particle(windowWidth/20, windowHeight/1.5, 50);
  meterStick = new MeterStick(windowWidth/20, windowHeight/1.5, windowWidth - windowHeight/20, 40);
}
