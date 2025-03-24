"use client";
import { useEffect, useRef, useCallback } from "react";

const CanvasEffect = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mousePosRef = useRef({ x: null, y: null });

  const Particle = useCallback((x, y, size, color, speedX, speedY) => {
    return {
      x,
      y,
      size,
      color,
      speedX,
      speedY,
      baseX: x,
      baseY: y,
      density: Math.random() * 30 + 1,
      update: function() {
        // Mouse interaction
        const dx = mousePosRef.current.x - this.x;
        const dy = mousePosRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100;
        
        if (distance < maxDistance && mousePosRef.current.x) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (maxDistance - distance) / maxDistance;
          const directionX = forceDirectionX * force * this.density;
          const directionY = forceDirectionY * force * this.density;
          
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Return to original position
          if (this.x !== this.baseX) {
            const dx = this.baseX - this.x;
            this.x += dx / 10;
          }
          if (this.y !== this.baseY) {
            const dy = this.baseY - this.y;
            this.y += dy / 10;
          }
        }

        // Boundary check
        if (this.x > canvasRef.current.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvasRef.current.height || this.y < 0) this.speedY *= -1;
      },
      draw: function(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    };
  }, []);

  const connectParticles = useCallback((ctx, particles) => {
    let opacity = 1;
    for (let a = 0; a < particles.length; a++) {
      for (let b = a; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          opacity = 1 - (distance / 100);
          ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }, []);

  const init = useCallback(() => {
    particlesRef.current = [];
    const particleCount = Math.floor(window.innerWidth / 10);
    const canvas = canvasRef.current;
    
    for (let i = 0; i < particleCount; i++) {
      const size = (Math.random() * 2) + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speedX = (Math.random() - 0.5) * 0.5;
      const speedY = (Math.random() - 0.5) * 0.5;
      const color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`;
      
      particlesRef.current.push(Particle(x, y, size, color, speedX, speedY));
    }
  }, [Particle]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particlesRef.current.forEach(particle => {
      particle.update();
      particle.draw(ctx);
    });
    
    // Connect particles
    connectParticles(ctx, particlesRef.current);
    
    animationRef.current = requestAnimationFrame(animate);
  }, [connectParticles]);

  const handleMouseMove = useCallback((e) => {
    mousePosRef.current = {
      x: e.clientX,
      y: e.clientY
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mousePosRef.current = { x: null, y: null };
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  }, [init]);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [animate, handleMouseMove, handleMouseLeave, handleResize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-gray-900 to-black pointer-events-none"
    />
  );
};

export default CanvasEffect;