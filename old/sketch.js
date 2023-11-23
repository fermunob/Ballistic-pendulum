
//let fr = 30; //iniciando FPS
//let dt=1/fr;
//let bullet;
//let imgBullet;
//let imgBlock;
//let imgSoporte;
//let startButton;
//let timerValue=5;
//let shotgun;
//let pendulo;
//let soportePendulo;

//
//let base;

//
//

//let techo;
//let count=100;
//let regresivo;
//let linea_soporte;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(fr);
  //imgBullet=loadImage('Bala.png');
  //imgBlock=loadImage('block2.png');
  ////imgSoporte=loadImage('soporte.png');
  //imgSoporte1=loadImage('soporte1.png');
  //bullet=new Proyectil(createVector(817,393.5),createVector(30,0));//160
  //soportePendulo= new Soporte(createVector(820,150))//100
  //startButton=createButton("START");
  //startButton.position(width/20, height*0.9);
  //startButton.mousePressed(timerCountdown);
  //imgGun=loadImage('Escopeta.png');
  //shotgun=new Arma(createVector(0,400));
  //pendulo=new Bloque(createVector(850,365));
   
  //
  //
  //techo = new Soporte(750,100,300,100);
  //regresivo= new Conteo(count,width/2-550, height/3, 100);
  //linea_soporte= new Cuerda(850,390,750,100);
  //pelota=circle(0,0,50);
}

function draw() {
  background(255);
  //listo 
  //soportePendulo.show();
  //bullet.show();
  //bullet.move();
  //shotgun.show();
  //pendulo.show();
  //if (timerValue<10)
  //{
  //  textSize(100);
  //  text(""+timerValue,width/20, height*0.2);
  //}   
  
  ////


  //techo.show();
  //regresivo.show();
  //linea_soporte.show();
  
  //image(imgB,0,300,imgB.width / 2, imgB.height / 2);
  //pelota.show();
}


//let Proyectil=function(pos, vel)
//{
//  this.pos=pos; // position
//  this.vel=vel;
  
//  this.show=function()
//    {
//      image(imgBullet,this.pos.x,this.pos.y,imgBullet.width / 4, imgBullet.height / 4);
//      //if (timerValue===0)
//      //{
//      //  if (this.pos.x<850)
//      //  {
//      //    image(imgBullet,this.pos.x,this.pos.y,imgBullet.width / 4, imgBullet.height / 4);
//      //  }
//      //}
//    }

//  this.move=function()
//  {
//    if (timerValue===0)
//      {
//        this.pos.x += this.vel.x*dt;
//        this.pos.y += this.vel.y*dt;
//      }
//  }
//}

//function timerCountdown() {
//  setInterval(function() {
//    if (timerValue > 0) {
//      timerValue--;
//    }
//  }, 1000);
//}

//let Arma = function (pos)
//{
//  this.pos=pos; // position
//  let rot=-PI/20.0;  
//  this.show = function ()
//  {
//    if (timerValue===0)
//    { 
//      image(imgGun,this.pos.x,this.pos.y,2*imgGun.width/3 ,  2*imgGun.height/3 );      
//    }
//    else 
//    {
//      image(imgGun,this.pos.x,this.pos.y,2*imgGun.width/3 ,  2*imgGun.height/3 ); 
//    }   
//  }
//}

//let Bloque = function (pos)
//{
//  this.pos=pos; // position
  
//  this.show = function ()
//  {
//    image(imgBlock,this.pos.x,this.pos.y);
//    //line(870,196,this.pos.x + 20, this.pos.y + 3);//912,368);
//    //line(940,196,this.pos.x + 90, this.pos.y + 3);//912,368);
//  }
//}

//let Soporte = function (pos)
//{
//  this.pos=pos; // position
  
//  this.show = function ()
//  {
//    //image(imgSoporte,this.pos.x,this.pos.y, imgSoporte.width/10, imgSoporte.height/10);
//    image(imgSoporte1,this.pos.x,this.pos.y, imgSoporte1.width, imgSoporte1.height);
//  }
//}











//// Objeto 1
//// Techo soporte pendulo (No requiere movimiento)

//let Conteo = function(_t,_x,_y,_s){
//  this.text=_t; //text
//  this.x=_x; // coordenadas de posicinamiento
//  this.y=_y;
//  this.s=_s; //size

//  this.show = function () {
//      textSize(this.s);
//      text(this.text, this.x, this.y);  
//  }
//}
//let Cuerda= function(x_i,y_i,x_f,y_f){
//  this.x_i=x_i;
//  this.y_i=y_i;
//  this.x_f=x_f;
//  this.y_f=y_f;

//  this.show=function()
//  {
//    //stroke(61,241,50);
//    stroke(0,0,0);
//    line(this.x_i, this.y_i, this.x_f, this.y_f);
//  }
//}


// Objeto 2
// Escopeta (no requiere movimiento, en principio)



// Objeto 3
// Bala (requiere movimiento)


// Objeto 4
// Bloque pendulo (requiere movimiento)

