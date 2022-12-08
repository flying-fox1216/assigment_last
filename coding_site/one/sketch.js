function setup() {
  let dom = document.getElementById("sketch");
  let canvas = createCanvas(
    dom.getBoundingClientRect().width,
    dom.getBoundingClientRect().height
  );
  canvas.parent("sketch");
  createCanvas(500, 400);
}

function draw() {
  background(220);
  //whites ofeye
  noStroke();
  fill(255);
  circle(width / 4, height / 2, 200);
  circle(width / 1.35, height / 2, 200);
  //iris
  let xc = constrain(mouseX, width / 4 - 30, width / 4 + 30);
  let xs = constrain(mouseY, height / 2 - 30, height / 2 + 30);
  fill(0);
  circle(xc, xs, 100);
  let xc2 = constrain(mouseX, width / 1.35 - 30, width / 1.35 + 30);
  let xs2 = constrain(mouseY, height / 2 - 30, height / 2 + 30);
  fill(0);
  circle(xc2, xs2, 100);
  //glare
  fill(255);
  //   circle(xc + 20, xs - 20, 20);
}
