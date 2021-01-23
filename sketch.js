var movingRect, fixedRect, rect, rect1;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 100, 50, 50);
  fixedRect = createSprite(200,200,50,50);
  movingRect.velocityY = 3;
  fixedRect.velocityY = -3;
  rect = createSprite(100, 300, 50, 50);
  rect1 = createSprite(300,300,50,50);
  rect.velocityX = 3;
  rect1.velocityX = -3;

}

function draw() {
  background(255,255,255);
  
  bounceOff(rect, rect1);
  drawSprites();
}

function bounceOff(a,b){
  if(a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2)
    {
      a.velocityX = a.velocityX * (-1);
     b.velocityX =b.velocityX * (-1);
      
   }
   if(a.y - b.y < b.height/2 +a.height/2
    && b.y - a.y < b.height/2 +a.height/2){
      a.velocityY = a.velocityY * (-1);
      b.velocityY = b.velocityY * (-1);
  }

}