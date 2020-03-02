var fluteC
var fluteD
var fluteE
var fluteA
var fluteB
var fluteCS
var fluteDS
var fluteFS
var fluteGS
var fluteTCS
var fluteBGS
var fluteBBS

var rectY1 = 0;
var rectSpeed1 = 0;



function preload() {
  soundFormats("mp3");
  // fluteC = loadSound("fluteC.mp3");
  // fluteC = loadSound("fluteC_2.mp3");
  fluteC = loadSound("fluteC_3.mp3");
  // fluteD = loadSound("fluteD.mp3");
  fluteD = loadSound("fluteD_2.mp3");
  fluteE = loadSound("fluteE.mp3");
  fluteA = loadSound("fluteA.mp3");
  fluteB = loadSound("fluteB.mp3");
  fluteCS = loadSound("fluteCS.mp3");
  fluteDS = loadSound("fluteDS.mp3");
  fluteFS = loadSound("fluteFS.mp3");
  fluteGS = loadSound("fluteGS.mp3");
  fluteTCS = loadSound("fluteTCS.mp3");
  fluteBGS = loadSound("fluteBGS.mp3");
  fluteBBS = loadSound("fluteBBS.mp3");
}


function setup() {
  createCanvas(700, 500);
}


function draw() {
  background(255);

  //  if (keyIsPressed (32)) {
  //   rectSpeed1 = 0;
  // }

  fill(230); //beat
  noStroke();

  rect(350, rectY1 - 4625, 5, 4680);
  rect(523, rectY1 - 4625, 5, 4680);

  fill(105, 174, 195); //beat
  rect(390, rectY1 - 120, 10, 120); //5     //1. 7 (4）
  rect(417, rectY1 - 120, 10, 120); //4
  rect(450, rectY1 - 120, 10, 120); //3
  rect(470, rectY1 - 120, 10, 120); //2
  rect(497, rectY1 - 120, 10, 120); //1

  rect(370, rectY1 - 190, 10, 60); //6     //1. 5 (2）

  rect(390, rectY1 - 260, 10, 60); //5     //1. 3 (2）
  rect(417, rectY1 - 260, 10, 60); //4 
  rect(450, rectY1 - 260, 10, 60); //3

  rect(417, rectY1 - 330, 10, 60); //4     //1. 4 (2）
  rect(450, rectY1 - 330, 10, 60); //3 

  rect(390, rectY1 - 400, 10, 60); //5     //1. 2 (2）
  rect(417, rectY1 - 400, 10, 60); //4
  rect(450, rectY1 - 400, 10, 60); //3
  rect(470, rectY1 - 400, 10, 60); //2

  rect(370, rectY1 - 530, 10, 120); //6     //1. 1 (4）
  rect(390, rectY1 - 530, 10, 120); //5
  rect(417, rectY1 - 530, 10, 120); //4
  rect(450, rectY1 - 530, 10, 120); //3 
  rect(470, rectY1 - 530, 10, 120); //2
  rect(497, rectY1 - 530, 10, 120); //1



  rect(390, rectY1 - 620, 10, 60); //5     //2. 3 (2）
  rect(417, rectY1 - 620, 10, 60); //4
  rect(450, rectY1 - 620, 10, 60); //3

  rect(417, rectY1 - 660, 10, 30); //4     //2. 4 (1）
  rect(450, rectY1 - 660, 10, 30); //3

  rect(370, rectY1 - 700, 10, 30); //6     //2. 5 (1）

  rect(390, rectY1 - 770, 10, 60); //5     //2. 6 (2）
  rect(417, rectY1 - 770, 10, 60); //4

  rect(390, rectY1 - 840, 10, 60); //5     //2. 2 (2）
  rect(417, rectY1 - 840, 10, 60); //4
  rect(450, rectY1 - 840, 10, 60); //3
  rect(470, rectY1 - 840, 10, 60); //2

  rect(390, rectY1 - 1090, 10, 240); //5     //2. 3 (8）
  rect(417, rectY1 - 1090, 10, 240); //4
  rect(450, rectY1 - 1090, 10, 240); //3



  rect(390, rectY1 - 1240, 10, 120); //5     //3. 7 (4）
  rect(417, rectY1 - 1240, 10, 120); //4
  rect(450, rectY1 - 1240, 10, 120); //3
  rect(470, rectY1 - 1240, 10, 120); //2
  rect(497, rectY1 - 1240, 10, 120); //1

  rect(370, rectY1 - 1310, 10, 60); //6     //3. 5 (2）

  rect(390, rectY1 - 1380, 10, 60); //5     //3. 3 (2）
  rect(417, rectY1 - 1380, 10, 60); //4 
  rect(450, rectY1 - 1380, 10, 60); //3

  rect(417, rectY1 - 1450, 10, 60); //4     //3. 4 (2）
  rect(450, rectY1 - 1450, 10, 60); //3 

  rect(390, rectY1 - 1520, 10, 60); //5     //3. 3 (2）
  rect(417, rectY1 - 1520, 10, 60); //4
  rect(450, rectY1 - 1520, 10, 60); //3

  rect(390, rectY1 - 1590, 10, 60); //5     //3. 2 (2）
  rect(417, rectY1 - 1590, 10, 60); //4
  rect(450, rectY1 - 1590, 10, 60); //3
  rect(470, rectY1 - 1590, 10, 60); //2

  rect(370, rectY1 - 1630, 10, 30); //6     //3. 1 (1）
  rect(390, rectY1 - 1630, 10, 30); //5
  rect(417, rectY1 - 1630, 10, 30); //4
  rect(450, rectY1 - 1630, 10, 30); //3 
  rect(470, rectY1 - 1630, 10, 30); //2
  rect(497, rectY1 - 1630, 10, 30); //1

  rect(390, rectY1 - 1670, 10, 30); //5     //3. 2 (1）
  rect(417, rectY1 - 1670, 10, 30); //4
  rect(450, rectY1 - 1670, 10, 30); //3
  rect(470, rectY1 - 1670, 10, 30); //2

  rect(390, rectY1 - 1770, 10, 90); //5     //4. 3 (3）
  rect(417, rectY1 - 1770, 10, 90); //4
  rect(450, rectY1 - 1770, 10, 90); //3



  rect(370, rectY1 - 1820, 10, 30); //6     //4. 5 (1）

  rect(390, rectY1 - 1860, 10, 30); //5     //4. 6 (1）
  rect(417, rectY1 - 1860, 10, 30); //4

  rect(370, rectY1 - 1900, 10, 30); //6     //4. 5 (1）

  rect(417, rectY1 - 1940, 10, 30); //4     //4. 4 (1）
  rect(450, rectY1 - 1940, 10, 30); //3 

  rect(390, rectY1 - 1980, 10, 30); //5     //4. 3 (1）
  rect(417, rectY1 - 1980, 10, 30); //4
  rect(450, rectY1 - 1980, 10, 30); //3

  rect(417, rectY1 - 2170, 10, 180); //4     //4. 4 (6）
  rect(450, rectY1 - 2170, 10, 180); //3 



  rect(370, rectY1 - 2230, 10, 30); //6     //4. 5 (1）

  rect(390, rectY1 - 2270, 10, 30); //5     //4. 6 (1）
  rect(417, rectY1 - 2270, 10, 30); //4

  rect(390, rectY1 - 2370, 10, 90); //5     //5. 7 (3）
  rect(417, rectY1 - 2370, 10, 90); //4
  rect(450, rectY1 - 2370, 10, 90); //3
  rect(470, rectY1 - 2370, 10, 90); //2
  rect(497, rectY1 - 2370, 10, 90); //1

  rect(390, rectY1 - 2410, 10, 30); //5     //5. 6 (1）
  rect(417, rectY1 - 2410, 10, 30); //4

  rect(370, rectY1 - 2450, 10, 30); //6     //5. 5 (1）

  rect(417, rectY1 - 2490, 10, 30); //4     //5. 4 (1）
  rect(450, rectY1 - 2490, 10, 30); //3 

  rect(370, rectY1 - 2530, 10, 30); //6     //5. 5 (1）

  rect(390, rectY1 - 2570, 10, 30); //5     //5. 3 (1）
  rect(417, rectY1 - 2570, 10, 30); //4
  rect(450, rectY1 - 2570, 10, 30); //3

  rect(370, rectY1 - 2640, 10, 60); //6     //5. 5 (2）

  rect(417, rectY1 - 2710, 10, 60); //4     //5. 10 (2）
  rect(450, rectY1 - 2710, 10, 60); //3
  rect(470, rectY1 - 2710, 10, 60); //2

  rect(370, rectY1 - 2840, 10, 120); //6     //5. 9 (4）
  rect(390, rectY1 - 2840, 10, 120); //5
  rect(417, rectY1 - 2840, 10, 120); //4
  rect(450, rectY1 - 2840, 10, 120); //3 



  rect(370, rectY1 - 2900, 10, 30); //6     //6. 5 (1）

  rect(390, rectY1 - 2940, 10, 30); //5     //6. 6 (1）
  rect(417, rectY1 - 2940, 10, 30); //4

  rect(390, rectY1 - 2980, 10, 30); //5     //6. 7 (1）
  rect(417, rectY1 - 2980, 10, 30); //4
  rect(450, rectY1 - 2980, 10, 30); //3
  rect(470, rectY1 - 2980, 10, 30); //2
  rect(497, rectY1 - 2980, 10, 30); //1

  rect(370, rectY1 - 3020, 10, 30); //6     //6. 8 (1）
  rect(390, rectY1 - 3020, 10, 30); //5
  rect(417, rectY1 - 3020, 10, 30); //4
  rect(450, rectY1 - 3020, 10, 30); //3 
  rect(470, rectY1 - 3020, 10, 30); //2

  rect(370, rectY1 - 3090, 10, 60); //6     //6. 9 (2）
  rect(390, rectY1 - 3090, 10, 60); //5
  rect(417, rectY1 - 3090, 10, 60); //4
  rect(450, rectY1 - 3090, 10, 60); //3 

  rect(390, rectY1 - 3160, 10, 60); //5     //6. 6 (2）
  rect(417, rectY1 - 3160, 10, 60); //4

  rect(390, rectY1 - 3320, 10, 150); //5     //6. 7 (5）
  rect(417, rectY1 - 3320, 10, 150); //4
  rect(450, rectY1 - 3320, 10, 150); //3
  rect(470, rectY1 - 3320, 10, 150); //2
  rect(497, rectY1 - 3320, 10, 150); //1



  rect(390, rectY1 - 3380, 10, 30); //5     //6. 6 (1）
  rect(417, rectY1 - 3380, 10, 30); //4

  rect(390, rectY1 - 3420, 10, 30); //5     //6. 7 (1）
  rect(417, rectY1 - 3420, 10, 30); //4
  rect(450, rectY1 - 3420, 10, 30); //3
  rect(470, rectY1 - 3420, 10, 30); //2
  rect(497, rectY1 - 3420, 10, 30); //1

  rect(370, rectY1 - 3460, 10, 30); //6     //6. 9 (1）
  rect(390, rectY1 - 3460, 10, 30); //5
  rect(417, rectY1 - 3460, 10, 30); //4
  rect(450, rectY1 - 3460, 10, 30); //3 

  rect(370, rectY1 - 3620, 10, 150); //6     //7. 5 (5）



  rect(417, rectY1 - 3670, 10, 30); //4     //7. 4 (1）
  rect(450, rectY1 - 3670, 10, 30); //3 

  rect(370, rectY1 - 3710, 10, 30); //6     //7. 5 (1）

  rect(390, rectY1 - 3750, 10, 30); //5     //7. 7 (1）
  rect(417, rectY1 - 3750, 10, 30); //4
  rect(450, rectY1 - 3750, 10, 30); //3
  rect(470, rectY1 - 3750, 10, 30); //2
  rect(497, rectY1 - 3750, 10, 30); //1

  rect(390, rectY1 - 3910, 10, 150); //5     //7. 3 (5）
  rect(417, rectY1 - 3910, 10, 150); //4
  rect(450, rectY1 - 3910, 10, 150); //3



  rect(390, rectY1 - 3970, 10, 30); //5    //7. 2 (1）
  rect(417, rectY1 - 3970, 10, 30); //4
  rect(450, rectY1 - 3970, 10, 30); //3
  rect(470, rectY1 - 3970, 10, 30); //2

  rect(370, rectY1 - 4010, 10, 30); //6     //7. 9 (1）
  rect(390, rectY1 - 4010, 10, 30); //5
  rect(417, rectY1 - 4010, 10, 30); //4
  rect(450, rectY1 - 4010, 10, 30); //3 

  rect(390, rectY1 - 4050, 10, 30); //5     //7. 7 (1）
  rect(417, rectY1 - 4050, 10, 30); //4
  rect(450, rectY1 - 4050, 10, 30); //3
  rect(470, rectY1 - 4050, 10, 30); //2
  rect(497, rectY1 - 4050, 10, 30); //1

  rect(370, rectY1 - 4150, 10, 90); //6     //8. 5 (3）



  rect(390, rectY1 - 4210, 10, 30); //5     //8. 6 (1）
  rect(417, rectY1 - 4210, 10, 30); //4

  rect(390, rectY1 - 4250, 10, 30); //5     //8. 7 (1）
  rect(417, rectY1 - 4250, 10, 30); //4
  rect(450, rectY1 - 4250, 10, 30); //3
  rect(470, rectY1 - 4250, 10, 30); //2
  rect(497, rectY1 - 4250, 10, 30); //1

  rect(390, rectY1 - 4290, 10, 30); //5     //8. 6 (1）
  rect(417, rectY1 - 4290, 10, 30); //4

  rect(390, rectY1 - 4330, 10, 30); //5     //8. 7 (1）
  rect(417, rectY1 - 4330, 10, 30); //4
  rect(450, rectY1 - 4330, 10, 30); //3
  rect(470, rectY1 - 4330, 10, 30); //2
  rect(497, rectY1 - 4330, 10, 30); //1

  rect(370, rectY1 - 4370, 10, 30); //6     //8. 9 (1）
  rect(390, rectY1 - 4370, 10, 30); //5
  rect(417, rectY1 - 4370, 10, 30); //4
  rect(450, rectY1 - 4370, 10, 30); //3 

  rect(417, rectY1 - 4620, 10, 240); //4     //8. 10 (8）
  rect(450, rectY1 - 4620, 10, 240); //3
  rect(470, rectY1 - 4620, 10, 240); //2

  rectY1 = rectY1 + rectSpeed1;



  noStroke(); //draw flute
  fill(50);
  rect(70, 160, 560, 30);
  ellipse(70, 175, 20, 30);
  ellipse(630, 175, 10, 30);
  stroke(255);
  strokeWeight(1);
  fill(100);
  ellipse(630, 175, 5, 15);
  stroke(0);
  strokeWeight(2);
  fill(255);
  circle(240, 175, 10);
  circle(310, 175, 10);
  circle(375, 175, 10); //6
  circle(395, 175, 10); //5
  circle(422, 175, 10); //4
  circle(455, 175, 10); //3
  circle(475, 175, 10); //2
  circle(502, 175, 10); //1
  circle(570, 175, 10);
  circle(590, 175, 10);
  //grey relfection
  stroke(100);
  strokeWeight(4);
  line(80, 170, 100, 170);
  line(120, 170, 125, 170);
  line(140, 170, 200, 170);
  line(260, 170, 280, 170);
  //red thin line
  stroke(200, 10, 10);
  strokeWeight(2);
  line(125, 175, 160, 175);
  line(135, 180, 170, 180);
  //red thick ChenQing
  strokeWeight(10);
  line(530, 175, 542, 175);
  //black strings
  strokeWeight(2);
  noFill();
  stroke(0);
  bezier(530, 190, 540, 210, 525, 225, 530, 260);
  bezier(535, 190, 539, 210, 530, 225, 532, 260);
  //pendants
  noStroke();
  fill(230, 222, 222);
  circle(530, 263, 14);
  fill(220, 24, 24); //red
  circle(530, 278, 18);
  fill(230, 230, 222); //pink grey
  circle(531, 299, 25);
  fill(60); //dark grey
  circle(531, 317, 14);
  //   white highlight
  fill(255);
  circle(528.5, 260.5, 4);
  circle(527.5, 275, 4);
  circle(527, 294, 5);
  circle(529, 314, 3);

  stroke(180, 24, 24); //red fringe
  strokeWeight(1);
  noFill();
  bezier(531, 322, 520, 340, 531, 400, 520, 450);
  bezier(531, 322, 524, 340, 531, 400, 530, 450);
  bezier(531, 322, 506, 340, 531, 400, 520, 450);
  bezier(531, 322, 510, 340, 531, 400, 520, 420);
  bezier(531, 322, 520, 360, 531, 400, 520, 450);
  bezier(531, 322, 540, 340, 531, 400, 540, 430);
  bezier(531, 322, 550, 340, 531, 400, 540, 450);
  bezier(531, 322, 532, 340, 531, 400, 530, 457);
  bezier(531, 322, 535, 340, 531, 400, 534, 462);

  if (keyIsDown(51) && keyIsDown(52) && keyIsDown(53) && !keyIsDown(55) && !keyIsDown(56) && !keyIsDown(57)) {
    fluteC.play();
    // fluteC.stop();
    fluteD.stop();
    fluteE.stop();
    fluteA.stop();
    fluteB.stop();
    fluteCS.stop();
    fluteDS.stop();
    fluteFS.stop();
    fluteGS.stop();
    fluteTCS.stop();
    fluteBGS.stop();
    fluteBBS.stop();
    fill(161, 146, 146);
    circle(375, 175, 10); //6
    circle(395, 175, 10); //5
    circle(422, 175, 10); //4
  }

  if (keyIsDown(51) && keyIsDown(52) && !keyIsDown(53) && !keyIsDown(55) && !keyIsDown(56) && !keyIsDown(57)) {
    fluteD.play();
    fluteC.stop();
    // fluteD.stop();
    fluteE.stop();
    fluteA.stop();
    fluteB.stop();
    fluteCS.stop();
    fluteDS.stop();
    fluteFS.stop();
    fluteGS.stop();
    fluteTCS.stop();
    fluteBGS.stop();
    fluteBBS.stop();
    fill(161, 146, 146);
    circle(375, 175, 10); //6
    circle(395, 175, 10); //5
  }

  if (keyIsDown(51) && !keyIsDown(52) && !keyIsDown(53) && !keyIsDown(55) && !keyIsDown(56) && !keyIsDown(57)) {
    fluteE.play();
    fluteC.stop();
    fluteD.stop();
    // fluteE.stop();
    fluteA.stop();
    fluteB.stop();
    fluteCS.stop();
    fluteDS.stop();
    fluteFS.stop();
    fluteGS.stop();
    fluteTCS.stop();
    fluteBGS.stop();
    fluteBBS.stop();
    fill(161, 146, 146);
    circle(375, 175, 10); //6
  }

  if (keyIsDown(51) && keyIsDown(52) && keyIsDown(53) && keyIsDown(55) && keyIsDown(56) && !keyIsDown(57)) {
    fluteA.play();
    fluteC.stop();
    fluteD.stop();
    fluteE.stop();
    // fluteA.stop();
    fluteB.stop();
    fluteCS.stop();
    fluteDS.stop();
    fluteFS.stop();
    fluteGS.stop();
    fluteTCS.stop();
    fluteBGS.stop();
    fluteBBS.stop();
    fill(161, 146, 146);
    circle(375, 175, 10); //6
    circle(395, 175, 10); //5
    circle(422, 175, 10); //4
    circle(455, 175, 10); //3
    circle(475, 175, 10); //2
  }

  if (keyIsDown(51) && keyIsDown(52) && keyIsDown(53) && keyIsDown(55) && !keyIsDown(56) && !keyIsDown(57)) {
    fluteB.play();
    fluteC.stop();
    fluteD.stop();
    fluteE.stop();
    fluteA.stop();
    // fluteB.stop();
    fluteCS.stop();
    fluteDS.stop();
    fluteFS.stop();
    fluteGS.stop();
    fluteTCS.stop();
    fluteBGS.stop();
    fluteBBS.stop();
    fill(161, 146, 146);
    circle(375, 175, 10); //6
    circle(395, 175, 10); //5
    circle(422, 175, 10); //4
    circle(455, 175, 10); //3
  }

  if (!keyIsDown(51) && keyIsDown(52) && keyIsDown(53) && keyIsDown(55) && !keyIsDown(56) && !keyIsDown(57)) {
    fluteCS.play();
    fluteC.stop();
    fluteD.stop();
    fluteE.stop();
    fluteA.stop();
    fluteB.stop();
    // fluteCS.stop();
    fluteDS.stop();
    fluteFS.stop();
    fluteGS.stop();
    fluteTCS.stop();
    fluteBGS.stop();
    fluteBBS.stop();
    fill(161, 146, 146);
    circle(395, 175, 10); //5
    circle(422, 175, 10); //4
    circle(455, 175, 10); //3
  }

  if (!keyIsDown(51) && !keyIsDown(52) && keyIsDown(53) && keyIsDown(55) && !keyIsDown(56) && !keyIsDown(57)) {
    fluteDS.play();
    fluteC.stop();
    fluteD.stop();
    fluteE.stop();
    fluteA.stop();
    fluteB.stop();
    fluteCS.stop();
    // fluteDS.stop();
    fluteFS.stop();
    fluteGS.stop();
    fluteTCS.stop();
    fluteBGS.stop();
    fluteBBS.stop();
    fill(161, 146, 146);
    circle(422, 175, 10); //4
    circle(455, 175, 10); //3
  }

  if (!keyIsDown(51) && keyIsDown(52) && keyIsDown(53) && !keyIsDown(55) && !keyIsDown(56) && !keyIsDown(57)) {
    fluteFS.play();
    fluteC.stop();
    fluteD.stop();
    fluteE.stop();
    fluteA.stop();
    fluteB.stop();
    fluteCS.stop();
    fluteDS.stop();
    // fluteFS.stop();
    fluteGS.stop();
    fluteTCS.stop();
    fluteBGS.stop();
    fluteBBS.stop();
    fill(161, 146, 146);
    circle(395, 175, 10); //5
    circle(422, 175, 10); //4
  }

  if (!keyIsDown(51) && keyIsDown(52) && keyIsDown(53) && keyIsDown(55) && keyIsDown(56) && keyIsDown(57)) {
    fluteGS.play();
    fluteC.stop();
    fluteD.stop();
    fluteE.stop();
    fluteA.stop();
    fluteB.stop();
    fluteCS.stop();
    fluteDS.stop();
    fluteFS.stop();
    // fluteGS.stop();
    fluteTCS.stop();
    fluteBGS.stop();
    fluteBBS.stop();
    fill(161, 146, 146);
    circle(395, 175, 10); //5
    circle(422, 175, 10); //4
    circle(455, 175, 10); //3
    circle(475, 175, 10); //2
    circle(502, 175, 10); //1
  }

  if (!keyIsDown(51) && !keyIsDown(52) && keyIsDown(53) && keyIsDown(55) && keyIsDown(56) && !keyIsDown(57)) {
    fluteTCS.play();
    fluteC.stop();
    fluteD.stop();
    fluteE.stop();
    fluteA.stop();
    fluteB.stop();
    fluteCS.stop();
    fluteDS.stop();
    fluteFS.stop();
    fluteGS.stop();
    // fluteTCS.stop();
    fluteBGS.stop();
    fluteBBS.stop();
    fill(161, 146, 146);
    circle(422, 175, 10); //4
    circle(455, 175, 10); //3
    circle(475, 175, 10); //2
  }

  if (keyIsDown(51) && keyIsDown(52) && keyIsDown(53) && keyIsDown(55) && keyIsDown(56) && keyIsDown(57)) {
    fluteBGS.play();
    fluteC.stop();
    fluteD.stop();
    fluteE.stop();
    fluteA.stop();
    fluteB.stop();
    fluteCS.stop();
    fluteDS.stop();
    fluteFS.stop();
    fluteGS.stop();
    fluteTCS.stop();
    // fluteBGS.stop();
    fluteBBS.stop();
    fill(161, 146, 146);
    circle(375, 175, 10); //6
    circle(395, 175, 10); //5
    circle(422, 175, 10); //4
    circle(455, 175, 10); //3
    circle(475, 175, 10); //2
    circle(502, 175, 10); //1
  }

  if (!keyIsDown(51) && keyIsDown(52) && keyIsDown(53) && keyIsDown(55) && keyIsDown(56) && !keyIsDown(57)) {
    fluteBBS.play();
    fluteC.stop();
    fluteD.stop();
    fluteE.stop();
    fluteA.stop();
    fluteB.stop();
    fluteCS.stop();
    fluteDS.stop();
    fluteFS.stop();
    fluteGS.stop();
    fluteTCS.stop();
    fluteBGS.stop();
    // fluteBBS.stop();
    fill(161, 146, 146);
    circle(395, 175, 10); //5
    circle(422, 175, 10); //4
    circle(455, 175, 10); //3
    circle(475, 175, 10); //2
  }

  fill(170, 20, 20); //red button
  circle(30, 30, 30);


  // fluteC.stop();
  // fluteD.stop();
  // fluteE.stop();
  // fluteA.stop();
  // fluteB.stop();
  // fluteCS.stop();
  // fluteDS.stop();
  // fluteFS.stop();
  // fluteGS.stop();
  // fluteTCS.stop();
  // fluteBGS.stop();
  // fluteBBS.stop();


  // fill(161, 146, 146);
  // circle(375, 175, 10); //6
  // circle(395, 175, 10); //5
  // circle(422, 175, 10); //4
  // circle(455, 175, 10); //3
  // circle(475, 175, 10); //2
  // circle(502, 175, 10); //1

  if (rectY1 > 4900) {
    rectY1 = 0;
    rectSpeed1 = 0;
  }

}

function mouseClicked() {
  rectSpeed1 = 1;
}

function doubleClicked() {
  rectSpeed1 = 0;
}
