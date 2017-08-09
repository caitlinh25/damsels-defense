var button;

function setup(){
  canvas = createCanvas(1345,640);
  background(45);

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
  // console.log("got to the function");
  background(45);
  fill(255,218,185);
  rect(30, 40, 1277, 571);

  info1 = " Every 98 seconds, an American \n is sexually assaulted and every \n 8 minutes that person is a child."
  textAlign("center")
  fill(0,0,0);
  text(info1,650, 230);

  // info2 = " However, only 6 out of every \n 1000 perpetrators end in jail."
  // textAlign("center")
  // fill(0,0,0);
  // text(info1,650, 230);
  //
  // info3 = " In these assaults, 90% of \n the victims tend to be female while \n the other 10% is male."
  // textAlign("center")
  // fill(0,0,0);
  // text(info1,650, 230);
  //
  // info4 = " Statics have shown that \n about 55% of the times these assaults \n happened either at or near the \n victim's house."
  // textAlign("center")
  // fill(0,0,0);
  // text(info1,650, 230);
  //
  // info5 = " Lastly, one of the most \n under-reported crime is rape as over \n 63% sexual assaults are not \n reported to the police."
  // textAlign("center")
  // fill(0,0,0);
  // text(info1,650, 230);

}
