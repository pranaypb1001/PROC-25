var ground,dustbinObj,ground3,ground2,paperObject,world

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200,500);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,480,1200,20);
	dustbinObj = new Dust(1000,480,200,20);
	ground2=new Ground(900,440,20,100);
	ground3=new Ground(1100,440,20,100);
	paperObject=new Paper(100,470);
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  dustbinObj.display();
  ground2.display();
  ground3.display();
  paperObject.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

