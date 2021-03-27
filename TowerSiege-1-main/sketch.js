
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;

function setup() {
var canvas = createCanvas(1200,400);


ground = new Ground();

block1 = new Block(120,235,30,40);
console.log(block1);
block2 = new Block(150,235,30,40);
block3 = new Block(190,235,30,40);
block4 = new Block(210,235,30,40);
block5 = new Block(240,235,30,40);
block6 = new Block(270,235,30,40);
block7 = new Block(300,235,30,40);
block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,195,30,40);
block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,235,30,40);
block16 = new Block(390,155,30,90);



}

function draw() {
background("white");
textSize(20);
fill(lightYellow);
text("Drag the HexagonStone to Launch it Torwards the Blocks",100,30);
ground.display();
strokeWeight(2)
stroke(15)
fill("blue");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();



drawSprites();
}
