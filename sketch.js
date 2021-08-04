var bg;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");

    catImg1 = loadAnimation("images/catHappy.png");
    catImg2 = loadAnimation("images/catWalking1.png","images/catWalking2.png");
    catImg3 = loadAnimation("images/catsitting.png");

    mouseImg1 = loadAnimation("images/mouseGift.png");
    mouseImg2 = loadAnimation("images/mouseTease.png","images/mouseTease2.png");
    mouseImg3 = loadAnimation("images/mouseHappy.png");
}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
    cat = createSprite(870,600);
    cat.addAnimation("catSitting",catImg1);
    cat.scale = 0.2;
    
    mouse = createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale  = 0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if cat and mouse 
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImg3);
        cat.x =300;
        cat.changeAnimation("catLastImage");

        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.changeAnimation("mouseLastImage");
    }  


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
        
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.changeAnimation("mouseTeasing");


    }
}