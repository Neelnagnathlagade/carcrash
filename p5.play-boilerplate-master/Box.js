//Hear we have created a function for a "Box"
class Box{
    // this function is used contain all the properties of box
    constructor(x,y,width,height){
        var option={
            restitution:0.8
        }
        this.body=Bodies.rectangle(x,y,width,height,option)
        this.width=width
        this.height=height
        World.add(world,this.body)

    }
    //Displaid the function for the display
      display(){
var pos=this.body.position;
var angle=this.body.angle
push();
translate(pos.x,pos.y)
rotate(angle)

rectMode(CENTER)
fill(255)
rect(0,0,this.width,this.height)
pop();
      }  
    
}