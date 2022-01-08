var backgroundImage;
var cat;
function preload() {
    backgroundImage = loadImage ("garden.png");
    catimg1 = loadImage ("cat1.png");
    mouseimg1 = loadImage ("mouse1.png");
    catimg2 = loadImage ("cat2.png");
    mouseimg2 = loadimage ("mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite (870,600);
    cat.addAnimation ("gato sentado", catimg1);
    cat.scale = 0.2;
}

function draw() {

    background ("backgroundImage");
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX=0;
    cat.addAnimation ("ultimaImagemGato", catimg3);
    cat.changeAnimation ("ultimaImagemGato");
    cat.x =300;
    cat.scale=0.2;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  gato.addAnimation ("gatoCorrendo", imgGato2);
gato.changeAnimation("gatoCorrendo");

  if(keyCode === LEFT_ARROW) {
    mouse.addAnimation ("ratoProvocando", mouseimg2);
    mouse.changeAnimation ("ratoProvocando");
    mouse.frameDelay = 25;

    cat.velocityX = -5;
  }
}
