var bg,invground;
var ninja,ninja_run;
var alien,demon,witch;
var diamond;
function preload(){

	bg = loadImage("SPRITES/jungle.jpg");
	ninja_run = loadAnimation("SPRITES/ninja1.png","SPRITES/ninja2.png","SPRITES/ninja3.png",
	"SPRITES/ninja4.png");
    alien = loadImage("SPRITES/alien.png");
	demon = loadImage("SPRITES/demon.png");
	diamond = loadImage("SPRITES/diamond.png");

}

function setup() {
 canvas = createCanvas(displayWidth,displayHeight);
	bg1 = createSprite(width/2,100,width,2);
	bg1.addImage(bg);
	bg1.scale = 3;
	invground = createSprite(width/2,670,width,10)
	invground.visible = true;
	ninja = createSprite(260,610,10,10);
	ninja.addAnimation('running',ninja_run);
	ninja.scale = 0.2
	



	}

function draw() {
 background(0);
	bg1.velocityX = -2
	
	

	if(bg1.x < 0){

		bg1.x = bg1.width/2;
	}

	if(keyWentDown("space")&& ninja.collide(invground)){

		ninja.velocityY = -20;
            
	}
	ninja.velocityY  += 0.8;
 drawSprites();
}



