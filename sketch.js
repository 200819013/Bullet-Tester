var wall, thickness
var bullet, speed, weight


function setup() {
  createCanvas(1600,400)

   //speed + weight values
  thickness=random(22,83)
   
   bullet = createSprite(50, 200, 50, 50)
   bullet.shapeColor = "white"
   bullet.velocityX=10;
//wall sprite/ properties 
  wall = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = "grey"
  speed=random(223,321);
  weight=random(30,52)

}

function draw() {
  background("black");
if(hasCollided(bullet, wall)){
  bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
		
	}

	

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
	}
	
  }

 
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
   if(lwall.x-lbullet.x< lbullet.width/2+lwall.width/2){
       return true
   }
   else{
    return false;}
   }
	
	


