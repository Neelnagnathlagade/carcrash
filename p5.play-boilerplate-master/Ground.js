//Hear we have created a function for a "Ground"

class Ground{
    // this function is used contain all the properties of box
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option)
        this.width=width
        this.height=height
        World.add(world,this.body)

    }
     //Displaid the function for the display
      display(){
var pos=this.body.position
rectMode(CENTER)
fill("brown")
rect(pos.x,pos.y,this.width,this.height)
      }  
    
}