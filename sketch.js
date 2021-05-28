var ground, groundImage
var obsGroup
var mario
function preload(){
  groundImage = loadImage("groundImg.png")
}
function setup(){
  createCanvas(1000,600)
  ground = createSprite(500,530,1000,20)
  ground.addImage(groundImage);
  ground.velocityX=-6
  ground.x=ground.width/2
  ground.scale=2.5

  obsGroup=new Group()

  mario = createSprite(100,480,40,40)

 


  
  
}
function draw(){
  background(255)
  if(ground.x<0){
    ground.x = ground.width/2
    }
  
    spawnobs()
  drawSprites()
}
function spawnobs(){

  if(frameCount%75 ===0){
    var obstacles = createSprite(1000,480,10,10)
    obstacles.velocityX = -5
    obstacles.scale = 1.5
    obstacles.lifetime = 250
    obsGroup.add(obstacles);
  }
  }