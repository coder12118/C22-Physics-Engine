const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;
var football;

function preload(){
  footballImage = loadImage("ball.png");
}
function setup() {
  createCanvas(400,400);

  football = createSprite(200,100,20,20);
  football.addImage(footballImage);
  football.scale = 0.05;

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(myWorld, ground);

  var ball_options = {
    restitution: 1.5
  }
  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(myWorld, ball);

  console.log(ball);
}

function draw() {
  background("black");
  Engine.update(myEngine);
  rectMode(CENTER); 
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

  football.x = ball.position.x;
  football.y = ball.position.y;
  drawSprites(); 
}
