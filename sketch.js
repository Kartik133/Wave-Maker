var w,k,t,x,a,set,gameState="input";

function setup() {
  createCanvas(windowWidth,windowHeight);

  w = createInput("","number");
  k = createInput("","number");
  t = createInput("","number"); 
  a = createInput("","number"); 
  set = createButton("SET"); 

  a.position(width/2-60,height/2-80);
  w.position(width/2-60,height/2-40);
  k.position(width/2-60,height/2);
  t.position(width/2-60,height/2+40);
  set.position(width/2-60,height/2+80);

  strokeWeight(3);
  stroke(255);
  fill(255);
  textSize(20);
}

function draw() {
  background(0);

  frameRate(2000);

  console.log(frameRate());

  if(gameState==="input") {
    w.show();
    k.show();
    t.show();
    a.show();
    set.show();
    
    noStroke();   
 
    text("Amlitude(A)",width/2-190,height/2-60);
    text("omega(w)",width/2-190,height/2-20);
    text("Time(t)",width/2-190,height/2+20);
    text("Constant (k)",width/2-190,height/2+60);

    set.mouseReleased(()=>{
      gameState="wave";
    });
  }  

  if(gameState==="wave") {
   w.hide();
   k.hide();
   t.hide();
   a.hide();
   set.hide();

   line(0,height/2,width,height/2);  

   for(let x = 0;x<=width;x++) {  
    point(x,height/2+a.value()*sin(w.value()*t.value()-k.value()*x));
   }
  }
}