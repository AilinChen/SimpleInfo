var ac1,ac2,ac3,ac4;

//////////////////////////// account page ///////////////////////////////

function preload(){}

function setup() {
  createCanvas(375, 734);
  noStroke();



}

function draw() {
  background(255);

  header = createElement('h2', 'Account');
  header.position(139,5);

  back = createElement('h3', 'Back');
  back.position(20,10);
  back.style('color','#657467');
  back.mousePressed(jumpToHome);

////////////////////////////////////////////////////
  ac1 = createElement('h3', 'Save');
  ac1.position(165,160);

  ac2 = createElement('h3', 'Upload');
  ac2.position(155,230);

  ac3 = createElement('h3', 'Explore');
  ac3.position(155,300);

  ac4 = createElement('h3', 'Send to');
  ac4.position(155,370);

  ac5 = createElement('h3', 'Setting');
  ac5.position(157,440);

////////////////////////////////////////////////////
  fill('#E5F2E5');
  rect(60,170,250,50,20);
  rect(60,240,250,50,20);
  rect(60,310,250,50,20);
  rect(60,380,250,50,20);
  rect(60,450,250,50,20);

  // for (var i=0, i<5, i++){
  //   rect(60,170+70*i,250,50,20);
  // }

}

function jumpToHome() {
  window.open("index.html","_self")
}
