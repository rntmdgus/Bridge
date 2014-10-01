var a;
var r;

function setup(){
   createCanvas(1000,1000);
   a=0;
   r=0;
   size=[100,50,200];
}

function draw(){

   background(0);
   noFill();

//바닷물
   for(var i = a%800 ;i<800;i++){
      stroke(((a+i)%800)*255/800);
      line(0,i+800,1000,i+800);

   }
   for(var i = 0 ;i<a%800;i++){
      stroke(((a+i)%800)*255/800);
      line(0,i+800,1000,i+800);
   } 

//폭죽
   for(var i = 0 ; i < 2; i++){
   strokeWeight(15   *Math.random())
   stroke(Math.random()*   205,Math.random()*50,Math.random()*50);
   ellipse(100,100, r%size[i],r%size[i   ]);
   r=r+1;
   }
}
