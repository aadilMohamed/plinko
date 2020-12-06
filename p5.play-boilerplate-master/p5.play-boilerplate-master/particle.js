class Particle{
    constructor(x,y){
        var options = {
            isStatic : false,
            restituition: 0.5,
            density:0.01,
            friction:2
        }
        this.body = Bodies.circle(x,y,10,options)
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }
    display(){
    push()
    fill(this.color)
    rotate(this.body.angle)
    translate(this.body.position.x,this.body.position.y)
    ellipseMode(RADIUS)
    ellipse(0,0,10,10)
    pop()
    }
}