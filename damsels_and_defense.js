var button;
var title;

function intro(){
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
    sound = loadSound("damsels_and_defense_music.mp3");
    sound.loop();
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
  fill(0,0,0);
  // info2 = " However, only 6 out of every 1000 perpetrators end in jail."
  // info3 = " In these assaults, 90% of the victims tend to be female while the other 10% is male."
  // info4 = " Statics have shown that about 55% of the times these assaults happened either at or near the victim's house."
  // info5 = " Lastly, one of the most under-reported crime is rape as over 63% sexual assaults are not reported to the police."
  text(info1,50, 100);



  // text(info2,50, 50);
  // text(info3,50, 50);
  // text(info4,50, 50);
  // text(info5,50, 50);
}
