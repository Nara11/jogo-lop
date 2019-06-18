
/* 
    Equipe: 
        Nome JOEL JERONIMO - Subturma B  (Líder)
        Nome NARA RAQUEL - Subturma B 
        Etapa 7 e 8
*/

var x = 350; // var. jogador
var y = 400; // var. jogador 
var vxo = [];// var. obstaculo
var vyo= [];// var. obstaculo
var xd = 7; // var. disparo
var yd = 7; // var. disparo
var estadoDisparo = false;
var life= 5;
var score=0;
var level=1;
//var inicio=3;
//var final=7;
var a=40; // variavel do jogador *ps: foi necessaria para realizar a etapa da colisão*
var b=50;//variavel do obstaculo *ps: foi necessaria para realizar a etapa da colisão*
var c=10; //variavel do disparo *ps: foi necessaria para realizar a etapa da colisão*
var qtObj=9;
var barreiraDepontos=10;
var tela=1;
var palavras=[]; //vetor para as palavras *obstaculo*
var pValidas=[];// vetor para as palavras validas
var pValidas1=[];
var pValidas2=[];
var silaba= "SA"; 
var silaba1= "GI";// vetor para as silabas *jogador*
var silaba2= "BA";
var img;
var qnt_palavras_validas = 0;


function preload(){
 img=loadImage('fundo.jpg');
 }

function setup() {
  
  createCanvas(600, 500);
  for(var i=0; i<qtObj; i++){
    vxo[i]=random(0,500);
    vyo[i]=random(0,500);
  }
    
  palavras[0]="__DO";
  palavras[1]="BO__";
  palavras[2]="__BÃO";
  palavras[3]="__CO";
  palavras[4]="__RAFA";
  palavras[5]="A__R";
  palavras[6]="MA__A";
  palavras[7]="__IXOU";
  palavras[8]="JU__";
  
  
//cor da borda //
  stroke(51);
  rect(20, 20, 60, 60);

}


