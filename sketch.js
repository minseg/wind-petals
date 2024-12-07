let particles = []; // 파티클 배열
let repeller, attractor;

function setup() {
    createCanvas(windowWidth, windowHeight);

    // 파티클 생성
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle(createVector(random(width), random(height))));
    }

    // Repeller와 Attractor 초기화
    repeller = { pos: createVector(width / 4, height / 4), size: 30 };
    attractor = { pos: createVector(3 * width / 4, 3 * height / 4), size: 30 };
}

function draw() {
    background(240);

    // Repeller와 Attractor 표시
    fill(255, 0, 0, 150);
    ellipse(repeller.pos.x, repeller.pos.y, repeller.size); // Repeller
    fill(0, 255, 0, 150);
    ellipse(attractor.pos.x, attractor.pos.y, attractor.size); // Attractor

    // 파티클 색상 변화 및 렌더링
    particles.forEach(p => {
        // Repeller의 밀어내는 힘
        let repellerForce = calculateRepellerForce(repeller, p);
        p.applyForce(repellerForce);

        // Attractor의 끌어당기는 힘
        let attractorForce = calculateAttractorForce(attractor, p);
        p.applyForce(attractorForce);

        // 파티클 색상 변화
        let totalForce = p.acc.mag(); // 총 가속도 크기
        let colorIntensity = map(totalForce, 0, 5, 150, 255);
        fill(colorIntensity, 200, 255 - colorIntensity, 150);
        ellipse(p.pos.x, p.pos.y, p.size); // 파티클 그리기

        // 파티클 업데이트
        p.update();
    });
}

// Repeller의 힘 계산
function calculateRepellerForce(repeller, particle) {
    let dir = particle.pos.copy().sub(repeller.pos);
    let distance = constrain(dir.mag(), 5, 100);
    dir.normalize();
    let force = -50 / (distance * distance);
    dir.mult(force);
    return dir;
}

// Attractor의 힘 계산
function calculateAttractorForce(attractor, particle) {
    let dir = attractor.pos.copy().sub(particle.pos);
    let distance = constrain(dir.mag(), 5, 100);
    dir.normalize();
    let force = 50 / (distance * distance);
    dir.mult(force);
    return dir;
}

function mouseDragged() {
    // 마우스 위치에 따라 Repeller와 Attractor 조작
    if (mouseX < width / 2) {
        repeller.pos.set(mouseX, mouseY);
    } else {
        attractor.pos.set(mouseX, mouseY);
    }
}
