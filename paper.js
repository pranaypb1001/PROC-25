class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
            this.body=Bodies.circle(x,y,20,options);
            this.Image=loadImage("paper.png");
            World.add(world, this.body);
    }
   display(){
       var pos=this.body.position;
       var angle=this.body.angle;
       translate(pos.x-10, pos.y-30);
       rotate(angle);
      ellipseMode(RADIUS);
      fill("white");
      image(this.Image,0,0,60,60);
   }
    }