
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var surface;
var stone,rubber,hammer;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	surface = new Surface(400,700,1000,50);

	stone = new Stone(200,550);
	rubber = new Rubber(600,600,150,PI/3);
	hammer = new Hammer(400,600,150,PI/3);

	Engine.run(engine);
  
}

function draw() {
  background("lightblue");

  Engine.update(engine);

  surface.display();

  stone.display();
  rubber.display();
  hammer.display();
}



