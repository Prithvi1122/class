const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,box1,box2,ground1;
function setup() {
  var canvas= createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  ground1=new Ground(200,380,400,20);
  box1=new Box(200,345,50,50);
  box2=new Box(230,50,50,50);
  console.log(box2.body.position.x);
  console.log(box2.body.position.y);
  console.log(box2.body.angle);
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground1.display();
  box1.display();
  box2.display();
}


