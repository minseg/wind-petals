let repeller = { pos: createVector(width / 4, height / 4), size: 30 };

function draw() {
    background(240);

    // Repeller 표시
    fill(255, 0, 0, 150);
    ellipse(repeller.pos.x, repeller.pos.y, repeller.size);

    particles.forEach(p => {
        // Repeller의 밀어내는 힘 계산
        let dir = p.pos.copy().sub(repeller.pos);
        let distance = constrain(dir.mag(), 5, 100);
        dir.normalize();
        let force = -50 / (distance * distance);
        dir.mult(force);
        p.acc.add(dir);

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
