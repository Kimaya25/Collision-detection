//creating variables
var movingrect ;
var fixedrect;

function setup() {
  //creating canvas
  createCanvas(800,400);
  //giving movingrect properties
  movingrect = createSprite(400, 200, 50, 50);
  movingrect.debug = true;
  //giving fixedrect properties
  fixedrect = createSprite(250,180,40,40)
  fixedrect.debug = true;
}

function draw() {
  background(0);  
  //making movingrect move with the mouse
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  //giving both the rectangles base colours
  movingrect.shapeColor = "white";
  fixedrect.shapeColor = "white";
  
  //creating the collision detector algorothim
  if(fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 
    && movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2
    && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2
    && movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2){
    movingrect.shapeColor = "blue";
    fixedrect.shapeColor = "red";
  
  }
 
 //giving condition incase of the rectangles not colliding
  else {
    movingrect.shapeColor = "white";
    fixedrect.shapeColor = "white";
  }
  
  
  drawSprites();
}