class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.4,
        'friction':1.0,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    //this.image = loadImage("sprites/wood1.png");
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(2);
    stroke(72, 61, 139);
    fill(127, 255, 212);
    rect(0, 0, this.width, this.height);
    pop();
  }
};

