//var a;
var r;
var trailX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var trailY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function setup(){
   createCanvas(1920,830);

//   a=0;
   r=0;
   size=[120,70,100];
   size1=[180,100,150];
   size2=[150,80,120];
   size3=[100,90,130];
   size4=[100,80,140];
   size5=[170,110,140];
   size6=[80,60,90];
}

function draw(){
   background(19,29,77);
   stroke(19,29,77);


   //별
   fill(Math.random()*255,Math.random()*255,Math.random()*255,70);
   rect(20,180,17,17);
   rect(120,80,15,15);
   rect(180,200,13,13);
   rect(270,100,15,15);
   rect(400,10,18,18);
   rect(500,200,12,12);
   rect(650,80,15,15);
   rect(800,350,14,14);
   rect(950,140,12,12);
   rect(1000,20,15,15);
   rect(1100,190,18,18);
   rect(1300,250,16,16);
   rect(1450,50,15,15);
   rect(1650,200,14,14);
   rect(1700,50,15,15);
   rect(1800,130,17,17);
   rect(1900,220,13,13);


   //기둥
   fill(235,142,113);
   rect(420,290,10,60);
   fill(252,176,171);
   rect(420,350,10,50);
   fill(252,220,198);
   rect(420,400,10,50);
   fill(252,112,102);
   rect(420,290,20,10);
   rect(420,490,10,80);

   //기둥2
   rect(430,290,10,60);
   fill(117,58,45);
   rect(430,350,10,50);
   fill(161,88,75);
   rect(430,400,10,50);
   fill(193,128,136);
   rect(430,290,20,10);
   fill(165,50,53);
   rect(430,490,10,80);

   //다리선1
   fill(193,191,137);
   rect(400,300,20,10);
   rect(390,310,30,10);
   rect(350,320,50,10);
   rect(330,330,50,10);
   rect(320,340,40,10);
   fill(179,151,112);
   rect(300,350,40,10);
   rect(280,360,40,10);
   rect(260,370,40,10);
   rect(220,380,50,10);
   fill(201,197,110);
   rect(190,390,60,10);
   rect(170,400,40,10);
   rect(120,410,60,10);
   rect(100,420,40,10);
   fill(169,104,113);
   rect(50,430,90,10);
   rect(20,440,120,10);

   //다리선2
   fill(193,191,137);
   rect(440,300,20,10);
   rect(440,310,30,10);
   rect(450,320,50,10);
   rect(470,330,50,10);
   rect(490,340,40,10);
   fill(179,151,112);
   rect(520,350,40,10);
   rect(540,360,40,10);
   rect(570,370,40,10);
   rect(600,380,50,10);
   fill(201,197,110);
   rect(620,390,60,10);
   rect(650,400,60,10);
   rect(670,410,60,10);
   rect(690,420,70,10);
   fill(169,104,113);
   rect(690,430,90,10);
   rect(690,440,120,10);

   //다리선3
   fill(193,191,137);
   rect(1550,330,20,10);
   rect(1530,340,40,10);
   rect(1510,350,60,10);
   rect(1490,360,60,10);
   rect(1480,370,30,10);
   fill(179,151,112);
   rect(1450,380,40,10);
   rect(1420,390,50,10);
   rect(1400,400,50,10);
   rect(1360,410,50,10);
   rect(1340,420,40,10);
   fill(169,104,113);
   rect(1270,430,80,10);
   rect(1160,440,140,10);

   //다리선4
   fill(193,191,137);
   rect(1600,330,30,10);
   rect(1600,340,60,10);
   rect(1620,350,60,10);
   rect(1640,360,60,10);
   rect(1660,370,50,10);
   rect(1690,380,50,10);
   fill(179,151,112);
   rect(1720,390,50,10);
   rect(1740,400,50,10);
   rect(1760,410,50,10);
   rect(1770,420,60,10);
   fill(169,104,113);
   rect(1770,430,80,10);
   rect(1780,440,140,10);

   //다리몸통
   fill(193,191,137);
   rect(0,450,1920,10);
   fill(179,151,112);
   rect(0,460,1920,10);
   fill(201,197,110);
   rect(0,470,1920,10);
   fill(169,104,113);
   rect(0,480,1920,10);
   rect(690,430,90,10);
   rect(690,440,120,10);

   //기둥3
   fill(185,153,90);
   rect(1570,310,10,40);
   fill(200,181,146);
   rect(1570,350,10,50);
   fill(212,187,153);
   rect(1570,400,10,50);
   rect(1570,490,10,80);

   //기둥4
   fill(229,174,98);
   rect(1580,310,10,40);
   fill(205,181,162);
   rect(1580,350,10,50);
   fill(223,200,155);
   rect(1580,400,10,50);
   rect(1580,490,10,80);

   //기둥5
   fill(163,60,47);
   rect(1590,310,10,40);
   fill(215,102,94);
   rect(1590,350,10,50);
   fill(229,144,140);
   rect(1590,400,10,50);
   rect(1590,490,10,80);

   //바다비침
   fill(Math.random()*77,Math.random()*18,Math.random()*21);
   rect(0,600,200,250);
   fill(Math.random()*57,Math.random()*45,Math.random()*70);
   rect(20,600,200,250);
   fill(Math.random()*186,Math.random()*70,Math.random()*61);
   rect(40,600,200,250);
   fill(Math.random()*160,Math.random()*89,Math.random()*66);
   rect(60,600,200,250);
   fill(Math.random()*162,Math.random()*78,Math.random()*87);
   rect(80,600,200,250);
   fill(Math.random()*88,Math.random()*68,Math.random()*105);
   rect(100,600,200,250);
   fill(Math.random()*171,Math.random()*74,Math.random()*88);
   rect(120,600,200,250);
   fill(Math.random()*88,Math.random()*29,Math.random()*45);
   rect(140,600,200,250);
   fill(Math.random()*116,Math.random()*69,Math.random()*86);
   rect(160,600,200,250);
   fill(Math.random()*156,Math.random()*56,Math.random()*114);
   rect(180,600,200,250);
   fill(Math.random()*67,Math.random()*31,Math.random()*48);
   rect(200,600,200,250);
   fill(Math.random()*101,Math.random()*31,Math.random()*72);
   rect(220,600,200,250);
   fill(Math.random()*62,Math.random()*46,Math.random()*45);
   rect(240,600,200,250);
   fill(Math.random()*92,Math.random()*50,Math.random()*78);
   rect(260,600,200,250);   
   fill(Math.random()*130,Math.random()*87,Math.random()*103);
   rect(280,600,200,250);
   fill(Math.random()*102,Math.random()*55,Math.random()*94);
   rect(300,600,200,250);
   fill(Math.random()*79,Math.random()*60,Math.random()*78);
   rect(320,600,200,250);
   fill(Math.random()*54,Math.random()*34,Math.random()*105);
   rect(340,600,200,250);
   fill(Math.random()*70,Math.random()*48,Math.random()*74);
   rect(360,600,200,250);
   fill(Math.random()*77,Math.random()*74,Math.random()*123);
   rect(380,600,200,250);
   fill(Math.random()*144,Math.random()*82,Math.random()*85);
   rect(400,600,200,250);
   fill(Math.random()*165,Math.random()*63,Math.random()*61);
   rect(420,600,200,250);
   fill(Math.random()*118,Math.random()*62,Math.random()*80);
   rect(440,600,200,250);
   fill(Math.random()*91,Math.random()*58,Math.random()*63);
   rect(460,600,200,250);
   fill(Math.random()*94,Math.random()*69,Math.random()*76);
   rect(480,600,200,250);
   fill(Math.random()*101,Math.random()*71,Math.random()*81);
   rect(500,600,200,250);
   fill(Math.random()*83,Math.random()*61,Math.random()*64);
   rect(500,600,200,250);
   fill(Math.random()*119,Math.random()*76,Math.random()*96);
   rect(520,600,200,250);
   fill(Math.random()*101,Math.random()*59,Math.random()*67);
   rect(540,600,200,250);
   fill(Math.random()*135,Math.random()*74,Math.random()*97);
   rect(560,600,200,250);
   fill(Math.random()*94,Math.random()*49,Math.random()*73);
   rect(580,600,200,250);
   fill(Math.random()*93,Math.random()*41,Math.random()*30);
   rect(600,600,200,250);
   fill(Math.random()*137,Math.random()*65,Math.random()*95);
   rect(600,600,200,250);
   fill(Math.random()*117,Math.random()*71,Math.random()*87);
   rect(620,600,200,250);
   fill(Math.random()*138,Math.random()*58,Math.random()*109);
   rect(640,600,200,250);
   fill(Math.random()*137,Math.random()*66,Math.random()*79);
   rect(660,600,200,250);
   fill(Math.random()*136,Math.random()*67,Math.random()*108);
   rect(680,600,200,250);
   fill(Math.random()*108,Math.random()*64,Math.random()*95);
   rect(700,600,200,250);
   fill(Math.random()*184,Math.random()*101,Math.random()*195);
   rect(720,600,200,250);
   fill(Math.random()*140,Math.random()*86,Math.random()*109);
   rect(740,600,200,250);
   fill(Math.random()*123,Math.random()*80,Math.random()*211);
   rect(760,600,200,250);
   fill(Math.random()*139,Math.random()*73,Math.random()*107);
   rect(780,600,200,250);
   fill(Math.random()*83,Math.random()*48,Math.random()*135);
   rect(800,600,200,250);
   fill(Math.random()*133,Math.random()*57,Math.random()*76);
   rect(820,600,200,250);
   fill(Math.random()*151,Math.random()*57,Math.random()*88);
   rect(840,600,200,250);
   fill(Math.random()*112,Math.random()*90,Math.random()*91);
   rect(860,600,200,250);
   fill(Math.random()*140,Math.random()*52,Math.random()*98);
   rect(880,600,200,250);
   fill(Math.random()*157,Math.random()*68,Math.random()*73);
   rect(900,600,200,250);
   fill(Math.random()*164,Math.random()*57,Math.random()*147);
   rect(920,600,200,250);
   fill(Math.random()*144,Math.random()*72,Math.random()*117);
   rect(940,600,200,250);
   fill(Math.random()*113,Math.random()*50,Math.random()*62);
   rect(960,600,200,250);
   fill(Math.random()*127,Math.random()*71,Math.random()*73);
   rect(980,600,200,250);
   fill(Math.random()*59,Math.random()*46,Math.random()*75);
   rect(1000,600,200,250);
   fill(Math.random()*136,Math.random()*81,Math.random()*83);
   rect(1020,600,200,250);
   fill(Math.random()*115,Math.random()*67,Math.random()*77);
   rect(1040,600,200,250);
   fill(Math.random()*127,Math.random()*71,Math.random()*78);
   rect(1060,600,200,250);
   fill(Math.random()*118,Math.random()*54,Math.random()*70);
   rect(1080,600,200,250);
   fill(Math.random()*83,Math.random()*73,Math.random()*88);
   rect(1100,600,200,250);
   fill(Math.random()*98,Math.random()*57,Math.random()*77);
   rect(1120,600,200,250);
   fill(Math.random()*156,Math.random()*106,Math.random()*96);
   rect(1140,600,200,250);
   fill(Math.random()*134,Math.random()*81,Math.random()*84);
   rect(1160,600,200,250);
   fill(Math.random()*117,Math.random()*138,Math.random()*116);
   rect(1180,600,200,250);
   fill(Math.random()*169,Math.random()*109,Math.random()*97);
   rect(1200,600,200,250);
   fill(Math.random()*126,Math.random()*99,Math.random()*91);
   rect(1220,600,200,250);
   fill(Math.random()*130,Math.random()*99,Math.random()*117);
   rect(1240,600,200,250);
   fill(Math.random()*158,Math.random()*114,Math.random()*104);
   rect(1260,600,200,250);
   fill(Math.random()*102,Math.random()*105,Math.random()*94);
   rect(1280,600,200,250);
   fill(Math.random()*135,Math.random()*120,Math.random()*106);
   rect(1300,600,200,250);
   fill(Math.random()*128,Math.random()*100,Math.random()*89);
   rect(1320,600,200,250);
   fill(Math.random()*145,Math.random()*142,Math.random()*132);
   rect(1340,600,200,250);
   fill(Math.random()*115,Math.random()*99,Math.random()*85);
   rect(1360,600,200,250);
   fill(Math.random()*163,Math.random()*148,Math.random()*117);
   rect(1380,600,200,250);
   fill(Math.random()*183,Math.random()*150,Math.random()*110);
   rect(1400,600,200,250);
   fill(Math.random()*163,Math.random()*148,Math.random()*127);
   rect(1420,600,200,250);
   fill(Math.random()*153,Math.random()*168,Math.random()*137);
   rect(1440,600,200,250);
   fill(Math.random()*182,Math.random()*158,Math.random()*117);
   rect(1460,600,200,250);
   fill(Math.random()*170,Math.random()*173,Math.random()*139);
   rect(1480,600,200,250);
   fill(Math.random()*115,Math.random()*99,Math.random()*85);
   rect(1500,600,200,250);
   fill(Math.random()*163,Math.random()*148,Math.random()*117);
   rect(1520,600,200,250);
   fill(Math.random()*183,Math.random()*150,Math.random()*110);
   rect(1540,600,200,250);
   fill(Math.random()*254,Math.random()*190,Math.random()*123);
   rect(1560,600,200,250);
   fill(Math.random()*253,Math.random()*212,Math.random()*115);
   rect(1580,600,200,250);
   fill(Math.random()*252,Math.random()*159,Math.random()*106);
   rect(1600,600,200,250);
   fill(Math.random()*170,Math.random()*173,Math.random()*139);
   rect(1620,600,200,250);
   fill(Math.random()*195,Math.random()*170,Math.random()*113);
   rect(1640,600,200,250);
   fill(Math.random()*150,Math.random()*130,Math.random()*100);
   rect(1660,600,200,250);
   fill(Math.random()*170,Math.random()*173,Math.random()*139);
   rect(1680,600,200,250);
   fill(Math.random()*195,Math.random()*170,Math.random()*113);
   rect(1700,600,200,250);
   fill(Math.random()*126,Math.random()*110,Math.random()*80);
   rect(1720,600,200,250);
   fill(Math.random()*146,Math.random()*124,Math.random()*87);
   rect(1740,600,200,250);
   fill(Math.random()*159,Math.random()*119,Math.random()*78);
   rect(1760,600,200,250);
   fill(Math.random()*145,Math.random()*125,Math.random()*100);
   rect(1780,600,200,250);
   fill(Math.random()*150,Math.random()*122,Math.random()*89);
   rect(1800,600,200,250);
   fill(Math.random()*137,Math.random()*108,Math.random()*82);
   rect(1820,600,200,250);
   fill(Math.random()*178,Math.random()*145,Math.random()*111);
   rect(1840,600,200,250);
   fill(Math.random()*122,Math.random()*93,Math.random()*9);
   rect(1860,600,200,250);
   fill(Math.random()*116,Math.random()*85,Math.random()*71);
   rect(1880,600,200,250);
   fill(Math.random()*98,Math.random()*101,Math.random()*80);
   rect(1900,600,200,250);


//폭죽 strokeWeight 두께, stroke 색상, ellipse 위치

   noFill();
   for(var i = 0 ; i < 2; i++){
   strokeWeight(30*Math.random())
   stroke(Math.random()*205,Math.random()*150,Math.random()*150);
   ellipse(100,100, r%size[i],r%size[i]);
   r=r+1;
   }

   for(var i = 0 ; i < 2; i++){
   strokeWeight(30*Math.random())
   stroke(Math.random()*255,Math.random()*255,Math.random()*193);
   ellipse(450,150, r%size1[i],r%size1[i]);
   r=r+1;
   }

   for(var i = 0 ; i < 2; i++){
   strokeWeight(30*Math.random())
   stroke(Math.random()*235,Math.random()*240,Math.random()*190);
   ellipse(800,200, r%size2[i],r%size2[i]);
   r=r+1;
   }

   for(var i = 0 ; i < 2; i++){
   strokeWeight(30*Math.random())
   stroke(Math.random()*235,Math.random()*250,Math.random()*230);
   ellipse(1100,50, r%size3[i],r%size3[i]);
   r=r+1;
   }

   for(var i = 0 ; i < 2; i++){
   strokeWeight(30*Math.random())
   stroke(Math.random()*245,Math.random()*215,Math.random()*178);
   ellipse(1500,120, r%size4[i],r%size4[i]);
   r=r+1;
   }

   for(var i = 0 ; i < 2; i++){
   strokeWeight(30*Math.random())
   stroke(Math.random()*255,Math.random()*235,Math.random()*180);
   ellipse(1800,250, r%size5[i],r%size5[i]);
   r=r+1;
   }

   for(var i = 0 ; i < 2; i++){
   strokeWeight(30*Math.random())
   stroke(Math.random()*245,Math.random()*185,Math.random()*153);
   ellipse(1150,350, r%size6[i],r%size6[i]);
   r=r+1;
   }



   // mouse ellipse
   ellipse(mouseX, mouseY, 3, 3);
   // trail ellopse #0
   trailX[0] = (mouseX + trailX[0] * 3) / 4;
   trailY[0] = (mouseY + trailY[0] * 3) / 4;
   ellipse(trailX[0], trailY[0], 3, 3);

   for (var i = 1; i < 10; i = i +1)
   {
      trailX[i] = (trailX[i-1] + trailX[i] * 5) / 6;
      trailY[i] = (trailY[i-1] + trailY[i] * 5) / 6;
      ellipse(trailX[i], trailY[i], 4, 4);
   }
}






//바닷물
/*      for(var i = a%400 ;i<500;i++){
      stroke(((a+i)%500)*50/500);
      line(0,i+500,1920,i+500);

   }

   for(var i = 0 ;i<a%500;i++){
      stroke(((a+i)%500)*50/500);
      line(0,i+500,1920,i+500);

   }

a++;   
*/


