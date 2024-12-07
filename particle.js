let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 100; i++) {
        particles.push({
            pos: createVector(random(width), random(height)),
            vel: createVector(random(-1, 1), random(-1, 1)),
            acc: createVector(0, 0),
            size: random(5, 10)
        });
    }
}

function draw() {
    background(240);
    particles.forEach(p => {
        // 파티클 속도와 위치 업데이트
        p.vel.add(p.acc);
        p.pos.add(p.vel);
        p.acc.mult(0);

        // 화면 밖으로 나가면 위치 초기화
        if (p.pos.x < 0 || p.pos.x > width || p.pos.y < 0 || p.pos.y > height) {
            p.pos = createVector(random(width), random(height));
        }

        // 파티클 그리기
        noStroke();
        fill(150, 200, 255, 150);
        ellipse(p.pos.x, p.pos.y, p.size);
    });
}
