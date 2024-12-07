let particleSystem;
let repeller, attractor;

function setup() {
    createCanvas(windowWidth, windowHeight);

    particleSystem = new ParticleSystem(createVector(width / 2, height / 2));
    repeller = new Repeller(width / 4, height / 4);
    attractor = new Attractor(3 * width / 4, 3 * height / 4);
}

function draw() {
    background(240);

    // Repeller와 Attractor 표시
    repeller.show();
    attractor.show();

    // 파티클 시스템 업데이트
    particleSystem.applyRepeller(repeller);
    particleSystem.applyAttractor(attractor);
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
