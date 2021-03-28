
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;

function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(900,650);
    paper = new Paper(100,100,60,60); 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-75}); 
  }	
} 
