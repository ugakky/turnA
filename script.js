
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5,
      color: "rgba(255, 182, 193, 0.8)"
    };
  }

  for (let i = 0; i < 100; i++) {
    particles.push(createParticle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    }
    requestAnimationFrame(animate);
  }

  animate();
});
