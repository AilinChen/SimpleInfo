//var title = [60,192,324,456,588];
//var tbg = [color('#D8C5B2'), color('#D8B2B2'), color('#D8B2D8'), color('#B2B2D8'), color('#B2C5D8')];

var cData;

//////////////////////////// view page ///////////////////////////////

function preload(){
  cData = loadJSON("patients.json")
}

function setup() {
  createCanvas(375, 734);
  noStroke();

//////////////////////////////////////////////////////////////
  var y1 = 85;
  var g1 = cData.g1;
  for (var i = 0; i < g1.length; i++) {
    g1n = createElement('p', g1[i].name);
    g1n.position(8,y1+16*i);

    g1g = createElement('p', g1[i].gender);
    g1g.position(72,y1+16*i);

    g1a = createElement('p', g1[i].age);
    g1a.position(102,y1+16*i);

    g1l = createElement('p', g1[i].language);
    g1l.position(172,y1+16*i);

    g1s = createElement('p', g1[i].special);
    g1s.position(247,y1+16*i);
  }

  var y2 = y1+132;
  var g2 = cData.g2;
  for (var i = 0; i < g2.length; i++) {
    g2n = createElement('p', g2[i].name);
    g2n.position(8,y2+16*i);

    g2g = createElement('p', g2[i].gender);
    g2g.position(72,y2+16*i);

    g2a = createElement('p', g2[i].age);
    g2a.position(102,y2+16*i);

    g2l = createElement('p', g2[i].language);
    g2l.position(172,y2+16*i);

    g2s = createElement('p', g2[i].special);
    g2s.position(247,y2+16*i);
  }

  var y3 = y2+132;
  var g3 = cData.g3;
  for (var i = 0; i < g3.length; i++) {
    g3n = createElement('p', g3[i].name);
    g3n.position(8,y3+16*i);

    g3g = createElement('p', g3[i].gender);
    g3g.position(72,y3+16*i);

    g3a = createElement('p', g3[i].age);
    g3a.position(102,y3+16*i);

    g3l = createElement('p', g3[i].language);
    g3l.position(172,y3+16*i);

    g3s = createElement('p', g3[i].special);
    g3s.position(247,y3+16*i);
  }

  var y4 = y3+132;
  var g4 = cData.g4;
  for (var i = 0; i < g4.length; i++) {
    g4n = createElement('p', g4[i].name);
    g4n.position(8,y4+16*i);

    g4g = createElement('p', g4[i].gender);
    g4g.position(72,y4+16*i);

    g4a = createElement('p', g4[i].age);
    g4a.position(102,y4+16*i);

    g4l = createElement('p', g4[i].language);
    g4l.position(172,y4+16*i);

    g4s = createElement('p', g4[i].special);
    g4s.position(247,y4+16*i);
  }

  var y5 = y4+132;
  var g5 = cData.g5;
  for (var i = 0; i < g5.length; i++) {
    g5n = createElement('p', g5[i].name);
    g5n.position(8,y5+16*i);

    g5g = createElement('p', g5[i].gender);
    g5g.position(72,y5+16*i);

    g5a = createElement('p', g5[i].age);
    g5a.position(102,y5+16*i);

    g5l = createElement('p', g5[i].language);
    g5l.position(172,y5+16*i);

    g5s = createElement('p', g5[i].special);
    g5s.position(247,y5+16*i);
  }

}

function draw() {
  background(255);

  header = createElement('h2', 'View data');
  header.position(135,5);
  header.style('color','#263926');

  back = createElement('h3', 'Back');
  back.position(20,10);
  back.style('color','#657467');
  back.mousePressed(jumpToHome);

  //////////////////////////////////////////////////
  var spx = 90;

  sort1 = createElement('h3', 'age under 1');
  sort1.position(spx,55);

  sort2 = createElement('h3', 'age 1 - 3');
  sort2.position(spx,187);

  sort3 = createElement('h3', 'age 4 - 11');
  sort3.position(spx,320);

  sort4 = createElement('h3', 'age 12 - 17');
  sort4.position(spx,451);

  sort5 = createElement('h3', 'age 18 - 21 (or older)');
  sort5.position(spx,582);

//////////////////////////////////////////////////
  fill('#D8C5B2');
  rect(0,70,375,32);

  fill('#D8B2B2');
  rect(0,202,375,32);

  fill('#D8B2D8');
  rect(0,334,375,32);

  fill('#B2B2D8');
  rect(0,466,375,32);

  fill('#B2C5D8');
  rect(0,598,375,32);

//////////////////////////////////////////////////
  fill('#EBE2D8');
  rect(0,102,375,100);

  fill('#EBD8D8');
  rect(0,234,375,100);

  fill('#EBD8EB');
  rect(0,366,375,100);

  fill('#D8D8EB');
  rect(0,498,375,100);

  fill('#D8E2EB');
  rect(0,630,375,100);

  // for(var j=0; j<title.length; j++){
  //   fill(255);
  //   rect(0,title[j],375,32);
  // }


  // for(var i=0; i<5; i++){
  //   fill(tbg[i],100,100);
  //   //for(var j=0; j<title.length; j++){
  //     rect(0,title[i],375,32);
  //     //rect(0,title[j],375,32);
  //   //}
  // }


}

function jumpToHome() {
  window.open("index.html","_self")
}
