const canvas = document.querySelector("#canvas1");
const verteces_canvas = document.querySelector("#vertecesCanvas");
const ctx = canvas.getContext('2d');
const ctx_verteces = verteces_canvas.getContext('2d');
const pentagramBase = { x: 200, y: 440 };
const radius = 200;
const mouse = new Image();
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
verteces_canvas.width = window.innerWidth;
verteces_canvas.height = window.innerHeight;
let mouseWidth = 100;
let mouseHeight = 100;
let mouseX = canvas.width - mouseWidth,
    mouseY = 0;
let draggable = false;
let overlay = false;
let vertexX = 0;

mouse.src = '/images/evil-pentagram/mouse.png';


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 10;
    ctx.fillStyle = "rgba(84,162,255, 1)";
    // randomColors = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
    // color = `rgb(${this.randomColors[0]}, ${this.randomColors[1]}, ${this.randomColors[2]})`;
    ctx.beginPath();
    ctx.strokeStyle = '#00FF0A';
    ctx.moveTo(410, 260);
    ctx.arc(200, 240, 210, 0, Math.PI * 2);
    ctx.stroke();

    ctx.moveTo(pentagramBase.x, pentagramBase.y);
    ctx.beginPath();
    for (var i = 1; i <= 5; ++i) {
        var th = i * 4 * Math.PI / 5;
        var x = pentagramBase.x - radius * Math.sin(th);
        var y = pentagramBase.y - radius + radius * Math.cos(th);
        ctx.lineTo(x, y);
    }
    for (var i = 1; i <= 5; ++i) {
        var th = i * 4 * Math.PI / 5;
        vertexX = pentagramBase.x - radius * Math.sin(th);
        var y = pentagramBase.y - radius + radius * Math.cos(th);
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
    console.log('mouse up', e);
})
canvas.addEventListener('touchend', e => {
    draggable = false;
    mouseWidth = 100;
    mouseHeight = 100;
    mouseX = e.layerX - (mouseWidth / 2);
    mouseY = e.layerY - (mouseHeight / 2) + 10;
})


//Todo:
// 1. when the mouse entered one of the squares, make it react
//  - get the area of pentacle
//  - watch the part detect by color in raven tutorail, to see if we can use it
// 2. make canvas web page responsive
// 3. improve the drag&drop experience on android
