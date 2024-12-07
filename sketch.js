let particleSystem;
let repeller, attractor;
let previousAttractorPos; // Attractor의 이전 위치 저장

function setup() {
    createCanvas(windowWidth, windowHeight);

    particleSystem = new ParticleSystem(createVector(width / 2, height / 2));
    repeller = new Repeller(width / 4, height / 4);
    attractor = new Attractor(3 * width / 4, 3 * height / 4);

    previousAttractorPos = attractor.pos.copy(); // 초기 위치 저장
}

function draw() {
    background(240);

    // Attractor의 이동 방향 벡터 계산
    let attractorMovement = attractor.pos.copy().sub(previousAttractorPos);
    previousAttractorPos = attractor.pos.copy(); // 현재 위치를 이전 위치로 갱신

    // Repeller와 Attractor 표시
    repeller.show();
    attractor.show();

    // 파티클 시스템 업데이트
    particleSystem.applyRepeller(repeller);
    particleSystem.applyAttractor(attractor);

    // Attractor의 이동 방향을 추가적인 힘으로 파티클에 적용
    particleSystem.applyAttractorMovement(attractorMovement);

    particleSystem.run();

    // 파티클 렌더링
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
