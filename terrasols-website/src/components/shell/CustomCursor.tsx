"use client";

import { useEffect, useRef } from "react";

const HOVER_SELECTOR = 'a, button, [role="button"], input, textarea, select, label';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);
  const enabled = useRef(false);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;
    enabled.current = true;
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      const el = e.target as Element | null;
      hovering.current = !!el?.closest(HOVER_SELECTOR);
    };

    window.addEventListener("pointermove", onMove);

    // Elastic lag: exponential decay toward the pointer with a ~0.1s time
    // constant, computed from real frame delta so the trailing feel stays
    // consistent regardless of refresh rate (unlike a fixed per-frame factor).
    const LAG_TIME_CONSTANT = 0.1;
    let raf: number;
    let lastTime: number | null = null;

    const tick = (now: number) => {
      const dt = lastTime === null ? 1 / 60 : Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      const factor = 1 - Math.exp(-dt / LAG_TIME_CONSTANT);

      ring.current.x += (target.current.x - ring.current.x) * factor;
      ring.current.y += (target.current.y - ring.current.y) * factor;
      if (ringRef.current) {
        const scale = hovering.current ? 1.5 : 1;
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        ringRef.current.classList.toggle("cursor-ring--hover", hovering.current);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
