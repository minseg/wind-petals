let wind = createVector(0, 0);

function mouseDragged() {
    wind = createVector(mouseX - pmouseX, mouseY - pmouseY).mult(0.1); // 드래그 벡터 계산
}

function mouseDragged() {
  repeller.pos.set(mouseX, mouseY);
}

function mouseDragged() {
  if (mouseX < width / 2) {
      repeller.pos.set(mouseX, mouseY);
  } else {
      attractor.pos.set(mouseX, mouseY);
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight); // 창 크기에 맞는 캔버스 생성
}

function draw() {
  background(240); // 흰색 배경
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 창 크기 변경 시 캔버스 크기 조정
}