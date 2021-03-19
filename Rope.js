class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.2,
            length:50,
        }
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    fly(){
      this.body.bodyA = null
    }

  display(){
    if(this.body.bodyA != null){
      var pointA = this.body.bodyA.position;
      var pointB = this.body.pointB;
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
  }
}
}