const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
var ground;

function setup() {
 var canvas=   createCanvas(400,400);
myEngine = Engine.create();
myWorld = myEngine.world;
var options = {
isStatic :true

}



ground = Bodies.rectangle(200,390,200,20,options)
World.add(myWorld,ground)
//console.log(ground.position.y)
//console.log(ground.type)
console.log(ground)
}

function draw() {
  background("cyan"); 
  Engine.update(myEngine)
  rectMode(CENTER) 
  //rect(200,200,50,50)
  rect(ground.position.x,ground.position.y,200,20)
    drawSprites();
}