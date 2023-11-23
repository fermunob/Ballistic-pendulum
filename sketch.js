// http-server -c-1

// Bibliografia: https://p5js.org/es/reference/
//               https://p5js.org/es/examples/

//Nota: A lo largo de este sketch es posible encontrar algunos snippets
//      tomados del la bibliografia mencionada.

let imgGun;
let imgBase;
let imgBullet;
let imageBlock;

let system;
let bullet;
let block;
let t=1/1000;
let time;
let anglemeter;

let fr = 10;
let count=100;
let timerValue=5;
let blockMass=10;
let bulletMass=1;

let startButton;
///////////
let m = 0.008; // masa de la bala (kg)
let M = 1.5; // masa del bloque (kg)
let g = 9.8; // aceleracion gravitacional (m/s^2)
let l = 1; // longitud del pendulo (m)
let v; // obtiene el valor dado de la bala
let a0 = 0;
let L = 90;
let a;
let values = [];
let bulletpos;
let velMax=0;

///////////
let pendulo;

function setup() {
  createCanvas(800, 400);
  frameRate(fr);
  //resetSketch();
  let pos = createVector(30,150);
  let siz = createVector(80,100);
  
  imgBullet  = loadImage('Bala.png');  // Carga de imagenes 
  imgGun     = loadImage('Escopeta.png');
  imgBase    = loadImage('soporte.png');
  imageBlock = loadImage('block1.png');
  
  
  system = new BPSystem(pos, siz); // Contiene arma, soporte del pendulo
  bullet = new Bullet(pos); // Bala
  block  = new Block(createVector(613,36)); // Pendulo
  anglemeter = new AngleMeter(createVector(613,36)); // Muestra los valores (angulo maximo, velocidad de la bala)
  time = new Timer(); // Cuenta regresiva
  
  bulletVel = createSlider(250, 380, 280); // Barra seleccionadora de velocidad
	bulletVel.position(220, 350);
	bulletVel.size(500, 20);

  //resetButton = createButton("RESTART");
  //resetButton.position(120, 350);
  //resetButton.mousePressed(resetSketch);

  startButton = createButton("START"); // Boton para iniciar (hacer el disparo)
  startButton.position(50, 350);
  startButton.mouseReleased(timerCountdown);
}

function draw() {
  background(245);

  system.run(); // se muestran las partes del sketch
  bullet.run();
  time.display();
  block.run();
  anglemeter.update();  
}

let Block = function(position) { // Pendulo init
  this.position = position.copy();
};

Block.prototype.run = function(){ // llama update para nostrar el movimiento
  this.update();
};

Block.prototype.update = function(){ // movimiento del pendulo
  // velocidad del proyectil 332-360 m/s
  v  = bulletVel.value();
  a0 = acos(1-(pow(v,2))/(2*g*l)*pow((m/(m+M)),2));  
  a  = a0 * sin(2 * PI * t / (10 * sqrt(L)));
  values.push(a);
  push();
  translate(this.position.x, this.position.y);
	strokeWeight(2);
	stroke(50);
	line(0, 0, L * sin(a), L * cos(a));
  line(72, 0, L * sin(a)+72, L * cos(a));
  image(imageBlock, L * sin(a)-25, L * cos(a));
	ellipse(0, 0, 4, 4);
  ellipse(72, 0, 4, 4);
	pop();
  if (bulletpos>=510){
    t++;
  }
};

let AngleMeter = function(position){ // Para mostrar los valores
  this.position=position.copy();
};

function evalMax(vals){  
  let maximo = max(vals);
  return maximo*180/PI;
}

AngleMeter.prototype.update=function(){ // actualiza los valores

  velMax=(m+M)*(sqrt((2*g*l)*(1-cos(evalMax(values)*PI/180))))/(m);
  translate(this.position.x, this.position.y);

  stroke(50);
  strokeWeight(3.5);
  line(72, 0, 80 * sin(evalMax(values)*PI/180) + 72, 80 * cos(evalMax(values)*PI/180));

  stroke(50);
  strokeWeight(1);
  textSize(8);
  text(round(evalMax(values),2)+"°", 80 * sin(evalMax(values)*PI/180) + 77, 80 * cos(evalMax(values)*PI/180));

  stroke(50);
  strokeWeight(1.5);
  textSize(20);
  text("Max Angle", -150, 230);

  stroke(50);
  strokeWeight(1.5);
  textSize(20);
  text(round(evalMax(values),2)+"°", 0, 230);

  stroke(50);
  strokeWeight(1.5);
  textSize(20);
  text("Vel Bullet", -150, 270);
  stroke(50);
  strokeWeight(1.5);
  textSize(20);
  text(round(velMax,1)+" km/h", 0, 270);
};

let Timer = function(){ // Para mostrar el conteo regresivo
  
}

Timer.prototype.display = function(){
  if (timerValue<10)
  {
    textSize(80);
    text(""+timerValue,350, 80);
  }
};

function timerCountdown() {
  setInterval(function() {
    if (timerValue > 0) {
      timerValue--;
    }
  }, 1000);
};

let Bullet = function(position) { // funcion para la bala
  this.position = position.copy();
};

Bullet.prototype.run = function() { // muestra y actualiza la poicion de la bala
  this.update();
  this.display();
};

Bullet.prototype.display = function() {
    if (timerValue === 0) {
      if (this.position.x <= 520 )
      {
        image(imgBullet, this.position.x + 45, this.position.y - 9, imgBullet.width/4, imgBullet.height/4);
      }
    }
};

Bullet.prototype.update = function() {
  this.velocidad = createVector(2*bulletVel.value()/3, 0);
  if (timerValue === 0) {
    this.position.add(this.velocidad)
    bulletpos=this.position.x;
  }
};

let BPSystem = function(position,size) { // sistema estatico (arma, soporte pendulo)
  this.position = position.copy();
  this.size     = size.copy();
};

BPSystem.prototype.run = function() {

  let gun = new Gun(this.position);
  let penduloBase = new Base(this.position);
  textSize(30);
  text('Ballistic pendulum', 10, 35)
  gun.display();
  penduloBase.display();
};

let Gun = function (position) {
  this.position = position.copy();
};

Gun.prototype.display = function() {
  image(imgGun, this.position.x, this.position.y, imgGun.width/2 ,  imgGun.height/2);
};

let Base = function(position) {
  this.position = position.copy();
};

Base.prototype.display = function() {
  let posAjuste = createVector(2*width/3, width/5);
  this.origen   = this.position.add(posAjuste.x, -posAjuste.y);
  image(imgBase, this.origen.x, this.origen.y);
};
  


///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


//function resetSketch(){
//  let pos = createVector(30,150);
//  let siz = createVector(80,100);

//  imgBullet  = loadImage('Bala.png');
//  imgGun     = loadImage('Escopeta.png');
//  imgBase    = loadImage('soporte.png');
//  imageBlock = loadImage('block1.png');
  
  
//  system = new BPSystem(pos, siz);
//  bullet = new Bullet(pos);
//  block  = new Block(createVector(590,140));
//  strings = new SuportLine(pos);
//  time = new Timer();
//  //pendulo= new Pen(createVector(300, 50));//, createVector(300,200)

  
//  bulletVel = createSlider(20, 400, 100);
//	bulletVel.position(220, 350);
//	bulletVel.size(500, 20);

//  //runpoint=9
//  timerValue=5;

//}
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
