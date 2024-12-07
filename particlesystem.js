class ParticleSystem {
    constructor(origin) {
        this.origin = origin.copy();
        this.particles = [];
        for (let i = 0; i < 100; i++) {
            this.addParticle();
        }
    }

    addParticle() {
        this.particles.push(new Particle(this.origin));
    }

    applyRepeller(repeller) {
        for (let p of this.particles) {
            let force = repeller.repel(p);
            p.applyForce(force);
        }
    }

    applyAttractor(attractor) {
        for (let p of this.particles) {
            let force = attractor.attract(p);
            p.applyForce(force);
        }
    }

    applyAttractorMovement(attractorMovement) {
        for (let p of this.particles) {
            let movementForce = attractorMovement.copy().mult(0.1); // Attractor 이동 방향을 힘으로 변환
            p.applyForce(movementForce);
        }
    }

    run() {
        for (let p of this.particles) {
            p.update();
        }
    }

    drawParticles() {
        for (let p of this.particles) {
            let totalForce = p.acc.mag();
            let colorIntensity = map(totalForce, 0, 5, 150, 255);
            fill(colorIntensity, 200, 255 - colorIntensity, 150);
            ellipse(p.pos.x, p.pos.y, p.size);
        }
    }
}
