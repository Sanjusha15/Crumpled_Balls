class Paper
{
    constructor(x,y,w,h)
    
	{
       var options = {
                'restitution':0.8,
                'friction':1.0,
                'density':1.0			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
        this.image = loadImage("paper.png")
	}
	display()
	{
			
			var groundPos = this.body.position;		
            var angle = this.body.angle;
			push()
            translate(groundPos.x, groundPos.y);
            rotate(angle)
			imageMode(CENTER)
			//strokeWeight(4);
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}