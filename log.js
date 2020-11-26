class Log{
    constructor(x, y,widht,height,angle){
        var options =  {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,widht,height, options);
        Matter.Body.setAngle(this.body,angle);
        this.widht = widht;
        this.height = height;
        World.add(world, this.body);
      
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke('green')
        fill(255);
        rect(0, 0,this.widht,this.height);
        pop();
      
    }
}