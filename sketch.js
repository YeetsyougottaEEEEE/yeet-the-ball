var ball, side1, side2, side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);
	side1=createSprite(900,390,100,20);
	side2=createSprite(800,360,50,20);
	side3=createSprite(1000,360,50,20);
    ball = new paper(100,590,5);
	

	
	
	
	Engine.run(engine);
    engine = Engine.create();
	world = engine.world;
 
}


function draw() {
  rectMode(CENTER);
  ball.display();
  background(0);
  
  drawSprites();
 
}



