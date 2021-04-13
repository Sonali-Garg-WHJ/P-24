class Iron{
	constructor(x,y,w,h)
	{
	// assign options to the iron
		
		var options={
			'density':30,
			'friction': 3,
			'restitution':0.8

		}
        this.body=Bodies.rectangle(x, y, w,h, options)
        this.width = w;
        this.height = h;
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;	
			var angle = this.body.angle;		
			push()
			translate(ironpos.x, ironpos.y);
			rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("white");
			fill("black");
			//draw the rect here to display the iron
			rect(0, 0, this.width,this.height);
			pop()
	}

}