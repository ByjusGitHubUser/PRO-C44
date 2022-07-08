var gameState = "start";

function preload(){
  waiterImage = loadImage("assets/waiter.png");
  waiterWalkAnim = loadAnimation("assets/waiter-walk1.png", "assets/waiter-walk2.png");
  waiterServeImage = loadImage("assets/waiter-serve.png");
  steakImage = loadImage("assets/steak.png");
  startImage = loadImage("assets/start-menu.png");
  backgroundImage = loadImage("assets/background.jpg");
  pizzaImage = loadImage("assets/pizza.png");
  playImage = loadImage("assets/play.png");
  customerImage = loadImage("assets/customer.png");
  angryImage = loadImage("assets/angry.png");
  businessmanImage = loadImage("assets/businessman.png");
}

function setup(){
  createCanvas(900,500);

  //form = new Form();
  gameLogo = createSprite(430,230);
  gameLogo.addImage(startImage);
  gameLogo.scale = 0.3;

  playButton = createSprite(430, 300);
  playButton.addImage(playImage);
  playButton.scale = 0.3;
  
  
 

}

function draw(){
  background(backgroundImage);

  if(gameState === 'start'){
    if(mousePressedOver(playButton)){
      gameState = 'play';
    }
  }

  if(gameState === 'play'){
    gameLogo.visible = false;
    playButton.destroy();
    multipleCustomers();

    waiter = createSprite(265, 370);
    waiter.addAnimation('waiterStand',waiterImage);
    waiter.scale = 1.5;
    waiterMovement();


  }
  //form.show();
  drawSprites();
}

function multipleCustomers(){
  if(frameCount%200 === 0){
    customer = createSprite(700, 400);
    customer.addImage(customerImage);
   
    customer.velocityX = -2;
    customer.lifetime = 450;

    randomNumbers = Math.round(random(1,3));

    if(randomNumbers === 1){
      customer.addImage(angryImage);
      customer.scale = 0.4;
    }
    else if(randomNumbers === 2){
      customer.addImage(businessmanImage);
      customer.scale = 0.3;
    }
    else{
      customer.addImage(customerImage);
      customer.scale = 0.5;
    }

  }
}

function waiterMovement(){
  if(keyCode === UP_ARROW){
    waiter.addAnimation("waiterMove", waiterWalkAnim);
    waiter.y -= 5;
  }
}