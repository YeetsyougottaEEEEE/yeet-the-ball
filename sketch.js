var ball, ground1, didin, chain;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;



function setup() {
	createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  ball = new paper(1000,100,20)
  ground1 = new ground(600,300,20,1200);
  didin = new dustbin(1000,590);
  chain = new slingshot(ball.body,{x:900,y:500});

  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});
 
 
  
	Engine.run(engine);
//	Render.run(render);
	
}


function draw() {
  rectMode(CENTER);
  background(230);

  ball.display();
  ground1.display();
  didin.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  chain.fly();
}


