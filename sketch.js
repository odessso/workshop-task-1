let x = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  makeHouse(50, 250, mouseX, color(200, 0, 30));
  makeHouse(mouseY, 200, mouseY, color(30, mouseY, 200));
  makeHouse(180, 40, mouseX, color(mouseX, 0, 210));
  makeHouse(mouseX, 250, mouseY, color(100, 0, 100));
  makeHouse(80, mouseY, mouseY, color(15, mouseX, 100));
  makeHouse(400, mouseX, mouseY, color(15, 10, mouseY));
}

function makeHouse(xPos, yPos, stories, colour) {
  fill(colour);
  noStroke();
  rect(xPos, yPos, 50, stories);
  triangle(xPos, yPos, xPos + 25, yPos - 20, xPos + 50, yPos);
}