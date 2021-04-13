class Stone{
	constructor(x,y,w,h)
	{
	// assign options to the stone
		
		var options={
			'density':12,
			'friction': 0.9,
			'restitution':0.8

		}
        this.body=Bodies.rectangle(x, y, w,h, options)
        this.width = w;
        this.height = h;
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;	
			var angle = this.body.angle;	
			push()
			translate(stonepos.x, stonepos.y);
			rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			//draw the rect here to display the stone
			rect(0, 0, this.width,this.height);
			pop()
	}

}