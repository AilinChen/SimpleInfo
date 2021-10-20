var app;

//////////////////////////// home page ///////////////////////////////

function preload(){
  app = loadImage('logo.jpg');
}

function setup() {
  createCanvas(375, 734);
  noStroke();
}

function draw() {
  background(255);

  image(app,115/2,30,260,260);

////////////////////////////////////////////////////
  home1 = createElement('h3', 'Account');
  home1.position(150,321);
  home1.style('color', '#263926');
  home1.mousePressed(jumpToOne);

////////////////////////////////////////////////////
  home2 = createElement('h3', 'Add info');
  home2.position(150,391);
  home2.style('color', '#263926');
  home2.mousePressed(jumpToTwo);

////////////////////////////////////////////////////
  home3 = createElement('h3', 'View data');
  home3.position(144,462);
  home3.style('color', '#263926');
  home3.mousePressed(jumpToThree);

////////////////////////////////////////////////////
  fill("#E5F2E5");
  rect(60,330,250,50,20);
  rect(60,400,250,50,20);
  rect(60,470,250,50,20);

}

function jumpToOne() {
  window.open("indexOne.html","_self")
}

function jumpToTwo() {
  window.open("indexTwo.html","_self")
}

function jumpToThree() {
  window.open("indexThree.html","_self")
}
