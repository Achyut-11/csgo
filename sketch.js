
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world,object1,object2,car,speed,weight;

function setup() {
  var canvas = createCanvas(800,400);
 
   engine = Engine.create();
   world = engine.world;

   speed=(random(55,90));
   weight=(random(400,1500));

   car.velocityX = speed;
  var options = {
 isStatic : true

  }
   
  car = Bodies.rectangle(50,200,50,50,options);
  wall = Bodies.rectangle(750,200,200,200,options);
 

  World.add(world,car,wall);
  console.log(car);

}

function draw() {
  background(0);  
  Engine.update(engine);

  rectMode(CENTER);
  rect(car.position.x,car.position.y,50,50);
  rect(wall.position.x,wall.position.y,50,300);
car.x = world.mouse.x;

  if(wall.x-car.x < (wall.width+car.width)/2){

car.velocityX = 0;
 var deformation = 0.5 * weight * speed * speed/22509;


if(deformation>180){
  car.shapecolor = color(255,0,0);
}

if(deformation<180 && deformation>100){
  car.shapecolor = color(230,230,0);
}

  
  



 }

}







