const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15, block16;
var platform;
var polygon, polygon_img;
var Stand1, Stand2;
var bird, slingshot;

function preload(){
    polygon_img = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    platform = new Ground(600, 400, 1200, 70);
    Stand1 = new Ground(373, 300, 200, 20);
    Stand2 = new Ground(810, 220, 150, 20);

    block1 = new Block(330,235,30,40);
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
    block5 = new Block(345,195,30,40);
    block6 = new Block(375,195,30,40);
    block7 = new Block(405,195,30,40);
    block8 = new Block(360,155,30,40);
    block9 = new Block(390,155,30,40);
    block10 = new Block(375,115,30,40);

    block11 = new Block(780,190,30,40);
    block12 = new Block(810,190,30,40);
    block13 = new Block(840,190,30,40);
    block14 = new Block(795,150,30,40);
    block15 = new Block(825,150,30,40);
    block16 = new Block(810,110,30,40);

    
    slingshot = new SlingShot(this.polygon,{x:140, y:200});
}

function draw(){
    background(0)
    //background(backgroundImg);
    Engine.update(engine);

    platform.display();
    Stand1.display();
    Stand2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    slingshot.display();   
    

    imageMode(CENTER);
    image(polygon_img, polygon.position.x, polygon.position.y,40,40)

    text("press space to serve",450,50)
    stroke(255, 102, 102)
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
 if (keyCode === 32) {
    slingshot.attach(this.polygon);
 }
}
