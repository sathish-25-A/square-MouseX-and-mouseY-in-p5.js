var canvasWidth = 1525;
var canvasHeigth = 690;

function setup() {
  createCanvas(canvasWidth, canvasHeigth);
  rectMode(CENTER);
}

function draw() {
  fill(255, 0, 0);

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 100, 100);
  }
}
