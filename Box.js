class Box{
  constructor(x,y,width,height){

     var options = {

     'friction' :  0.3,
     'restitution': 0.9,
     'density':1.0
     }

     this.body = Bodies.rectangle(x,y,width,height,options);
     World.add (world,this.body);
     
    }


  display(){

  var pos = this.body.position;
  var angle = this.body.angle;
   Push();
   transalate(pos.x,pos.y);
   rotate(angle);
   rectMode(CENTER);
   fill(255);
   rect(0,0,this.width,this.height);
   Pop();





  }






  }



























}