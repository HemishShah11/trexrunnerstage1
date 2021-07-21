
var trex ,trex_running;
var ground;
function preload(){
 
  
  trex_running=loadAnimation("trex1.png", "trex3.png", "trex4.png")

  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,150,25,25)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5

 ground=createSprite(300,180,600,15)
ground.addImage("ground", groundImage)
ground.x=ground.width/2
ground.velocityX=-4

 edges=createEdgeSprites()
}

function draw(){
  background("white")
  if(keyDown("space")){
    trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.5

  trex.collide(ground)

  if(ground.x<0){
    ground.x=ground.width/2
  }
drawSprites()
}
