"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnterBtn = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "60px";
        ringRef.current.style.height = "60px";
        ringRef.current.style.borderColor = "rgba(0,212,255,0.8)";
        ringRef.current.style.background = "rgba(0,212,255,0.06)";
      }
    };
    const onLeaveBtn = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "36px";
        ringRef.current.style.height = "36px";
        ringRef.current.style.borderColor = "rgba(0,212,255,0.5)";
        ringRef.current.style.background = "transparent";
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (ringRef.current) {
        const w = parseInt(ringRef.current.style.width || "36");
        const h = parseInt(ringRef.current.style.height || "36");
        ringRef.current.style.transform = `translate(${ring.current.x - w / 2}px, ${ring.current.y - h / 2}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafId.current = requestAnimationFrame(animate);

    const buttons = document.querySelectorAll("button, a, [data-cursor='pointer']");
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", onEnterBtn);
      btn.addEventListener("mouseleave", onLeaveBtn);
    });

    const observer = new MutationObserver(() => {
      const freshBtns = document.querySelectorAll("button, a, [data-cursor='pointer']");
      freshBtns.forEach((btn) => {
        btn.removeEventListener("mouseenter", onEnterBtn);
        btn.removeEventListener("mouseleave", onLeaveBtn);
        btn.addEventListener("mouseenter", onEnterBtn);
        btn.addEventListener("mouseleave", onLeaveBtn);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 99999 }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          border: "1px solid rgba(0,212,255,0.5)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.2s, height 0.2s, background 0.2s, border-color 0.2s",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
