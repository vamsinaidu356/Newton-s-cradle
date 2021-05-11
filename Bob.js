class Bob {

    constructor(x, y, radius) {
      var options = {
        isStatic: false,  
        restitution:1,
          friction:0.3,
          density:5.5,

      }
      
      this.body = Bodies.circle(x,y,25,options);   
      World.add(world, this.body);

      console.log(this.body);
    }
    display(){
      
           
           push()   
           ellipseMode(RADIUS);
           rectMode(CENTER)
           fill(255,0,255)     
         //imageMode(CENTRE);
         //image(this.image, 0,0, this.r, this.r)  
         ellipse(this.body.position.x, this.body.position.y,25,25);
         pop()

    }

  }