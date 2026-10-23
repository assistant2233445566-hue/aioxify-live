import React, { useEffect, useRef } from 'react';

const rand = (min, max) => min + Math.random() * (max - min);

const OxygenBreathScene = ({ variant = 'hero' }) => {
  const canvasRef = useRef(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const isStage = variant === 'stage';
    const particleCount = isStage ? 220 : variant === 'background' ? 90 : 160;
    const moleculeCount = isStage ? 22 : 14;

    const lungParticle = () => {
      const lobe = Math.random() > 0.5 ? 1 : -1;
      return {
        lobe,
        u: rand(-1, 1),
        v: rand(-1, 1),
        w: rand(-1, 1),
        size: rand(1.2, 3.4),
        hue: Math.random() > 0.55 ? 158 : Math.random() > 0.4 ? 265 : 190,
        spark: Math.random() * Math.PI * 2,
      };
    };

    const particles = Array.from({ length: particleCount }, lungParticle);
    const molecules = Array.from({ length: moleculeCount }, () => ({
      x: rand(-220, 220),
      y: rand(-260, 260),
      z: rand(-180, 180),
      vx: rand(-0.18, 0.18),
      vy: rand(-0.22, 0.22),
      vz: rand(-0.16, 0.16),
      rot: rand(0, Math.PI * 2),
      spin: rand(0.008, 0.02) * (Math.random() > 0.5 ? 1 : -1),
    }));

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.ty = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const project = (x, y, z, cx, cy, rotY, rotX, fov) => {
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      let x1 = x * cosY - z * sinY;
      let z1 = z * cosY + x * sinY;
      const y1 = y * cosX - z1 * sinX;
      z1 = z1 * cosX + y * sinX;
      const scale = fov / (fov + z1);
      return { x: cx + x1 * scale, y: cy + y1 * scale, s: scale, z: z1 };
    };

    const drawLung = (cx, cy, breath, rotY, rotX, fov, w, h) => {
      const scale = Math.min(w, h) * (isStage ? 0.42 : 0.34) * (0.92 + breath * 0.14);
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(1 + pointer.x * 0.04, 1 + pointer.y * 0.03);

      const lobe = (side) => {
        ctx.beginPath();
        ctx.moveTo(0, -scale * 0.55);
        ctx.bezierCurveTo(
          side * scale * 0.15, -scale * 0.95,
          side * scale * 0.95, -scale * 0.55,
          side * scale * 0.82, scale * 0.05
        );
        ctx.bezierCurveTo(
          side * scale * 0.7, scale * 0.72,
          side * scale * 0.18, scale * 0.88,
          0, scale * 0.7
        );
        ctx.closePath();
      };

      const gradient = ctx.createRadialGradient(0, 0, scale * 0.05, 0, 0, scale * 1.15);
      gradient.addColorStop(0, `hsla(158, 70%, 36%, ${0.18 + breath * 0.16})`);
      gradient.addColorStop(0.45, `hsla(190, 90%, 60%, ${0.08 + breath * 0.08})`);
      gradient.addColorStop(1, 'hsla(270, 90%, 65%, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.ellipse(0, 0, scale * 1.05, scale * 1.25, 0, 0, Math.PI * 2);
      ctx.fill();

      [-1, 1].forEach((side) => {
        lobe(side);
        ctx.fillStyle = `hsla(158, 70%, 32%), ${0.05 + breath * 0.07})`;
        ctx.strokeStyle = `hsla(158, 70%, 34%), ${0.28 + breath * 0.35})`;
        ctx.lineWidth = 1.4;
        ctx.shadowColor = 'hsla(158, 70%, 36%), 0.55)';
        ctx.shadowBlur = 18 + breath * 22;
        ctx.fill();
        ctx.stroke();
      });

      ctx.shadowBlur = 0;
      ctx.strokeStyle = `hsla(270, 90%, 70%, ${0.22 + breath * 0.25})`;
      ctx.lineWidth = 1;
      for (let i = 0; i < 6; i += 1) {
        const t = i / 5;
        ctx.beginPath();
        ctx.moveTo(0, -scale * 0.12);
        ctx.quadraticCurveTo(
          (0.22 + t * 0.55) * scale, (-0.05 - t * 0.35) * scale,
          (0.38 + t * 0.42) * scale, (-0.28 - t * 0.42) * scale
        );
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, -scale * 0.12);
        ctx.quadraticCurveTo(
          -(0.22 + t * 0.55) * scale, (-0.05 - t * 0.35) * scale,
          -(0.38 + t * 0.42) * scale, (-0.28 - t * 0.42) * scale
        );
        ctx.stroke();
      }

      ctx.restore();
      return { scale, rotY, rotX, fov };
    };

    const draw = (time) => {
      const { width, height } = canvas.getBoundingClientRect();
      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;

      ctx.clearRect(0, 0, width, height);

      const breath = reduced ? 0.55 : 0.5 + 0.5 * Math.sin(time / 2200);
      const rotY = pointer.x * 0.35 + (reduced ? 0 : Math.sin(time / 9000) * 0.12);
      const rotX = pointer.y * 0.22 + (reduced ? 0 : Math.cos(time / 11000) * 0.08);
      const fov = Math.min(width, height) * 0.9;
      const cx = width * (isStage ? 0.5 : 0.62);
      const cy = height * 0.52;

      drawLung(cx, cy, breath, rotY, rotX, fov, width, height);

      const expand = 0.78 + breath * 0.42;
      const points = [];

      particles.forEach((p) => {
        const x = (p.lobe * 70 + p.u * 95) * expand;
        const y = (p.v * 140 - 10) * expand;
        const z = p.w * 70 * expand;
        const projected = project(x, y, z, cx, cy, rotY, rotX, fov);
        points.push({ ...projected, p });
      });

      points.sort((a, b) => a.z - b.z);
      points.forEach(({ x, y, s, p }) => {
        if (s <= 0) return;
        const twinkle = 0.7 + 0.3 * Math.sin(time / 380 + p.spark);
        const alpha = (0.16 + s * 0.42) * twinkle;
        const radius = p.size * s * (0.8 + breath * 0.5);
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, 62%, ${alpha})`;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 60%, 0.7)`;
        ctx.shadowBlur = 8;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.shadowBlur = 0;

      molecules.forEach((m) => {
        if (!reduced) {
          m.x += m.vx;
          m.y += m.vy;
          m.z += m.vz;
          m.rot += m.spin;
          if (Math.abs(m.x) > 260) m.vx *= -1;
          if (Math.abs(m.y) > 300) m.vy *= -1;
          if (Math.abs(m.z) > 200) m.vz *= -1;
        }

        const left = project(m.x - 12, m.y, m.z, cx, cy, rotY + m.rot * 0.2, rotX, fov);
        const right = project(m.x + 12, m.y, m.z, cx, cy, rotY + m.rot * 0.2, rotX, fov);
        ctx.strokeStyle = `hsla(158, 65%, 38%), ${0.35 * left.s})`;
        ctx.lineWidth = 2 * left.s;
        ctx.beginPath();
        ctx.moveTo(left.x, left.y);
        ctx.lineTo(right.x, right.y);
        ctx.stroke();

        [left, right].forEach((atom, index) => {
          ctx.beginPath();
          ctx.fillStyle = index === 0
            ? `hsla(158, 70%, 34%), ${0.55 * atom.s})`
            : `hsla(190, 90%, 62%, ${0.5 * atom.s})`;
          ctx.shadowColor = 'hsla(158, 70%, 36%), 0.8)';
          ctx.shadowBlur = 12;
          ctx.arc(atom.x, atom.y, 5.5 * atom.s, 0, Math.PI * 2);
          ctx.fill();
        });
      });
      ctx.shadowBlur = 0;
    };

    let onScreen = true;
    let running = true;
    const tick = (time) => {
      if (!running) return;
      draw(time);
      frameRef.current = requestAnimationFrame(tick);
    };

    const syncLoop = () => {
      running = onScreen && document.visibilityState !== 'hidden';
      cancelAnimationFrame(frameRef.current);
      if (running) frameRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      syncLoop();
    }, { threshold: 0.05 });
    observer.observe(canvas);

    setSize();
    window.addEventListener('resize', setSize);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('visibilitychange', syncLoop);
    frameRef.current = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(frameRef.current);
      observer.disconnect();
      window.removeEventListener('resize', setSize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('visibilitychange', syncLoop);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
};

export default OxygenBreathScene;
