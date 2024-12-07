let particleSystem;
let repeller, attractor;
let previousAttractorPos;

function setup() {
    createCanvas(windowWidth, windowHeight);

    particleSystem = new ParticleSystem(createVector(width / 2, height / 2));
    repeller = new Repeller(width / 4, height / 4);
    attractor = new Attractor(3 * width / 4, 3 * height / 4);

    previousAttractorPos = attractor.pos.copy();
}

function draw() {
    background(240);

    // Attractor 이동 방향 벡터 계산
    let attractorMovement = attractor.pos.copy().sub(previousAttractorPos);
    previousAttractorPos = attractor.pos.copy();

    // Attractor와 Repeller 색상 변화
    let attractorAngle = atan2(attractorMovement.y, attractorMovement.x);
    let attractorColor = map(attractorAngle, -PI, PI, 0, 255);
    attractor.color = color(attractorColor, 255 - attractorColor, 150);

    let repellerAngle = atan2(mouseY - repeller.pos.y, mouseX - repeller.pos.x);
    let repellerColor = map(repellerAngle, -PI, PI, 0, 255);
    repeller.color = color(255 - repellerColor, repellerColor, 150);

    // Repeller와 Attractor 표시
    repeller.show();
    attractor.show();

    // 파티클 시스템 업데이트
    particleSystem.applyRepeller(repeller);
    particleSystem.applyAttractor(attractor);

    // Attractor 이동 방향에 따른 힘 적용 (속도 감소)
    particleSystem.applyAttractorMovement(attractorMovement.copy().mult(0.05));

    particleSystem.run();
    particleSystem.drawParticles();
}

function mouseDragged() {
    if (mouseX < width / 2) {
        repeller.pos.set(mouseX, mouseY);
    } else {
        attractor.pos.set(mouseX, mouseY);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
