class paper {

constructor(x,y,radius){
var options={

    'isStatic':false,
    'restitution':0.3,
    'friction':0.5,
    'density':1.2
}
this.x=x;
this.y=y;
this.radius=radius;
this.body=Bodies.circle(x,y,radius,options);
World.add(world,this.body);
}

display(){
var pos = this.body.posotion;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
elipseMode(RADIUS);
fill(255);
elipse(0,0,this.angle);
pop;

}}