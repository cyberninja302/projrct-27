class Paper{
    constructor(x,y){
            var options={
                isStatic: false,
                restitution:1,
                friction:0, 
                density:0.8
            }
    this.body = Bodies.circle(x, y, 25,  options)
    World.add(world, this.body)
    this.radius = 25
    
}

display(){
var pos = this.body.position
var angle = this.body.angle;
push()
translate(pos.x, pos.y);
rotate(angle);
angleMode(RADIANS)
fill("red");
stroke("blue");
strokeWeight(3);
ellipse(0,0,this.radius*2,this.radius*2)
pop()
}
}