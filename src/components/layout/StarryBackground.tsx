import React, { useEffect, useRef } from 'react';

const StarryBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let raf: number;
        let t = 0;
        const particles: { x: number; y: number; r: number; vy: number; vx: number; alpha: number; gold: boolean }[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight || window.innerHeight * 3;
            initParticles();
        };

        const initParticles = () => {
            particles.length = 0;
            const density = Math.min(canvas.width * 0.03, 50);
            for (let i = 0; i < density; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 1.2 + 0.2,
                    vy: -(Math.random() * 0.12 + 0.02),
                    vx: (Math.random() - 0.5) * 0.15,
                    alpha: Math.random() * 0.3 + 0.05,
                    gold: Math.random() > 0.4,
                });
            }
        };

        const drawFabricWaves = () => {
            const w = canvas.width, h = canvas.height;

            // Multiple overlapping curved surfaces — like folded silk/fabric
            const surfaces = [
                { baseY: 0.15, amp: 40, freq: 0.0015, phase: 0, fillTop: 'rgba(16,42,67,0.25)', fillBot: 'rgba(10,22,40,0.0)', height: 0.4 },
                { baseY: 0.30, amp: 55, freq: 0.0012, phase: 2, fillTop: 'rgba(26,58,92,0.20)', fillBot: 'rgba(16,42,67,0.0)', height: 0.35 },
                { baseY: 0.50, amp: 35, freq: 0.0020, phase: 4, fillTop: 'rgba(16,42,67,0.30)', fillBot: 'rgba(10,22,40,0.0)', height: 0.3 },
                { baseY: 0.65, amp: 45, freq: 0.0010, phase: 1, fillTop: 'rgba(14,31,53,0.35)', fillBot: 'rgba(10,22,40,0.0)', height: 0.3 },
                { baseY: 0.80, amp: 30, freq: 0.0018, phase: 3, fillTop: 'rgba(10,22,40,0.40)', fillBot: 'rgba(10,22,40,0.0)', height: 0.2 },
            ];

            surfaces.forEach(s => {
                const yBase = s.baseY * h;
                const hFill = s.height * h;

                ctx.beginPath();
                ctx.moveTo(0, yBase + Math.sin(s.phase + t * 0.0003) * s.amp);
                // PERFORMANCE FIX: step increased to 35px to drop CPU usage safely
                for (let x = 0; x <= w + 35; x += 35) {
                    const y = yBase
                        + Math.sin(x * s.freq + t * 0.0004 + s.phase) * s.amp
                        + Math.sin(x * s.freq * 2.2 + t * 0.0002 + s.phase * 0.5) * s.amp * 0.3;
                    ctx.lineTo(x, y);
                }
                // Close downward
                // PERFORMANCE FIX: step increased to 35px
                for (let x = w + 35; x >= -35; x -= 35) {
                    const y = yBase + hFill
                        + Math.sin(x * s.freq * 0.8 + t * 0.0003 + s.phase + 1) * s.amp * 0.4;
                    ctx.lineTo(x, y);
                }
                ctx.closePath();

                const grad = ctx.createLinearGradient(0, yBase, 0, yBase + hFill);
                grad.addColorStop(0, s.fillTop);
                grad.addColorStop(1, s.fillBot);
                ctx.fillStyle = grad;
                ctx.fill();
            });

            // Gold accent lines flowing over the fabric
            const goldLines = [
                { baseY: 0.20, amp: 38, freq: 0.0015, phase: 0.5, alpha: 0.12, width: 0.8 },
                { baseY: 0.42, amp: 50, freq: 0.0012, phase: 2.5, alpha: 0.08, width: 0.6 },
                { baseY: 0.58, amp: 32, freq: 0.0020, phase: 4.5, alpha: 0.10, width: 0.7 },
                { baseY: 0.73, amp: 42, freq: 0.0010, phase: 1.5, alpha: 0.06, width: 0.5 },
                { baseY: 0.88, amp: 25, freq: 0.0018, phase: 3.5, alpha: 0.09, width: 0.6 },
            ];

            goldLines.forEach(l => {
                ctx.beginPath();
                const yBase = l.baseY * h;
                for (let x = 0; x <= w; x += 2) {
                    const y = yBase
                        + Math.sin(x * l.freq + t * 0.0004 + l.phase) * l.amp
                        + Math.sin(x * l.freq * 2.2 + t * 0.0002 + l.phase * 0.5) * l.amp * 0.3;
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.strokeStyle = `rgba(212,175,55,${l.alpha})`;
                ctx.lineWidth = l.width;
                ctx.stroke();
            });
        };

        const drawParticles = () => {
            particles.forEach(p => {
                p.y += p.vy;
                p.x += p.vx;
                p.alpha += (Math.random() - 0.5) * 0.01;
                p.alpha = Math.max(0.03, Math.min(0.35, p.alpha));

                if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
                if (p.x < -10) p.x = canvas.width + 10;
                if (p.x > canvas.width + 10) p.x = -10;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.gold
                    ? `rgba(212,175,55,${p.alpha})`
                    : `rgba(255,255,255,${p.alpha * 0.6})`;
                ctx.fill();
            });
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            t++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawFabricWaves();
            drawParticles();
            raf = requestAnimationFrame(animate);
        };

        const onResize = () => { resize(); };
        window.addEventListener('resize', onResize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', onResize);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden">
            {/* Deep navy gradient base */}
            <div className="absolute inset-0" style={{
                background: 'linear-gradient(180deg, #0D1B2E 0%, #102A43 35%, #0A1628 65%, #070E1A 100%)'
            }} />
            <canvas ref={canvasRef} className="absolute inset-0 block" />
            {/* Ambient Animated Lens Flares for extreme depth */}
            <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#D4AF37]/10 glow-orb animate-float-slow mix-blend-screen" />
            <div className="absolute bottom-[20%] right-[15%] w-[600px] h-[600px] bg-[#E8C547]/5 glow-orb animate-float-medium mix-blend-screen" />
            <div className="absolute top-[40%] right-[40%] w-[300px] h-[300px] bg-[#B8960C]/10 glow-orb animate-float-slow mix-blend-screen" style={{ animationDelay: '2s' }} />
            
            {/* Grain texture overlay */}
            <div className="absolute inset-0 grain pointer-events-none mix-blend-overlay" />
        </div>
    );
};

export default StarryBackground;
