function setup() {
  let dom = document.getElementById("eye");
  let canvas = createCanvas(
    dom.getBoundingClientRect().width,
    dom.getBoundingClientRect().height
  );
  canvas.parent("eye");
  var cnv = createCanvas(windowWidth, 300);
  cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2 + 30);
}

function draw() {
  //   background(220);
  //whites ofeye
  noStroke();
  fill(255);
  circle(width / 2.45, height / 2, 150);
  circle(width / 1.7, height / 2, 150);
  //iris
  let xc = constrain(mouseX, width / 2.45 - 20, width / 2.45 + 20);
  let xs = constrain(mouseY, height / 2 - 20, height / 2 + 20);
  fill(0);
  circle(xc, xs, 75);
  let xc2 = constrain(mouseX, width / 1.7 - 20, width / 1.7 + 20);
  let xs2 = constrain(mouseY, height / 2 - 20, height / 2 + 20);
  fill(0);
  circle(xc2, xs2, 75);
  //glare
  fill(255);
  circle(xc + 15, xs - 15, 15);
  circle(xc2 + 15, xs2 - 15, 15);
}
