var path;
var pathImg;
var runner;
var InvisibleGuideLine_R;
var InvisibleGuideLine_L;


function preload(){
  //pre-load images
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage("l",pathImg);
  path.velocityY = 3;
  //path.scale = 1.2;

  InvisibleGuideLine_R = createSprite(345,30,20,750);
  InvisibleGuideLine_L = createSprite(60,30,20,750);
  InvisibleGuideLine_L.visible = false;
  InvisibleGuideLine_R.visible = false; 




  runner = createSprite(300,300,60,60);
  runner.addAnimation("running",runnerImg);
  runner.scale = 0.1



}

function draw() {
  background(0);

  if(path.y >500) {
    path.y = path.height/5
  }

  runner.x = World.mouseX;
  if(World.mouseX > InvisibleGuideLine_R.x) {
    runner.x = 275; 
  } 
  if(World.mouseX < InvisibleGuideLine_L.x) {
    runner.x = 130;
  }

  drawSprites()
}

function mousePressed() {

}
