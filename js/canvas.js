const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = window.innerWidth * 0.99;
const CANVAS_HEIGHT = canvas.height = window.innerHeight * 0.99 - 100;

const Base = { x: 200, y: 440 };
const radius = 200;
const mouse = new Image();
let mouseWidth = 100;
let mouseHeight = 100;
let mouseX = CANVAS_WIDTH - mouseWidth,
    mouseY = 0;
let draggable = false;
let overlay = false;
let vertexX = 0;
mouse.src = '/images/evil-pentagram/mouse.png';

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 10;
    ctx.fillStyle = "rgba(0,255,10, 0.4)";
    ctx.beginPath();
    ctx.strokeStyle = '#00FF0A';
    ctx.moveTo(410, 260);
    ctx.arc(200, 240, 210, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.moveTo(Base.x, Base.y);
    ctx.beginPath();
    for (var i = 1; i <= 5; ++i) {
        var th = i * 4 * Math.PI / 5;
        var x = Base.x - radius * Math.sin(th);
        var y = Base.y - radius + radius * Math.cos(th);
        ctx.lineTo(x, y);
    }
    for (var i = 1; i <= 5; ++i) {
        var th = i * 4 * Math.PI / 5;
        vertexX = Base.x - radius * Math.sin(th);
        var y = Base.y - radius + radius * Math.cos(th);
        ctx.fillRect(vertexX - 50, y - 50, 100, 100);
    }
    ctx.lineJoin = 'miter';
    ctx.closePath();
    ctx.stroke();
    ctx.drawImage(mouse, mouseX, mouseY, mouseWidth, mouseHeight);
    requestAnimationFrame(animate);
}
animate();
canvas.addEventListener('mousedown', e => {
    if (
        e.layerX <= (mouseX + mouseWidth) &&
        e.layerX >= (mouseX) &&
        e.layerY <= (mouseY + mouseHeight) &&
        e.layerY >= (mouseY)
    ) {
        draggable = true;
    }
})
canvas.addEventListener('touchstart', e => {
    if (
        e.layerX <= (mouseX + mouseWidth) &&
        e.layerX >= (mouseX) &&
        e.layerY <= (mouseY + mouseHeight) &&
        e.layerY >= (mouseY)
    ) {
        draggable = true;
    }
})
canvas.addEventListener('mousemove', e => {
    if (draggable) {
        mouseX = e.layerX - (mouseWidth / 2);
        mouseY = e.layerY - 40;
        mouseWidth = 200
        mouseHeight = 200
    }
})
canvas.addEventListener('touchmove', e => {
    if (draggable) {
        mouseX = e.layerX - (mouseWidth / 2);
        mouseY = e.layerY - 40;
        mouseWidth = 200
        mouseHeight = 200
    }
})
canvas.addEventListener('mouseup', e => {
    draggable = false;
    mouseWidth = 100;
    mouseHeight = 100;
    mouseX = e.layerX - (mouseWidth / 2);
    mouseY = e.layerY - (mouseHeight / 2) + 10;
})
canvas.addEventListener('touchend', e => {
    draggable = false;
    mouseWidth = 100;
    mouseHeight = 100;
    mouseX = e.layerX - (mouseWidth / 2);
    mouseY = e.layerY - (mouseHeight / 2) + 10;
})

//Todo:
// 1. make it draggable in the web browser on mobile phones
// 2. when the mouse entered one of the squares, make it react
// 3. make canvas web page responsive