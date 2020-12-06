class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.width = width
        this.height = height
        this.body = Matter.Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
}
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill("teal")
        strokeWeight(0)
        stroke("teal")
        rect(pos.x,pos.y,this.width,this.height)
    }
}