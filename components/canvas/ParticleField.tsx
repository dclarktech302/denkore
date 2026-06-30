"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  r: number;
  alpha: number;
  twinkleSpeed: number;
  offset: number;
  driftX: number;
  driftY: number;
}

const PARTICLE_COUNT = 160;

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = 0;
    let h = 0;
    let particles: Particle[] = [];

    function resize() {
      w = canvas!.width = window.innerWidth;
      h = canvas!.height = window.innerHeight;
    }

    function createParticles() {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.6 + 0.15,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        offset: Math.random() * Math.PI * 2,
        driftX: (Math.random() - 0.5) * 0.12,
        driftY: (Math.random() - 0.5) * 0.12,
      }));
    }

    resize();
    createParticles();
    window.addEventListener("resize", resize);

    let t = 0;
    let frameId: number;

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      t += 0.016;
      for (const p of particles) {
        const flicker = prefersReducedMotion
          ? 1
          : Math.sin(t * p.twinkleSpeed * 60 + p.offset) * 0.35 + 0.65;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(199,182,255,${p.alpha * flicker})`;
        ctx!.fill();

        if (!prefersReducedMotion) {
          p.x += p.driftX;
          p.y += p.driftY;
          if (p.x < -2) p.x = w + 2;
          if (p.x > w + 2) p.x = -2;
          if (p.y < -2) p.y = h + 2;
          if (p.y > h + 2) p.y = -2;
        }
      }
      frameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed top-0 left-0 z-0 h-screen w-screen"
    />
  );
}
