
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);	

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(400,300)
	paperR = new Paper(450,300)
    paperL = new Paper(350,300)

	ground = new Ground(400,50,800,10)

	chain1=new Chain(paper.body,ground.body,0,0)
	chain2=new Chain(paperL.body,ground.body,-50,0)
	chain3=new Chain(paperR.body,ground.body,50,0)

	Engine.run(engine);
  
}


function draw() {
  background(255);
  
	paper.display();
	paperR.display();
	paperL.display();
  
	ground.display();

	chain1.display();
	chain2.display();
	chain3.display();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		console.log("uparrow key is pressed")
		Matter.Body.applyForce(paperL.body,paperL.body.position,{x:-50,y:-100})
	}
}
