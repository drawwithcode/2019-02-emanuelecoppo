function preload(){
  w = Math.round(windowWidth/10); //larghezza barra
  h = 20; //altezza barra
  x = 0; //griglia x
  y = 0; //griglia y
  s = 0; //scorrimento
  pixelar = loadFont("pixelar.ttf");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background("black");
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  //barre
  s += 2;
  if (s > h) {s = -h}

  for (y = -h; y < height + h; y += h) {
    for (x = -w; x < width + w; x += w) {

      if ((x%(w*2) == 0 && y%(h*2) != 0) || (x%(w*2) != 0 && y%(h*2) == 0)) {
        fill(0);
      }
      else {
        fill(255);
      }
      if (x%(w*2) == 0) {
        rect(x, y-s, w, h);
      }
      if (x%(w*2) != 0) {
        rect(x, y+s, w, h);
      }
    }
  }

  //controls
  if (keyIsDown(RIGHT_ARROW) && w < Math.round(windowWidth/4)) {w += .5}
  if (keyIsDown(LEFT_ARROW) && w > 10) {w -= .5}
  if (keyIsDown(UP_ARROW) && h > 10) {h -= .25}
  if (keyIsDown(DOWN_ARROW) && h < 100) {h += .25}

  //text
  push();
  fill(150);
  stroke(0);
  strokeWeight(3);
  rect(width-30, height-30, -250, -50);
  pop();

  fill(0);
  textAlign(RIGHT, BOTTOM);
  textFont(pixelar);
  textSize(33)
  text("Press arrow keys.", width-47, height-43);
}
