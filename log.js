class log{
    constructor(x, y, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 100, height, options);
        this.width = 100;
        this.height=height;
      Matter .Body.setAngle(this.body,angle)
        World.add(world, this.body);
      }
      display(){
        
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        stroke ("pink")
        strokeWeight(5);
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        rect(0, 0, this.width, this.height);
        pop();
      }
    };
    
