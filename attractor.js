let attractor = { pos: createVector(3 * width / 4, 3 * height / 4), size: 30 };

function draw() {
    background(240);

    // Attractor 표시
    fill(0, 255, 0, 150);
    ellipse(attractor.pos.x, attractor.pos.y, attractor.size);

    particles.forEach(p => {
        // Attractor의 끌어당기는 힘 계산
        let dir = attractor.pos.copy().sub(p.pos);
        let distance = constrain(dir.mag(), 5, 100);
        dir.normalize();
        let force = 50 / (distance * distance);
        dir.mult(force);
        p.acc.add(dir);

        // Repeller 힘 유지
        let repellerDir = p.pos.copy().sub(repeller.pos);
        let repellerDistance = constrain(repellerDir.mag(), 5, 100);
        repellerDir.normalize();
        let repellerForce = -50 / (repellerDistance * repellerDistance);
        repellerDir.mult(repellerForce);
        p.acc.add(repellerDir);

        // 파티클 속도와 위치 업데이트
        p.vel.add(p.acc);
        p.pos.add(p.vel);
        p.acc.mult(0);

        // 파티클 그리기
        noStroke();
        fill(150, 200, 255, 150);
        ellipse(p.pos.x, p.pos.y, p.size);
    });
}
