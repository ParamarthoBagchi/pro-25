
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperImage, dustImage
var paper1

function preload()
{
  
  
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(400,height,800,20);

    paper1= new Paper(200,400,50)
dustbin1= new dustbin(600,650)
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);

  ground.display();
  paper1.display();
  dustbin1.display();
  
  text(mouseX+"-"+mouseY,400,350)
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-85})
  }
}


