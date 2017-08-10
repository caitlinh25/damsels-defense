var button;
var canvas;
var vid;

function setup(){
  canvas = createCanvas(1345,640);
  background(45);
  canvas.class("lemon");

  title = "Damsels & Defense";
 	textFont("VT323");
  textSize(80);
  fill(255,255,255);
  text(title, 450, 321);

  button = createButton("Play");
	button.position(677,400);
  button.size(100,40);
	button.mousePressed(stats);
  // sound = loadSound("damsels_and_defense_music.mp3");
  // sound.loop();
}


// function loaded(){
// 	song.play();
// }
//
// function draw(){ss
// //   	sound.setVolume(0.1);
//


function stats(){
  button.hide();

  button2 = createButton("-->")
  button2.position(1200,570);
  button2.size(100,40);
  button2.mousePressed(stats2);

  // console.log("got to the function");
  background(45);
  fill(255,218,185);
  rect(30, 40, 1277, 571);

//*** if arrow is pressed then goes to the next info
  info1 = " Every 98 seconds, an American \n is sexually assaulted and every \n 8 minutes that person is a child."
  textAlign("center")
  fill(0,0,0);
  text(info1,650, 230);
}


function stats2(){
  button2.hide();

  button3 = createButton("-->")
  button3.position(1200,570);
  button3.size(100,40);
  button3.mousePressed(stats3);

  background(45);
  fill(255,218,185);
  rect(30, 40, 1277, 571);

  info2 = " However, only 6 out of every \n 1000 perpetrators end in jail."
  textAlign("center")
  fill(0,0,0);
  text(info2,650, 230);
  }

function stats3(){
  button3.hide();

  button4 = createButton("-->")
  button4.position(1200,570);
  button4.size(100,40);
  button4.mousePressed(stats4);

  background(45);
  fill(255,218,185);
  rect(30, 40, 1277, 571);

  info3 = " In these assaults, 90% of \n the victims tend to be female while \n the other 10% is male."
  textAlign("center");
  fill(0,0,0);
  text(info3,650, 230);
}

function stats4(){
  button4.hide();

  button5 = createButton("-->")
  button5.position(1200,570);
  button5.size(100,40);
  button5.mousePressed(stats5);

  background(45);
  fill(255,218,185);
  rect(30, 40, 1277, 571);

  info4 = " Statistics have shown that \n about 55% of the time, these assaults \n happened either at or near the \n victim's house."
  textAlign("center");
  fill(0,0,0);
  text(info4,650, 170);
}

function stats5(){
  button5.hide();

  button6 = createButton("-->")
  button6.position(1200,570);
  button6.size(100,40);
  button6.mousePressed(lesson1);

  background(45);
  fill(255,218,185);
  rect(30, 40, 1277, 571);

  info5 = " Lastly, one of the most \n under-reported crime is rape as over \n 63% sexual assaults are not \n reported to the police."
  textAlign("center");
  fill(0,0,0);
  text(info5,650, 170);
}

function lesson1(){
  button6.hide();

  vid = createVideo ("lesson1.mp4");

  createCanvas(710,400);
  vid.size(1000, 900);
  horizAlighn(CENTER);

  vid.loop();
}
// function selection(){
// button6.hide();
//
//   textAlign(CENTER);
//   background(250);
//   sel = createSelect();
//   sel.position(10, 12);
//   sel.option('1');
//   sel.option('2');
//   sel.option('3');
//   sel.option('4');
//
//   sel.changed(myselect);
// }
