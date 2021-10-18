//////////////////////////// add info page ///////////////////////////////

function preload(){}

function setup() {
  createCanvas(375, 734);
  noStroke();

  var infopx = 80;
  var infopy = 90;

  var inputw = 200;
  var inputh = 20;

  var inputpx = 145/2;
  var inputpy = 140;

  input1 = createInput('');
  input1.position(inputpx,inputpy);
  input1.size(inputw, inputh);

  input3 = createInput('');
  input3.position(inputpx, inputpy+70);
  input3.size(inputw, inputh);

  input2 = createInput('');
  input2.position(inputpx,inputpy+140);
  input2.size(inputw, inputh);

  input4 = createInput('');
  input4.position(inputpx,inputpy+210);
  input4.size(inputw, inputh);

  input5 = createInput('');
  input5.position(inputpx, inputpy+280);
  input5.size(inputw, inputh);

//////////////////////////////////////////////////////////
  info1 = createElement('h3', 'name');
  info1.position(infopx,infopy);

  info3 = createElement('h3', 'gender');
  info3.position(infopx,infopy+70);

  info2 = createElement('h3', 'age');
  info2.position(infopx,infopy+140);

  info4 = createElement('h3', 'language');
  info4.position(infopx,infopy+210);

  info5 = createElement('h3', 'special');
  info5.position(infopx,infopy+280);

}

function draw() {
  background(255);

  header = createElement('h2', 'Add info');
  header.position(139,5);
  header.style('color','#263926');

  back = createElement('h3', 'Back');
  back.position(20,10);
  back.style('color','#657467');
  back.mousePressed(jumpToHome);

/////////////////////////////////////////////////////////
  confirm = createElement('h2', 'Confirm and add');
  confirm.position(92,488);
  fill("#7FBF7F");
  rect(45,500,290,50,10);
  confirm.mousePressed(clearinput);  ///use touchStart to if mouse not working on phone

  view = createElement('h2', 'View data');
  view.position(133,588);
  view.mousePressed(jumpToThree);
  fill("#7FBF7F");
  rect(45,600,290,50,10);

  fill('#AEAEB2');
  textSize(16);
  text('enter a patient info below :',40,93);
  text('check before confirm',110,565);

}

function jumpToHome() {
  window.open("index.html","_self")
}

function jumpToThree() {
  window.open("indexThree.html","_self")
}

function clearinput() {
  //document.getInput.value('');
  window.open("indexTwo.html","_self")
}
