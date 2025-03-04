const canvas = document.querySelector("#canvas1");
const rectangles_canvas = document.querySelector("#rectangles");
const ctx = canvas.getContext('2d');
const rectangles_ctx = rectangles_canvas.getContext('2d');
const pentagramBase = { x: 250, y: 450 };
const radius = 200;
const mouse = new Image();
const fish = new Image();
const dust = new Image();
const spriteWidth = 559;
const spriteHeight = 557;
const staggerFrames = 6;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
rectangles_canvas.width = window.innerWidth;
rectangles_canvas.height = window.innerHeight;
let mouseWidth = 100;
let mouseHeight = 100;
let fishWidth = 100;
let fishHeight = 100;
let fishX = canvas.width - fishWidth,
    fishY = mouseHeight + 10;
let mouseX = canvas.width - mouseWidth,
    mouseY = 0;
let draggable = false;
let overlay = false;
let vertexX = 0;
let evilScore = '0';
const evilLevelColor = ['#001F01', '#003302', '#006604', '#009906', '#00CC08', '#00FF0A'];
let showEvilLevelColor = evilLevelColor[0];
let triggerDust = false;
ctx.font = '24px Arial';
mouse.src = '/images/evil-pentagram/mouse.png';
fish.src = '/images/evil-pentagram/fish.png';
dust.src = '/images/evil-pentagram/dust.png';

randomColors = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
rectangles_ctx.fillStyle = `rgba(${randomColors}, 1)`;

function evilLevel() {
    ctx.fillStyle = '#00FF0A';
    ctx.fillText('Evil: ' + evilScore, 10, 520);
}

function dustEffect() {
    ctx.drawImage(dust,
        frameX * spriteWidth,
        frameY * spriteHeight,
        spriteWidth,
        spriteHeight,
        mouseX - 20, mouseY - 20,
        mouseWidth + 40,
        mouseHeight + 40);
    if (gameFrame % staggerFrames == 0) {
        if (frameX < 9) frameX++;
        else frameX = 0;
    }
    gameFrame++;
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.strokeStyle = showEvilLevelColor;
    ctx.moveTo(460, 250);
    ctx.arc(250, 248, 210, 0, Math.PI * 2);
    ctx.stroke();
    ctx.moveTo(pentagramBase.x, pentagramBase.y);
    ctx.beginPath();
    for (var i = 1; i <= 5; ++i) {
        var th = i * 4 * Math.PI / 5;
        var x = pentagramBase.x - radius * Math.sin(th);
        var y = pentagramBase.y - radius + radius * Math.cos(th);
        ctx.lineTo(x, y);
    }
    ctx.lineJoin = 'miter';
    ctx.closePath();
    ctx.stroke();
    for (var i = 1; i <= 5; ++i) {
        var th = i * 4 * Math.PI / 5;
        vertexX = pentagramBase.x - radius * Math.sin(th);
        var y = pentagramBase.y - radius + radius * Math.cos(th);
        rectangles_ctx.fillRect(vertexX - 50, y - 50, 100, 100);
    }
    evilLevel();
    if (triggerDust) dustEffect();
    ctx.drawImage(mouse, mouseX, mouseY, mouseWidth, mouseHeight);
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('mousedown', e => {
    if (
        e.layerX <= (mouseX + mouseWidth) &&
        e.layerX >= (mouseX) &&
        e.layerY <= (mouseY + mouseHeight) &&
        e.layerY >= (mouseY)
    ) {
        draggable = true;
    }
})

window.addEventListener('mousemove', e => {
    if (draggable) {
        mouseX = e.layerX - (mouseWidth / 2);
        mouseY = e.layerY - 40;
        mouseWidth = 140
        mouseHeight = 140
    }
})

window.addEventListener('mouseup', e => {
    const imageDatas = rectangles_ctx.getImageData(mouseX + 50, mouseY + 50, 1, 1).data;
    draggable = false;
    triggerDust = true;
    mouseWidth = 100;
    mouseHeight = 100;
    const r = imageDatas[0];
    const g = imageDatas[1];
    const b = imageDatas[2];

    if (r === randomColors[0] && g === randomColors[1] && b === randomColors[2]) {
        evilScore++;
    }
    if (evilScore === 1) {
        showEvilLevelColor = evilLevelColor[1];
    }
    if (evilScore === 2) {
        showEvilLevelColor = evilLevelColor[2];
    }
    if (evilScore === 3) {
        showEvilLevelColor = evilLevelColor[3];
    }
    if (evilScore === 4) {
        showEvilLevelColor = evilLevelColor[4];
    }
    if (evilScore === 5) {
        showEvilLevelColor = evilLevelColor[5];
    }
})

//Todo:
// 1. Add the drop visual effect
// 2. Add more objects to the canvas
// 3. Fix "When the mouse is on the pentagram, click outside the pentagram, the score will increase"
// 4. Improve the drag&drop experience on mobile
