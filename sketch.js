// The Collective Misunderstanding - Ants
// By Santiago Orjuela & Jaime Patarroyo

var textOut = "";

var collectiveArray = ['o', 'l', 'l', 'e', 'c', 't', 'i', 'v'];
var misunderstandingArray = ['i', 's', 'u', 'n', 'd', 'e', 'r', 's', 't', 'a', 'n', 'd', 'i', 'n'];

var numAnts = 5000;
var ants = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  smooth();
  
  shuffle(collectiveArray, true);
  shuffle(misunderstandingArray, true);
  
  textOut = "The C";
  for (var i = 0; i<collectiveArray.length; i++)
    textOut += collectiveArray[i];
  textOut += "e M";
  for (var i = 0; i<misunderstandingArray.length; i++)
    textOut += misunderstandingArray[i];
  textOut += "g";
  
  textSize(12);
  textFont("Helvetica");
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text(textOut, windowWidth/2, windowHeight/2);

  ants[0] = new Ant(random(width), random(height));

  for (var i=1; i<numAnts; i++) {
    ants[i] = new Ant(ants[i-1].x + random(-100, 100), ants[i-1].y + random(-100, 100));
    if (ants[i].x > width*2 || ants[i].x < -width) ants[i].x = random(width);
    if (ants[i].y > height*2 || ants[i].y < -height) ants[i].y = random(height);
  }
}

function draw() {
  background(255);

  ants[0].move(ants[numAnts-1].x, ants[numAnts-1].y);
  ants[0].show();

  //ants[0].move(mouseX, mouseY);
  //ants[0].show();

  for (var i=1; i<numAnts; i++) {
    ants[i].move(ants[i-1].x, ants[i-1].y);
    ants[i].show();
  }
  
  textSize(12);
  textFont("Helvetica");
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text(textOut, windowWidth/2, windowHeight/2);
}

function Ant(_x, _y) {
  this.x = _x;
  this.y = _y;

  this.move = function(_x, _y) {
    this.x += random(-1, 1);
    this.y += random(-1, 1);

    if (this.x - _x > 5) this.x--;
    else if (this.x - _x < -5)this.x++;
    if (this.y - _y > 5) this.y--;
    else if (this.y - _y < -5) this.y++;
  }

  this.show = function() {
    point(this.x, this.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255);
}