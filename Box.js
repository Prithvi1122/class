class Box {
    constructor(x,y,w,h) {
        var options={
            restitution:0.5,
            friction:0.3,
            density:1.0
        }
        this.body=Bodies.rectangle(x, y, w, h,options);
        World.add(world,this.body);
        this.width=w;
        this.height=h;
    }
     display() {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        rect(0, 0, this.width, this.height);
        pop();
    }
}
