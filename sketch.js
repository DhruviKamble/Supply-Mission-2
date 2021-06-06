var helicopter_img, helicopterSprite, packageSprite,package_img;
var packageBody, ground;
var box_bottom, box_left, box_right;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopter_img=loadImage("helicopter.png")
	package_img=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	// rectMode(CENTER);

	box_right = new Box(490, 615);
	box_right.width = 20;
	box_right.height = 100;

	box_bottom = new Box(400, 660);
	box_bottom.width = 200;
	box_bottom.height = 20;

	box_left = new Box(310, 615);
	box_left.width = 20;
	box_left.height = 100;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(package_img);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopter_img);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(114, 50, 242);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
  drawSprites();

  box_right.display();
  box_left.display();
  box_bottom.display();

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);    
}
}