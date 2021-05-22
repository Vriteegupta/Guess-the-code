var bg,bg2,form,system,code,security;
var score=0;
var congratulations;
function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg= loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  
  congratulations =loadSound("won.mp3")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
    congratulations.play();
  }
   congratulations.stop(0.1);
  drawSprites()
}