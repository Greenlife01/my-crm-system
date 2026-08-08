"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 200;
const COLORS = ["#5DCAA5", "#1D9E75", "#2D7A4F", "#EF9F27"];

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  drift: number;
  driftSpeed: number;
  color: string;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

function createParticle(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: 0.5 + Math.random() * 2.5,
    speedY: 0.08 + Math.random() * 0.22,
    speedX: (Math.random() - 0.5) * 0.06,
    drift: Math.random() * Math.PI * 2,
    driftSpeed: 0.002 + Math.random() * 0.004,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    opacity: 0.25 + Math.random() * 0.55,
    twinkleSpeed: 0.4 + Math.random() * 0.8,
    twinklePhase: Math.random() * Math.PI * 2,
  };
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let raf = 0;
    let elapsed = 0;

    function resize() {
      const canvasEl = canvasRef.current;
      if (!canvasEl) return;
      const rect = canvasEl.parentElement?.getBoundingClientRect();
      width = rect?.width ?? window.innerWidth;
      height = rect?.height ?? window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvasEl.width = width * dpr;
      canvasEl.height = height * dpr;
      canvasEl.style.width = `${width}px`;
      canvasEl.style.height = `${height}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: PARTICLE_COUNT }, () => createParticle(width, height));
    }

    function draw(time: number) {
      if (!ctx) return;
      const dt = elapsed ? time - elapsed : 16;
      elapsed = time;

      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        if (!prefersReducedMotion) {
          p.drift += p.driftSpeed * dt * 0.06;
          p.y -= p.speedY * dt * 0.06;
          p.x += p.speedX * dt * 0.06 + Math.sin(p.drift) * 0.06;

          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
        }

        const twinkle = 0.65 + 0.35 * Math.sin(time * 0.001 * p.twinkleSpeed + p.twinklePhase);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * twinkle;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(draw);
    }

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />;
}
