//Create variables here

var dog, happyDog, foodS, foodStock;

function preload()
{
  //load images here
  
  dog = loadImage(images/dogImg.png);

  happyDog = loadImage(images/dogImg1.png);
}

function setup() {
  createCanvas(500, 500);

  dog = createSprite();
  dog.addImage("dogImg", dog)

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  
  database = firebase.console();
  
}


function draw() { 
  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("nice_dog", happyDog);
  }

  drawSprites();
  //add styles here

  text(database.foodstock, 480, 20);
  textSize(3);
  fill("aqua");
  stroke("green");
  strokeWeight(3);

}



