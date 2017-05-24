var key01;
var key02;
var key03;
var questionNo;
var q1Correct = false;
var q2Correct = false;
var q3Correct = false;
var q4Correct = false;
var ball1 = false;
var ball2 = false;
var ball3 = false;
var lock = true;

function preload () {
  bg01 = loadImage("https://dl.dropboxusercontent.com/s/5vme8llf9zjpheh/bg01.jpg");
  bubble = loadImage("https://dl.dropboxusercontent.com/s/mswr5xgpa0f7bfl/bubble.png");
  pic1 = loadImage("https://dl.dropboxusercontent.com/s/k5x71f7aryj5717/1.png");
  pic2 = loadImage("https://dl.dropboxusercontent.com/s/wfr4kp0s59amt67/2.png");
  pic3 = loadImage("https://dl.dropboxusercontent.com/s/oicdjic7okjosf1/3.png");
  tick = loadImage("https://dl.dropboxusercontent.com/s/t6xgedw0rvqt7id/tick.png");
  bgm = loadSound("https://dl.dropboxusercontent.com/s/22waixu8af9u86o/Aokigahara%20Puzzle%202.m4a");
  mwSound = loadSound("https://dl.dropboxusercontent.com/s/xkmad9u1bw2ko8c/mwSound.mp3");
}

function setup () {
  createCanvas(800, 600);
  textAlign(CENTER);
  questionNo = int(random(1,4.99999999));
  
  
  sliderVol = createSlider(0, 1, 0.5, 0.01);
  sliderVol.style('width', '800px');

  
  input = createInput("_");
  //input.hint("haha");
  input.style("width","660px");
  input.style("height","65px");
  //input.style("fontSize","300%");
  input.style("font","italic 300% arial");
  //input.position(25, 652);
  input.position(25, 704);
  
  //input.hint(dsfh);
  //input.style("placeholder","haha");
  
  
  /* //just notes
  input.style("textAlign","center");
  input.style("border","thick solid");
  input.style("backgroundColor","#ffffff");
  input.style("color","#000");
  input.style("borderTopColor","black");
  input.style("borderBottomColor","black");
  input.style("borderLeftColor","black");
  input.style("borderRightColor","black");
  */
  
  
  button = createButton("Enter");
  button.style("width","100px");
  button.style("height","70px");
  //button.position(692,652);
  button.position(692,704);
  button.style("textAlign","center");
  button.style("fontSize","200%");
  button.mousePressed(enterInput);
}

function draw () {
  background(200);
  image(bg01, 0, 0, width, height);
  image(bubble, 200, 0, 320, 300);
  fill(0);
  rect(10,height-10-80,width-20,80);
  
  bgm.setVolume(sliderVol.value());
  if (bgm.isPlaying() == false) {
    bgm.play();
  }
  
  
  
  image(pic1,width-(50*3),10,40,40);
  image(pic2,width-(50*2),10,40,40);
  image(pic3,width-(50*1),10,40,40);
  
  if (ball1 == true) {
    image(tick,width-(50*3),10,40,40);
  }
  if (ball2 == true) {
    image(tick,width-(50*2),10,40,40);
  }
  if (ball3 == true) {
    image(tick,width-(50*1),10,40,40);
  }

  
  
  fill(0);
  textSize(16);
  if(questionNo == 1) {
    text("There is bomb on top of a computer; around the computer there is a hairbrush, keys, phone and a paper cup. When the explosion comes, what item is destroyed first?", 260, 50, 200, 145);
  } else if(questionNo == 2) {
    text("Michael's parents had 4 children the first three named April, May, and June. What was the last child's name?", 260, 50, 200, 145);
  } else if(questionNo == 3) {
    text("If a plane crashes on the border of The United States and Mexico, where would the survivors be buried?", 260, 50, 200, 145);
  } else if(questionNo == 4) {
    text("There's a 1 story house where everything inside and outside of it was PURPLE. So what color were the stairs?", 260, 50, 200, 145);
  }
  
  
  
  
  if (questionNo == 1 && input.value() == "haha" && lock == true) {
    lock = false;
    q1Correct = true;
  }
  
  if (questionNo == 2 && input.value() == "hehe" && lock == true) {
    lock = false;
    q2Correct = true;
  }
  
  if (questionNo == 3 && input.value() == "hihi" && lock == true) {
    lock = false;
    q3Correct = true;
  }
  
  if (questionNo == 4 && input.value() == "hoho" && lock == true) {
    lock = false;
    q4Correct = true;
  }
  
  
  test();
}

function enterInput() {
  
  if ((q1Correct == true || q2Correct == true || q3Correct == true || q4Correct == true) && ball1 == false) {
    ball1 = true;
    lock = true;
    q1Correct = false;
    q2Correct = false;
    q3Correct = false;
    q4Correct = false;
    if(mwSound.isPlaying() == false) {
      mwSound.play();
    }
    questionNo = int(random(1,4.99999999));
  } else if ((q1Correct == true || q2Correct == true || q3Correct == true || q4Correct == true) && ball2 == false) {
    ball2 = true;
    lock = true;
    q1Correct = false;
    q2Correct = false;
    q3Correct = false;
    q4Correct = false;
    if(mwSound.isPlaying() == false) {
      mwSound.play();
    }
    questionNo = int(random(1,4.99999999));
  } else if ((q1Correct == true || q2Correct == true || q3Correct == true || q4Correct == true) && ball3 == false) {
    ball3 = true;
    lock = true;
    q1Correct = false;
    q2Correct = false;
    q3Correct = false;
    q4Correct = false;
    if(mwSound.isPlaying() == false) {
      mwSound.play();
    }
    //ending();
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  }
}

function ending () {
  rect(0,0,width, height);
}

function test () {
  fill(255,0,0);
  textSize(11);
  //log(x);
  text(questionNo,50,40);
  text("questionNo"+questionNo,50,20);
  //text("("+int(mouseX)+","+int(mouseY)+")", 50, 20);
  text("ball1"+ball1,50,60);
  text("ball2"+ball2,50,80);
  text("lock"+lock,50,100);
  text("q1"+q1Correct,50,120);
  text("q2"+q2Correct,50,140);
  text("q3"+q3Correct,50,160);
  text("q4"+q4Correct,50,180);
}