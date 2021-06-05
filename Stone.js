class Stone {
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
      'density':25,
      'friction': 1.0,
      'restitution':0.5
    };
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("yellow");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipseMode(RADIUS);
            ellipse(0, 0, this.r, this.r);
		

			pop()
	}

}