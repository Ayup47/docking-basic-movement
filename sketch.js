var spacecraft,spacecraftU,spacecraftL,spacecraftR,spacecraftI;
var iss,issImage;
var hasDocked = false;
var bg;
function preload(){
spacecraftI = loadImage("spacecraft1.png");
spacecraftU = loadImage("spacecraft2.png");
spacecraftL = loadImage("spacecraft3.png");
spacecraftR = loadImage("spacecraft4.png");
issImage = loadImage("iss.png");
bg = loadImage("spacebg.jpg");
}
function setup() {
  createCanvas(1000,600);
  spacecraft = createSprite(590, 500, 50, 50);
  spacecraft.addImage("idle",spacecraftI);
  spacecraft.scale = 0.2;
  iss = createSprite(450,200,70,70);
  iss.addImage("iss",issImage);
  iss.scale = 0.75;
}

function draw() {
  background(bg);  
  drawSprites();
  spacecraft.changeImage("idle",spacecraftI);
  
    if(!hasDocked){
      if (keyDown(UP_ARROW)){
        spacecraft.velocityY = -0.75;
      }  
    
      if (keyDown(DOWN_ARROW)){
        spacecraft.velocityY = 0
        spacecraft.addImage("up",spacecraftU);
        spacecraft.changeImage("up",spacecraftU);
      }  
    
      if (keyDown(RIGHT_ARROW)){
        spacecraft.x = spacecraft.x+0.75;
        spacecraft.addImage("right",spacecraftR);
        spacecraft.changeImage("right",spacecraftR);
      }  
      
      if (keyDown(LEFT_ARROW)){
        spacecraft.x = spacecraft.x-0.75;
        spacecraft.addImage("left",spacecraftL);
        spacecraft.changeImage("left",spacecraftL);
      }  
    
    }










}