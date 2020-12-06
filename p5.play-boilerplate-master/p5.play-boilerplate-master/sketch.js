const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies
var engine,world

var divisions = []
var plinkos = []
var particles = []
var divisionHeight = 300

function setup() {
  engine = Engine.create()
  world = engine.world
  createCanvas(480,800);
  particle = new Particle(40,40)
  ground = new Ground(240,800,480,50)
   for(var i = 0; i<=width; i=i+80){
    divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight))
  }
  for(var j = 40; j <= width; j = j+50){
    plinkos.push(new Plinko(j,75))
  }
  for(var j = 15; j <= width-10 ; j = j+50){
    plinkos.push(new Plinko(j,175))

  }
  for(var j = 40; j <= width; j = j+50){
    plinkos.push(new Plinko(j,275))
  }
  for(var j = 15; j <= width-10 ; j = j+50){
    plinkos.push(new Plinko(j,375))

  }
}

function draw() {
  background(0);
if(frameCount%60 === 0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}
Engine.update(engine)
for(var a = 0;a<plinkos.length;a++){
  plinkos[a].display()
}
for(var a = 0;a<particles.length;a++){
  particles[a].display()
}
ground.display()
for(var a = 1;a<divisions.length-1;a++){
  divisions[a].display()
}
}