function draw() {
  
   if (level == 1){
     
    silaba= "SA";
    pValidas= ["__CO","__BÃO"];
    qnt_palavras_validas = 2;
  }
  else if(level == 2){
    silaba1= "GI";
    pValidas1= ["__RAFA","A__R","MA__A"];
    qnt_palavras_validas = 3;
  }
  else if(level==3){
    silaba2="BA";
    pValidas2=["BO__","__BÃO","JU__","__IXOU"];
    qnt_palavras_validas = 4;
  }
  
    
    
  
   if(tela== 1){
  // inicio do jogo
  //background(100);
  image(img,0,0);
  textSize(40);
  fill(10,10,10);
  text("BEM VINDO", 200,150);
  text("START", 250, 230);
     fill(10,10,10);
      textSize(20);
  text("(pressione enter para iniciar)", 190,265); 
  
  if(keyIsDown(ENTER)){
    tela=2;
  }
   }
  
  
  //instruções
 if(tela==2){
     //background(100);
   image(img,0,0);
   textFont('Georgia');
   textSize(40);
   fill(10,10,10);
   text("INSTRUÇÕES ",200,80)
   textSize(30);
   text("°OBJETIVO DO JOGO:",40,135);
   textSize(25);
   text("completar as palavras com suas silabas"+"\n"+ "correspondentes.",40,170);
   textSize(30);
   text("°UTILIZE:",40,250);
   textSize(25);
   text("CTRL: para efetuar disparos",40,280);
   text("SETAS: para movimentar o jogador",40,310);
   text("SHIFT: para iniciar", 40,340);
    if(keyIsDown(SHIFT)){
     tela=3;
   }
 }
  
  //execução do jogo
  
  if(tela==3){
     
 // background(100); //cor do fundo//
  image(img,0,0);
  fill(10, 10,10);
  textSize(25);
  text('life: '+life, 50, 30);
  text('score: '+score, 230, 30);
  text('level: '+level, 450, 30);
 
     
   // MOVER COM O TECLADO//
   if (keyIsDown(LEFT_ARROW)) {
    x = x - 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x = x + 5;
  }

  //if (keyIsDown(UP_ARROW)){
    //y = y - 5;
  //}

  //if (keyIsDown(DOWN_ARROW)){
    //y = y + 5;
  //}

  
  // cor de preenchimento//
  fill(10,10,10);
   if(level==1){
  //figuras geometricas//
  ellipse(x, y, a, a); // jogador//
      textSize(20);
    textFont('Georgia');
    fill(200);
  text(silaba,x-14,y+5);
}
    if(level==2){
      //figuras geometricas//
  ellipse(x, y, a, a); // jogador//
      textSize(20);
    textFont('Georgia');
    fill(200);
  text(silaba1,x-14,y+5);
    } 
    
    
    if(level==3){
      //figuras geometricas//
  ellipse(x, y, a, a); // jogador//
      textSize(20);
    textFont('Georgia');
    fill(200);
  text(silaba2,x-14,y+5);
    } 
          
   // disparo do jogador//
  if (keyIsDown(CONTROL) && estadoDisparo == false) {
    xd=x;
    yd=y;
  estadoDisparo= true;
  }
   
  if(estadoDisparo == true){
    ellipse(xd,yd,c,c); //desenho do disparo //
    yd=yd-30; // direcao que vai seguir o disparo// 
    if(yd<0){
      estadoDisparo= false;
    }
  }
   
  for (var i=0;i<=qtObj; i++){ 
    fill(10); 
   // rect(vxo [i],vyo[i],77,8);//obstaculo//
    text(palavras[i], vxo[i]+8, vyo[i]); // palavras como obst.
    if(level==1){
      vyo[i]=vyo[i]+2;
    }
    if(level==2){
      vyo[i]=vyo[i]+4;
    }
    if(level==3){
      vyo[i]=vyo[i]+6;
    }
    if (vyo[i] > 600) {
      vyo[i]=-random(100);
      console.log(vyo[i]);
    }
      
  // distancia entre jogador e obstaculo (colisao)
   //if (dist(x, y, vxo[i], vyo[i])< a+b-40){
     //x= 350; 
     //y= 400;
    
    // }
     

  // distancia entre tiro e obstaculo (colisao)
 if (dist(xd, yd, vxo[i], vyo[i])< b+c-15 && estadoDisparo==true){
       xd= 7;
       yd= 7;
       vxo[i]=random(600);
       vyo[i]=-random(500);  
           
       var qualquer=0;
       
       for(var j = 0; j < qnt_palavras_validas; j ++){
           
          if(level==1 && pValidas[j] == palavras[i]){
            score=score+2
            qualquer++
          }           
          if(level==2 && pValidas1[j]== palavras[i]){
            score=score+2
            qualquer++
          }
          if(level==3 && pValidas2[j]== palavras[i]){
            score=score+2
            qualquer++
          }
         estadoDisparo= false
      }
       if(qualquer==0){
         life--
       }
       
                      
    if(score>barreiraDepontos){
       level++;
       barreiraDepontos=barreiraDepontos+10;
    }
        
       if(life==0){
         tela=5
       }
       
       if(score==30){
        tela=4
       }   
    }  
   }
     if(tela==4){
  // inicio do jogo
  //background(100);
  image(img,0,0);
  textSize(40);
  fill(10,10,10);
  text("PARABÉNS", 200,150);
  text("VOCÊ COMPLETOU O JOGO", 60, 230);
     fill(10,10,10);
      textSize(20);
  text("(pressione espaço para jogar novamente)", 150,265); 
         }
  }
  
  if(tela==5){
    // inicio do jogo
  //background(100);
  image(img,0,0);
  textSize(40);
  fill(10,10,10);
  text("GAME OVER", 200,200);
  fill(10,10,10);
  textSize(20);
  text("(pressione espaço para jogar novamente)", 150,265)
    
  }
  if(score==30 || life==0){
    if(keyIsDown(32)){
      tela=3;
      score=0;
      life=5;
      level=1;
      for(var i=0; i<qtObj; i++){
        vxo[i]=random(0,400)+50;
        vyo[i]=random(-100,0)+35;
      }
    }
  }
}
