var vehicle, car1, car2, helicopter1, helicopter2, airplane1, rocketship, rocketships;
var ground, groundImage, sky, skyImage, space, spaceImage;
var trash; 
var gameState = 0;
var game;
var obstacle, obstacleImage, obstacleGroup;
var plastic, plasticImage, plasticGroup;

function preload(){
  groundImage = loadImage("track.png");
  obstacleImage = loadImage("trash.png");
}

function setup() {
  createCanvas(700,700);
    game = new Game();

  obstacleGroup = createGroup();
  plasticGroup = createGroup();

  ground = createSprite(350,350,100,100);
  ground.addImage(groundImage);
  ground.velocityY = 2;
  ground.scale = 2;

  vehicle = createSprite(250, 250, 30,30);
  vehicle.depth = 2000
}


function draw() {
  background("lightblue");
 
  if(keyWentDown("right")){
    vehicle.x = vehicle.x+40;
  }
    if(keyWentDown("left")){
    vehicle.x = vehicle.x-40;
  }

if(ground.y>650){
  ground.y=350;
}

 // game.play();
 spawnTrash1();
 spawnTrash2();
 spawnTrash3();
 //spawnTrash4();

 spawnPlastic();

drawSprites();
}

function spawnTrash1() {
  if (frameCount % 70 === 0) {
    obstacle = createSprite(250,-10,40,10);
    obstacle.x = Math.round(random(25,233));
    obstacle.scale = 0.25;

    obstacle.addImage(obstacleImage);
    obstacle.velocityY = 2;
    obstacle.lifetime = 375;

    obstacleGroup.add(obstacle);
    }
}

function spawnTrash2() {
  if (frameCount % 85 === 0) {
    obstacle = createSprite(250,-10,40,10);
    obstacle.x = Math.round(random(233,466));
    obstacle.scale = 0.225;

    obstacle.addImage(obstacleImage);
    obstacle.velocityY = 2;
    obstacle.lifetime = 375;

    obstacleGroup.add(obstacle);
    }
}

function spawnTrash3() {
  if (frameCount % 100 === 0) {
    obstacle = createSprite(250,-10,40,10);
    obstacle.x = Math.round(random(466,700));
    obstacle.scale = 0.225;

    obstacle.addImage(obstacleImage);
    obstacle.velocityY = 2;
    obstacle.lifetime = 375;

    obstacleGroup.add(obstacle);
    }
}

/*function spawnTrash4() {
  if (frameCount % 105 === 0) {
    obstacle = createSprite(250,-10,40,10);
    obstacle.x = Math.round(random(525,700));
    obstacle.scale = 0.225;

    obstacle.addImage(obstacleImage);
    obstacle.velocityY = 2;
    obstacle.lifetime = 375;

    obstacleGroup.add(obstacle);
    }
}*/

function spawnPlastic() {
  if (frameCount % 30 === 0) {
    plastic = createSprite(250,-10,40,10);
    plastic.x = Math.round(random(25,700));

    plastic.velocityY = 2;
    plastic.lifetime = 375;

    plasticGroup.add(plastic);
    }
}