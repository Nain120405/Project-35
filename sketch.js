var dog,dogHappy,dogImg2;
var database;
var foodS,foodStock;

function preload()
{
  dogHappy = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);

  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogHappy);
  dog.scale = 0.5;
  
  
}


function draw() {  
  background(46, 139, 87);

  dog.display();

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').updata({
    food:x
  })
}



