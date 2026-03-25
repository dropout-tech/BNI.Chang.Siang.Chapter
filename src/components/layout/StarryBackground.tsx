import React, { useEffect, useRef } from 'react';

const StarryBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number; y: number; size: number;
            speedX: number; speedY: number; brightness: number;
            isGold: boolean;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 2 + 0.1;
                this.speedX = (Math.random() - 0.5) * 0.15;
                this.speedY = (Math.random() - 0.5) * 0.15;
                this.brightness = Math.random();
                this.isGold = Math.random() > 0.6;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0) this.x = canvas!.width;
                if (this.x > canvas!.width) this.x = 0;
                if (this.y < 0) this.y = canvas!.height;
                if (this.y > canvas!.height) this.y = 0;
                this.brightness += (Math.random() - 0.5) * 0.04;
                if (this.brightness > 1) this.brightness = 1;
                if (this.brightness < 0.15) this.brightness = 0.15;
            }

            draw() {
                if (!ctx) return;
                if (this.isGold) {
                    ctx.fillStyle = `rgba(212, 175, 55, ${this.brightness * 0.6})`;
                } else {
                    ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness * 0.4})`;
                }
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            const count = Math.min(window.innerWidth * 0.1, 100);
            for (let i = 0; i < count; i++) particles.push(new Particle());
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });

            particles.forEach((a, i) => {
                particles.slice(i + 1).forEach(b => {
                    const dx = a.x - b.x, dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        const alpha = (1 - dist / 120) * 0.08;
                        ctx.strokeStyle = (a.isGold || b.isGold)
                            ? `rgba(212, 175, 55, ${alpha})`
                            : `rgba(255, 255, 255, ${alpha})`;
                        ctx.lineWidth = 0.4;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
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
                    background: 'radial-gradient(ellipse at bottom, #2A1520 0%, #1A0A12 50%, #0D0508 100%)'
                }}
            />
            <canvas ref={canvasRef} className="absolute inset-0 block" />
        </div>
    );
};

export default StarryBackground;
