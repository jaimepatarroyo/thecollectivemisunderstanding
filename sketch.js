// The Collective Misunderstanding
// By Jaime Patarroyo

var textOut = "";

var collectiveArray = ['o', 'l', 'l', 'e', 'c', 't', 'i', 'v'];
var misunderstandingArray = ['i', 's', 'u', 'n', 'd', 'e', 'r', 's', 't', 'a', 'n', 'd', 'i', 'n'];

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
  
}

function draw() {
  
}