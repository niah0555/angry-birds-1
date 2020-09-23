const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var pig1,pig2;
var log1,log2,log3;

function setup(){
    var canvas = createCanvas(5000,1000);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(550,900,200,200);
    box2 = new Box(100,900,200,200);
    box3 = new Box(100,700,200,200);
    box4 = new Box(550,700,200,200);
    ground = new Ground(500,height,1000,20)

    pig1= new pig(350,900);
    pig2 = new pig(350,650);

    log1=new log(350,700,800,PI/2);
    log2=new log(755650,600,PI/6);
    log3=new log(500,800,600,PI/-6);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    pig1.display();
    log1.display();
    pig2.display();
    log2.display();
    log3.display();
    ground.display();
}