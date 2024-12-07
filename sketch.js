function setup() {
  createCanvas(windowWidth, windowHeight); // 창 크기에 맞는 캔버스 생성
}

function draw() {
  background(240); // 흰색 배경
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 창 크기 변경 시 캔버스 크기 조정
}