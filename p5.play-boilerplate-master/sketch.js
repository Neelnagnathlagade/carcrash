const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
// create an var
var engine,world;
var box1,box2;
var ground;
function setup() {
  createCanvas(800,400);

 engine=Engine.create();
 world=engine.world;
// givan a position
  box1=new Box(200,300,50,50);
  box2=new Box(240,100,50,100);
  ground=new Ground(200,390,400,20)
 /*var option={
   isStatic:true
 }
ground=Bodies.rectangle(200,390,200,20,option)
World.add(world,ground)
var ball_option={
  restitution:1
}
ball=Bodies.circle(200,100,20,ball_option)
World.add(world,ball)*/
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
 /* rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)*/

  
  // display the ground and box
  box1.display();
  box2.display();
  ground.display();
}