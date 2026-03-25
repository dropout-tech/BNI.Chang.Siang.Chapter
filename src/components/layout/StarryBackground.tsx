import React, { useEffect, useRef } from 'react';

const StarryBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const goldParticles: { x: number; y: number; size: number; speed: number; opacity: number; drift: number }[] = [];
        const initParticles = () => {
            goldParticles.length = 0;
            const count = Math.min(Math.floor(window.innerWidth * 0.04), 40);
            for (let i = 0; i < count; i++) {
                goldParticles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5 + 0.3,
                    speed: Math.random() * 0.15 + 0.05,
                    opacity: Math.random() * 0.4 + 0.1,
                    drift: (Math.random() - 0.5) * 0.3,
                });
            }
        };

        const drawWaves = (t: number) => {
            const w = canvas.width, h = canvas.height;

            const layers = [
                { y: h * 0.55, amp: 25, freq: 0.003, speed: 0.0004, color: 'rgba(16, 42, 67, 0.6)' },
                { y: h * 0.62, amp: 20, freq: 0.004, speed: -0.0003, color: 'rgba(26, 58, 92, 0.4)' },
                { y: h * 0.70, amp: 30, freq: 0.002, speed: 0.0005, color: 'rgba(16, 42, 67, 0.5)' },
                { y: h * 0.78, amp: 15, freq: 0.005, speed: -0.0006, color: 'rgba(10, 22, 40, 0.7)' },
                { y: h * 0.85, amp: 20, freq: 0.003, speed: 0.0003, color: 'rgba(14, 31, 53, 0.6)' },
            ];

            layers.forEach(layer => {
                ctx.beginPath();
                ctx.moveTo(0, h);
                for (let x = 0; x <= w; x += 2) {
                    const y = layer.y +
                        Math.sin(x * layer.freq + t * layer.speed) * layer.amp +
                        Math.sin(x * layer.freq * 1.5 + t * layer.speed * 0.7) * layer.amp * 0.5;
                    ctx.lineTo(x, y);
                }
                ctx.lineTo(w, h);
                ctx.closePath();
                ctx.fillStyle = layer.color;
                ctx.fill();
            });

            // Gold accent lines on waves
            const goldLines = [
                { y: h * 0.57, amp: 22, freq: 0.003, speed: 0.0004, alpha: 0.15 },
                { y: h * 0.72, amp: 28, freq: 0.002, speed: 0.0005, alpha: 0.08 },
                { y: h * 0.83, amp: 18, freq: 0.004, speed: -0.0004, alpha: 0.12 },
            ];

            goldLines.forEach(line => {
                ctx.beginPath();
                for (let x = 0; x <= w; x += 2) {
                    const y = line.y +
                        Math.sin(x * line.freq + t * line.speed) * line.amp +
                        Math.sin(x * line.freq * 1.8 + t * line.speed * 0.6) * line.amp * 0.4;
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.strokeStyle = `rgba(212, 175, 55, ${line.alpha})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            });
        };

        const drawParticles = () => {
            goldParticles.forEach(p => {
                p.y -= p.speed;
                p.x += p.drift;
                p.opacity += (Math.random() - 0.5) * 0.02;
                if (p.opacity > 0.5) p.opacity = 0.5;
                if (p.opacity < 0.05) p.opacity = 0.05;
                if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
                if (p.x < -5) p.x = canvas.width + 5;
                if (p.x > canvas.width + 5) p.x = -5;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
                ctx.fill();
            });
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            time++;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawWaves(time);
            drawParticles();

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', () => { resize(); initParticles(); });
        resize();
        initParticles();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(180deg, #0A1628 0%, #102A43 40%, #0E1F35 70%, #0A1628 100%)'
                }}
            />
            <canvas ref={canvasRef} className="absolute inset-0 block" />
        </div>
    );
};

export default StarryBackground;
