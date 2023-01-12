var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,appleImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
 
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  rabbit = createSprite(160,340,20,20);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  //apple.y = Math.round(random(1,3));
  //orangeL.y = Math.round(random(1,3));
  //redL.y = Math.round(random(1,3));

  //Crear una variable para crear la fruta y usarla para la validación 
  // en el siguiente condicional así: 

  var escogerFruta = Math.round(random(1,3)); 
  
  if (frameCount % 80 === 0) {
    //recuerda usar los 3 iguales para comparar de manera estricta
     if (escogerFruta === 1) {
      createApples();
    } 
     else if (escogerFruta === 2) {
       createOrange();
    }
      else {
       createRed();
     }
   }

  //createApples(); Recuerda que estas llamando a cada función cuando la condición se cumple
  //createOrange(); Agregar estas funciones aquí hacen que se generen las frutas de manera incontrolable
  //createRed(); Pd: LO estás haciendo muy bien, eres super pila :) 
  
}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
