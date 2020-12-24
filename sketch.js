
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var  survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
 createCanvas(800,400)

  monkey = createSprite(50,315,20,20);
  monkey.addAnimation ("running",monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(400,399,1000,10);
  //ground.visible = false;
  ground.velocityX = -4;
  console.log(ground.x);
  
  FoodGroup = new Group();
}



function draw() {
background(225);
  console.log(ground.x);
  
  if(ground.x< 300){
    ground.x = ground.width/2;
  
  }
  
  if(FoodGroup.isTouching(monkey)){
    score++;
  }
  
  if(keyDown("space") ) {
    monkey.velocityY = -12;
  }
  
 monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  
  stroke("green");
  textSize(20)
  fill("green");
  text("score:"+score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("blue");
  text("survival Time:"+survivalTime, 100,50);
  if(frameCount%10 === 0){
    survivalTime++;
  }
  
  
   spawnFood();
  spawnObstacle();
  drawSprites();
  
  
}

function spawnFood() {
  //write code here to spawn the Food
  if (frameCount % 150 === 0) {
    Food = createSprite(800,330,40,10);
    Food.addImage(bananaImage);
    Food.y = Math.round(random(250,260))
    Food.scale = 0.2;
    Food.velocityX = -5;
    
    
    //assigning lifetime to the variable
    Food.lifetime = 250;
    FoodGroup.add(Food);
    
    //adjust the depth
  
    }
}

function spawnObstacle(){
  if(frameCount % 150===0){
    
    obstacle = createSprite(800,360,10,40);
    obstacle.velocityX = -5
    obstacle.scale = 0.3
    obstacle.lifetime = 300
    obstacle.addImage(obstaceImage)
  }
  }


