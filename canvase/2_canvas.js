const canvas = document.getElementById('canvasDemo');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
ctx.fillStyle = 'orange';
ctx.fillRect(100, 50, 500, 100);

ctx.fillStyle = 'green';
ctx.fillRect(100, 250, 500, 100);


ctx.beginPath(); // start a fresh path.. not refer the past
ctx.moveTo(10, 10);
ctx.lineTo(300, 100);
ctx.lineTo(300, 500);
ctx.strokeStyle='rgba(70,40,30,0.3)';
ctx.stroke();

ctx.beginPath();
ctx.arc(350, 170, 50, 0, Math.PI*2, false);
ctx.stroke();

// for(let i=0;i<10;i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     ctx.beginPath();
//     ctx.arc(x, y, 30, 0, Math.PI * 2, false);

//     ctx.strokeStyle='rgba(100,0,255,1)'
//     ctx.stroke();
// }

// var x = Math.random() * window.innerWidth;
// var y = Math.random() * window.innerHeight;
// var dx = (Math.random() -0.5)*8;
// var dy = (Math.random() -0.5)*8;
// var rad = 40;
// function animate() {
//     requestAnimationFrame(animate);
//     ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
    
//     ctx.beginPath();
//     ctx.arc(x, y, rad, 0, Math.PI * 2, false);
//     ctx.strokeStyle='red'
//     ctx.stroke();
//     if(x+rad > window.innerWidth || x - rad < 0) {
//         dx= -dx
//     }
//     if(y+rad> window.innerHeight || y - rad < 0) {
//         dy= -dy
//     }

//     x+=dx;
//     y+=dy;
// }

// animate()