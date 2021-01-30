class Paper{
   constructor(x,y,radius){
       var options={
        isStatic:false,
        restitution:0.5,
        friction:0.5,
        density:1.2
       }
       this.body= Bodies.circle(x,y,radius,options)
       this.paperImage= loadImage("paper.png")
       this.radius= radius;
       World.add(world,this.body)
       
   }
   display(){
       fill("red");
       imageMode(CENTER);
       image(this.paperImage,this.body.position.x,this.body.position.y,this.radius,this.radius)
      
   }
}