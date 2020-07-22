const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, div1, div2, div3, div4, div5, div6, div7;

var pli1, pli2, pli3, pli4, pli5, pli6, pli7, pli8, pli9, pli10;
var pli11, pli12, pli13, pli14, pli15, pli16, pli17, pli18;
var pli19, pli20, pli21, pli22, pli23, pli24, pli25, pli26, pli27, pli28;
var pli29, pli30, pli31, pli32, pli33, pli34, pli35, pli36;

var particles=[];
var divisions=[];

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,600,10)

  div1 = new Divisions(0,670,10,250);
  div2 = new Divisions(70,670,10,250);
  div3 = new Divisions(140,670,10,250);
  div4 = new Divisions(210,670,10,250);
  div5 = new Divisions(280,670,10,250);
  div6 = new Divisions(350,670,10,250);
  div7 = new Divisions(420,670,10,250);
  div8 = new Divisions(480,670,10,250);

  pli1 = new Plinko(30,80,10);
  pli2 = new Plinko(80,80,10);
  pli3 = new Plinko(130,80,10);
  pli4 = new Plinko(180,80,10);
  pli5 = new Plinko(230,80,10);
  pli6 = new Plinko(280,80,10);
  pli7 = new Plinko(330,80,10);
  pli8 = new Plinko(380,80,10);
  pli9 = new Plinko(430,80,10);
  pli10 = new Plinko(470,80,10);

  pli11 = new Plinko(50,130,10);
  pli12 = new Plinko(100,130,10);
  pli13 = new Plinko(150,130,10);
  pli14 = new Plinko(200,130,10);
  pli15 = new Plinko(250,130,10);
  pli16 = new Plinko(300,130,10);
  pli17 = new Plinko(350,130,10);
  pli18 = new Plinko(400,130,10);

  pli19 = new Plinko(30,180,10);
  pli20 = new Plinko(80,180,10);
  pli21 = new Plinko(130,180,10);
  pli22 = new Plinko(180,180,10);
  pli23 = new Plinko(230,180,10);
  pli24 = new Plinko(280,180,10);
  pli25 = new Plinko(330,180,10);
  pli26 = new Plinko(380,180,10);
  pli27 = new Plinko(430,180,10);
  pli28 = new Plinko(470,180,10);

  pli29 = new Plinko(50,230,10);
  pli30 = new Plinko(100,230,10);
  pli31 = new Plinko(150,230,10);
  pli32 = new Plinko(200,230,10);
  pli33 = new Plinko(250,230,10);
  pli34 = new Plinko(300,230,10);
  pli35 = new Plinko(350,230,10);
  pli36 = new Plinko(400,230,10);
}

function draw() {
  background("black");  

  Engine.update(engine);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }
  for (var j=0;j<particles.length;j++){
    particles[j].display();

  }
  for (var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  ground.display();

  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  div8.display();

  pli1.display();
  pli2.display();
  pli3.display();
  pli4.display();
  pli5.display();
  pli6.display();
  pli7.display();
  pli8.display();
  pli9.display();
  pli10.display();
  pli11.display();
  pli12.display();
  pli13.display();
  pli14.display();
  pli15.display();
  pli16.display();
  pli17.display();
  pli18.display();
  pli19.display();
  pli20.display();
  pli21.display();
  pli22.display();
  pli23.display();
  pli24.display();
  pli25.display();
  pli26.display();
  pli27.display();
  pli28.display();
  pli29.display();
  pli30.display();
  pli31.display();
  pli32.display();
  pli33.display();
  pli34.display();
  pli35.display();
  pli36.display();



}