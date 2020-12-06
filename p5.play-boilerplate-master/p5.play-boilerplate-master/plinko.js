class Plinko{
    constructor(x,y){
        var options = {
            isStatic : true,
            restituition: 0.5,
            density:0.01,
            friction:2
        }
        this.body = Bodies.circle(x,y,10,options)
        World.add(world,this.body)
    }
    display(){
    push()
    rotate(this.body.angle)
    translate(this.body.position.x,this.body.position.y)
    fill("white")
    ellipseMode(RADIUS)
    ellipse(0,0,10,10)
    pop()
    }
}