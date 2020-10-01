const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var turn = 0, turn2 = 0, turn3 = 0;
var particle;
var rand;
var randDivided;
var topScore;
//var turn1, turn2, turn3, turn4, turn5, turn11, turn12, turn13,turn14, turn15, turn21, turn22, turn23, turn24, turn25, turn31, turn32, turn33, turn34, turn35, turn41, turn42, turn43, turn44, turn45, turn51, turn52, turn53, turn54, turn55, turn61, turn62, turn63, turn64, turn65, turn71, turn72, turn73, turn74, turn75, turn81, turn82, turn83, turn84, turn85, turn91, turn92, turn93, turn94, turn95;
var counti;


var divisionHeight=300;
var score, score1, score2;
var count =0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

rand = Math.round(random(1,4));

if (rand ===1){
  score = 500;
  score1 = 300;
  score2 = 200;
 
}

if (rand ===2){
  score = 200;
  score1 = 500;
  score2 = 300;
 
}

if (rand===3){
  score = 300;
  score1 = 200;
  score2 = 500;
 
}
  
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20);
  text("Score: " + count, 70,20);
  Engine.update(engine);
  


   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
   text(score,25,500);
   text(score,105,500);
   text(score,185,500);
   text(score1,265,500);
   text(score1,345,500);
   text(score1,425,500);
   text(score1,505,500);
   text(score2,585,500);
   text(score2,665,500);
   text(score2,745,500);
   text(score2,825,500);

   
   
}

function keyPressed(){
  if(keyCode === 49 && turn<=1){
    particles.push(new Particle(random(10, 160), 10,10));
  }
  if(keyCode === 50 && turn2<=1){
    particles.push(new Particle(random(160, 320), 10,10));
  }
  if(keyCode === 51 && turn3<=1){
    particles.push(new Particle(random(320, 480), 10,10));
   }
//   if(keyCode === 52){
//     particles.push(new Particle(random(480, 640), 10,10));
//   }
//   if(keyCode === 53){
//     particles.push(new Particle(random(640, 800), 10,10));
//   }

 }