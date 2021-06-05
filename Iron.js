class Iron{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options = {
      'density':30,
      'friction': 1.5,
      'restitution':0.5
    };
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
            rect(0, 0, this.width,this.height);

			pop()
	}

}