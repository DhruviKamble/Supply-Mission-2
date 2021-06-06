class Box {
    constructor (x,y,width,height){
        var options = {
            'isStatic': true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        // World.add(World, this.body);
    }

	display() {
		var pos = this.body.position;
		rectMode(CENTER);
		fill(57, 255, 20);
		rect(pos.x, pos.y, this.width, this.height);
	}
}