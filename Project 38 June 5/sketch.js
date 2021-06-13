gameState="play";

var hill, hillImg;
var sled, sledImg;
var tree, treeImg, treeGroup;
var stone, stoneImg, stoneGroup;
var survivalTime=0;

function preload(){
  
 hillImg=loadImage("images/hill.png");

 sledImg=loadImage("images/sled.jpg");
  
 treeImg=loadImage("images/tree.png");
  
 stoneImg=loadImage("images/stone.png");
  
}

function setup() {
 
  hill=createSprite(200,200);
  hill.addImage(hillImg);
  hill.velocityY=2;
  hill.scale=2.0;
  
  sled=createSprite(200,260);
  sled.addImage(sledImg);
  sled.scale=0.2;
  
  
  
}

function draw() {
  createCanvas(400,400);
  background("230");
  
  obstaclesGroup=new Group();

  if (gameState==="play"){
    
  //making hill infinate
  if (hill.y>200){
    hill.y=0;
  }

  //controls the sled
  if (keyDown("right")){
    sled.x=sled.x+5;  
  }
  if (keyDown("left")){
    sled.x=sled.x-5; 
  }
  if (keyDown("space")){
    sled.velocityY=-5;
  }
  //adds gravity
    sled.velocityY=sled.velocityY+0.3;  
  
  
    if (obstaclesGroup.isTouching(sled) || sled.y>500){
    gameState="end";
  }
    
 drawSprites();
}
  if (gameState==="end"){
    textSize(30);
    stroke("Black");
    text("Game Over",107,200);
  }
  stroke("black");
  textSize(15);
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 120,20);
}

function obstacles(){
  if (frameCount%30===0){
  tree=createSprite(200,-5);
  tree.addImage(treeImg);
  tree.scale=0.3;

  tree.x=Math.round(random(250,350));
  tree.velocityY=1;
  tree.debug=true;
  tree.lifetime=750;
  obstaclesGroup.add(tree);

}
  if (frameCount%20===0){
  stone=createSprite(300,-5);
  stone.addImage(stoneImg);
  stone.scale=0.1;
  stone.x=Math.round(random(20,280));
  stone.velocityY=1;
  stone.lifetime=750;
  stone.debug=true;
    obstaclesGroup.add(stone);
  }
}