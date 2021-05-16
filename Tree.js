class Tree{
  constructor(x,y, width,height){
    var options = {
      isStatic:true
    }
    this.width  =width;
    this.height = height;
    this.image = loadImage('tree.png');
    this.body = Bodies.rectangle(x,y,width,height,options);
 World.add(world,this.body); 

  }
  display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill(225,0,225)
    imageMode(CENTER);
    image(this.image,1050,300,400,700);  
  }
}