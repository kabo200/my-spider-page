/* INTERACTIVE CARDS */

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{
card.addEventListener("click", ()=>{
card.classList.toggle("active");
});
});


/* ANIMATED BACKGROUND */

const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*3+1,
speedX:(Math.random()-0.5)*1,
speedY:(Math.random()-0.5)*1
});
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();
ctx.fillStyle="rgba(50,205,50,0.7)";
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();

p.x += p.speedX;
p.y += p.speedY;

if(p.x<0 || p.x>canvas.width) p.speedX *= -1;
if(p.y<0 || p.y>canvas.height) p.speedY *= -1;

});

requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", ()=>{
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});
