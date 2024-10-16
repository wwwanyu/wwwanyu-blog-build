const canvas_particle = document.querySelector("#particle");
const ctx_particle = canvas_particle.getContext("2d");
canvas_particle.width = 400;
canvas_particle.height = 800;
const click = {
    x: null,
    y: null
}
canvas_particle.addEventListener('click', function (e) {
    click.x = e.x;
    click.y = e.y;
    drawShape();
    console.log(e);
})

function drawShape() {
    ctx_particle.fillStyle = "pink";
    ctx_particle.beginPath();
    ctx_particle.fillRect(click.x, click.y, 10, 10);
    ctx_particle.fill();
}