class Ferro{
    constructor(x,y){

        var options = {
            'density':30,
            'friction':3,
            'restitution':0.8
        };
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 150;
        this.height = 40;
        World.add(world, this.body);
    };
    display(){
        var ironpos=this.body.position;		
        push()
        translate(ironpos.x, ironpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black");
        fill("black");
        rect(0,0,this.width,this.height)
        pop();
    
    
    
    }
































    }