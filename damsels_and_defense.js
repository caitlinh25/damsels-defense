var canvasWidth = 1344;
var canvasHeight = 642;
var button;

function setup(){
  createCanvas(canvasWidth,canvasHeight);
  background(45);
  s = "Damsels & Defense";
  textSize(50);
  fill(255,255,255);
  text(s, 450, 321);
  button =  = createButton("Play")
  button.position(19, 19);
  button.mousePressed(changeBG);
}

function changeBG() {
  var val = random(255);
  background(val);
}


// function draw(){
//   background(45);
// }
//
// var button;
// function setup() {
//   createCanvas(100, 100);
//   background(0);
//   button = createButton('click me');
//   button.position(19, 19);
//   button.mousePressed(changeBG);
// }
