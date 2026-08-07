import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const canvasRef = useRef(null);
  const canvas2dRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvas2d = canvas2dRef.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let playing = true;
    let dispose = () => {};

    const pauseHandlers = () => {
      const onVis = () => { playing = !document.hidden; };
      const observer = new IntersectionObserver(
        ([entry]) => { playing = entry.isIntersecting && !document.hidden; },
        { threshold: 0 }
      );
      document.addEventListener('visibilitychange', onVis);
      observer.observe(canvas);
      return () => {
        document.removeEventListener('visibilitychange', onVis);
        observer.disconnect();
      };
    };

    /* frame throttle: skip work when the tab is hidden, and cap the
       render rate so weak GPUs never get starved by 2K-sized canvases.
       Motion is time-based, so the visuals stay identical at any fps. */
    const throttle = () => {
      let last = performance.now();
      const MIN_MS = 1000 / 30; // never run the scene faster than 30fps
      return (cb) => {
        const now = performance.now();
        const dt = now - last;
        if (dt < MIN_MS) return;
        last = now;
        cb(dt);
      };
    };
    const maybeDraw = throttle();

    /* ---------- 2D canvas fallback ---------- */
    const fallback = () => {
      canvas.style.display = 'none';
      canvas2d.style.display = 'block';
      const ctx = canvas2d.getContext('2d');
      let w;
      let h;
      let t = 0;
      const resize = () => {
        w = canvas2d.width = canvas2d.clientWidth;
        h = canvas2d.height = canvas2d.clientHeight;
      };
      resize();
      window.addEventListener('resize', resize);
      const cols = [[139, 92, 246], [168, 85, 247], [56, 189, 248], [99, 102, 241]];
      const parts = Array.from({ length: reduced ? 60 : 140 }, (_, i) => ({
        x: Math.random(),
        y: Math.random(),
        z: Math.random() * 0.6 + 0.4,
        r: Math.random() * 2 + 1,
        c: i % 4,
      }));
      let raf;
      const loop = () => {
        raf = requestAnimationFrame(loop);
        maybeDraw((dt) => {
          const dtSec = Math.min(dt, 50) / 1000;
          t += dtSec * 0.24;
          ctx.clearRect(0, 0, w, h);
          for (let k = 0; k < 2; k += 1) {
            ctx.beginPath();
            const base = k * Math.PI;
            for (let x = 0; x <= w; x += 8) {
              const y = h * (0.3 + 0.25 * Math.sin(x * 0.003 + base + t * (0.8 + k * 0.3)))
                + h * 0.25 * Math.sin(x * 0.0011 + t * 0.5 + base);
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            const g = ctx.createLinearGradient(0, 0, w, 0);
            if (k === 0) {
              g.addColorStop(0, 'rgba(139,92,246,0)');
              g.addColorStop(0.5, 'rgba(139,92,246,.16)');
              g.addColorStop(1, 'rgba(56,189,248,.1)');
            } else {
              g.addColorStop(0, 'rgba(56,189,248,.1)');
              g.addColorStop(0.5, 'rgba(168,85,247,.12)');
              g.addColorStop(1, 'rgba(56,189,248,0)');
            }
            ctx.strokeStyle = g;
            ctx.lineWidth = 2 + k;
            ctx.stroke();
          }
          parts.forEach((p) => {
            p.x += dtSec * 0.018;
            p.y -= dtSec * (0.036 + p.z * 0.024);
            if (p.x > 1.02) p.x = -0.02;
            if (p.y < -0.02) p.y = 1.02;
            const c = cols[p.c];
            ctx.beginPath();
            ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${0.5 * p.z})`;
            ctx.arc(p.x * w, p.y * h, p.r * p.z, 0, 7);
            ctx.fill();
          });
        });
      };
      loop();
      return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(raf);
      };
    };

    /* ---------- WebGL scene ---------- */
    // Device-aware quality: weaker GPUs get fewer particles and simpler
    // geometry. The scene layout/colors/opacity are identical — only the
    // vertex count adapts, so the visuals read the same everywhere.
    const isMobile = window.matchMedia('(hover:none),(pointer:coarse)').matches;
    const isLowEnd = isMobile || (navigator.hardwareConcurrency || 8) <= 6;
    const buildThree = () => {
      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ canvas, antialias: !isLowEnd, alpha: true, powerPreference: 'high-performance' });
      } catch {
        return false;
      }
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      // Slightly under native resolution — visually identical for soft,
      // low-opacity wireframes. No blur filter: a full-screen blur on a
      // canvas that re-renders every frame costs more than it saves.
      renderer.setPixelRatio(isLowEnd ? 0.75 : 0.9);
      // Instant, non-blocking software-WebGL detection. A CPU-rendered 3D
      // scene is far heavier than the 2D fallback, so bail out without
      // rendering a single probe frame.
      try {
        const glctx = renderer.getContext();
        const dbg = glctx && glctx.getExtension('WEBGL_debug_renderer_info');
        const gpu = dbg ? String(glctx.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : '';
        if (/swiftshader|llvmpipe|software|basic render/i.test(gpu)) {
          renderer.dispose();
          return false;
        }
      } catch (e) { /* detection unavailable — assume a real GPU */ }

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
      camera.position.set(0, 0, 9);
      const group = new THREE.Group();
      scene.add(group);

      const ico = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.35, 0),
        new THREE.MeshBasicMaterial({ wireframe: true, color: 0x8b5cf6, transparent: true, opacity: 0.4 })
      );
      ico.position.set(-3.4, -1.2, -2);
      group.add(ico);

      const torus = new THREE.Mesh(
        new THREE.TorusGeometry(1.05, 0.34, 14, 32),
        new THREE.MeshBasicMaterial({ wireframe: true, color: 0x38bdf8, transparent: true, opacity: 0.32 })
      );
      torus.position.set(3.6, 1.4, -2.5);
      group.add(torus);

      const octa = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.85, 0),
        new THREE.MeshBasicMaterial({ color: 0xa855f7, wireframe: true, transparent: true, opacity: 0.28 })
      );
      octa.position.set(3.2, -1.6, -3);
      group.add(octa);

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(1.9, 0.05, 8, 48),
        new THREE.MeshBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.22 })
      );
      ring.position.set(-3.6, 1.5, -3.5);
      ring.rotation.x = 1.1;
      group.add(ring);

      const pts = [];
      for (let i = 0; i < 90; i += 1) {
        const t = i / 89;
        pts.push(new THREE.Vector3(
          Math.sin(t * Math.PI * 3) * 2.6,
          (t - 0.5) * 5.4,
          Math.cos(t * Math.PI * 2.2) * 1.4 - 0.5
        ));
      }
      const curve = new THREE.CatmullRomCurve3(pts);
      const ribbon = new THREE.Mesh(
        new THREE.TubeGeometry(curve, isLowEnd ? 100 : 180, 0.05, 6, false),
        new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.28 })
      );
      group.add(ribbon);

      const ribbon2 = new THREE.Mesh(
        new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3(pts.map((p, i) => new THREE.Vector3(-p.x * 0.7, (p.y - 2.2) * 0.8, -p.z))),
          isLowEnd ? 80 : 140, 0.028, 6, false
        ),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.2 })
      );
      group.add(ribbon2);

      const N = reduced ? 240 : isLowEnd ? 260 : 480;
      const pos = new Float32Array(N * 3);
      const col = new Float32Array(N * 3);
      const palette = [0x8b5cf6, 0xa855f7, 0x38bdf8, 0x6366f1];
      for (let i = 0; i < N; i += 1) {
        pos[i * 3] = (Math.random() - 0.5) * 20;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 13;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
        const c = new THREE.Color(palette[i % 4]).multiplyScalar(0.5 + Math.random() * 0.5);
        col[i * 3] = c.r;
        col[i * 3 + 1] = c.g;
        col[i * 3 + 2] = c.b;
      }
      const pg = new THREE.BufferGeometry();
      pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      pg.setAttribute('color', new THREE.BufferAttribute(col, 3));
      const points = new THREE.Points(
        pg,
        new THREE.PointsMaterial({ size: 0.045, vertexColors: true, transparent: true, opacity: 0.85, sizeAttenuation: true })
      );
      group.add(points);

      let mouseX = 0;
      let mouseY = 0;
      let camX = 0;
      let camY = 0;
      const onMouse = (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 1.6;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 1.6;
      };
      window.addEventListener('mousemove', onMouse);

      const onResize = () => {
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', onResize);

      let frame = 0;
      let raf;
      const animate = () => {
        raf = requestAnimationFrame(animate);
        maybeDraw((dt) => {
          const dtSec = Math.min(dt, 50) / 1000;
          frame += dtSec * 60;
          group.rotation.y = Math.sin(frame * 0.0016) * 0.45;
          group.rotation.x = Math.sin(frame * 0.001) * 0.12;
          ico.rotation.x += dtSec * 0.24;
          ico.rotation.y += dtSec * 0.36;
          torus.rotation.x += dtSec * 0.3;
          torus.rotation.z += dtSec * 0.24;
          octa.rotation.y += dtSec * 0.48;
          camX += (mouseX - camX) * 0.04;
          camY += (mouseY - camY) * 0.04;
          camera.position.x = camX * 0.7;
          camera.position.y = camY * 0.5;
          camera.lookAt(0, 0, 0);
          points.rotation.y += dtSec * 0.036;
          renderer.render(scene, camera);
        });
      };

      const cleanup = () => {
        window.removeEventListener('mousemove', onMouse);
        window.removeEventListener('resize', onResize);
        cancelAnimationFrame(raf);
        renderer.dispose();
      };

      if (reduced) {
        renderer.render(scene, camera);
        return cleanup;
      }

      animate();
      return cleanup;
    };

    /* ---------- boot ---------- */
    const cleanupPause = pauseHandlers();
    try {
      const cleanup = buildThree();
      dispose = cleanup || fallback();
    } catch (err) {
      console.warn('WebGL scene failed, using fallback:', err);
      dispose = fallback();
    }

    return () => {
      cleanupPause();
      dispose();
    };
  }, []);

  return (
    <>
      <canvas id="threebg" ref={canvasRef} />
      <canvas id="canvas2d" ref={canvas2dRef} style={{ display: 'none' }} />
    </>
  );
}
