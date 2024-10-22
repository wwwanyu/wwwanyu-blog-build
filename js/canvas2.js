const canvas_particle = document.querySelector("#particle");
const ctx_particle = canvas_particle.getContext("2d");
canvas_particle.width = window.innerWidth;
canvas_particle.height = window.innerHeight;
const particleArray = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas_particle.width;
        this.y = Math.random() * canvas_particle.height;
        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {
        ctx_particle.fillStyle = "pink";
        ctx_particle.beginPath();
        ctx_particle.fillRect(this.x, this.y, 10, 10);
        ctx_particle.fill();
    }
}
function initParticles() {
    for (let i = 0; i < 100; i++) {
        particleArray.push(new Particle())
    }
}
initParticles();
function handleParticles() {
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
    }
}
function animate() {
    ctx_particle.clearRect(0, 0, canvas_particle.width, canvas_particle.height);
    handleParticles();
    requestAnimationFrame(animate);
}
animate();
console.log(canvas_particle.height);
