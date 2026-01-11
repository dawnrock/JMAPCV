import React, { useEffect, useRef } from 'react';

const PacmanBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;

        const MARGIN = 30;
        const TRAIL_STEP = 20;
        const MAX_TRAIL_LENGTH = 15;
        const NUM_DOTS = 30;

        const pacman = {
            x: 0,
            y: 0,
            radius: 18,
            speed: 1.3,       // 🔹 reducido
            angle: 0,
            mouthOpen: 0,
            mouthSpeed: 0.1,
            targetDot: null,
            lastTrailX: 0,
            lastTrailY: 0,
        };

        const ghost = {
            x: 0,
            y: 0,
            radius: 18,
            speed: 1.3,       // 🔹 reducido
            color: '#FF0000',
            trail: []
        };


        let dots = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            pacman.x = canvas.width / 2;
            pacman.y = canvas.height / 2;
            ghost.x = pacman.x - 200;
            ghost.y = pacman.y;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        for (let i = 0; i < NUM_DOTS; i++) {
            dots.push({
                x: Math.random() * (canvas.width - MARGIN * 2) + MARGIN,
                y: Math.random() * (canvas.height - MARGIN * 2) + MARGIN,
                size: 3
            });
        }

        const canMove = (x, y) => (
            x > MARGIN && x < canvas.width - MARGIN &&
            y > MARGIN && y < canvas.height - MARGIN
        );

        const drawPacman = () => {
            ctx.save();
            ctx.translate(pacman.x, pacman.y);
            ctx.rotate(pacman.angle);
            const bite = 0.25 * Math.PI * pacman.mouthOpen;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, pacman.radius, bite, Math.PI * 2 - bite);
            ctx.fillStyle = '#FFD700';
            ctx.fill();
            ctx.restore();
        };

        const drawGhost = () => {
            ctx.beginPath();
            ctx.arc(ghost.x, ghost.y - 2, ghost.radius, Math.PI, 0);
            ctx.lineTo(ghost.x + ghost.radius, ghost.y + ghost.radius);
            ctx.lineTo(ghost.x - ghost.radius, ghost.y + ghost.radius);
            ctx.closePath();
            ctx.fillStyle = ghost.color;
            ctx.fill();
        };

        const update = () => {
            // --- elegir dot más cercano ---
            if (!pacman.targetDot || !dots.includes(pacman.targetDot)) {
                let minDist = Infinity;
                let candidate = null;
                for (const dot of dots) {
                    const d = Math.hypot(pacman.x - dot.x, pacman.y - dot.y);
                    if (d < minDist) {
                        minDist = d;
                        candidate = dot;
                    }
                }
                pacman.targetDot = candidate;
            }

            // --- movimiento Pacman ---
            if (pacman.targetDot) {
                const dx = pacman.targetDot.x - pacman.x;
                const dy = pacman.targetDot.y - pacman.y;

                let moveX = Math.sign(dx);
                let moveY = Math.sign(dy);

                // --- bloquear bordes ---
                if (!canMove(pacman.x + moveX * pacman.speed, pacman.y)) moveX = 0;
                if (!canMove(pacman.x, pacman.y + moveY * pacman.speed)) moveY = 0;

                // --- mover Pacman ---
                pacman.x += moveX * pacman.speed;
                pacman.y += moveY * pacman.speed;

                pacman.x = Math.max(MARGIN, Math.min(canvas.width - MARGIN, pacman.x));
                pacman.y = Math.max(MARGIN, Math.min(canvas.height - MARGIN, pacman.y));

                // --- calcular ángulo correctamente ---
                if (moveX !== 0 || moveY !== 0) {
                    pacman.angle = Math.atan2(moveY, moveX);
                }
            }


            // --- trail ---
            const distTrail = Math.hypot(
                pacman.x - pacman.lastTrailX,
                pacman.y - pacman.lastTrailY
            );
            if (distTrail > TRAIL_STEP) {
                ghost.trail.push({ x: pacman.x, y: pacman.y });
                pacman.lastTrailX = pacman.x;
                pacman.lastTrailY = pacman.y;
            }
            if (ghost.trail.length > MAX_TRAIL_LENGTH) ghost.trail.shift();

            // --- fantasma sigue siempre ---
            if (ghost.trail.length > 0) {
                const target = ghost.trail[0];
                const dx = target.x - ghost.x;
                const dy = target.y - ghost.y;
                const dist = Math.hypot(dx, dy) || 1;
                ghost.x += (dx / dist) * ghost.speed;
                ghost.y += (dy / dist) * ghost.speed;

                if (dist < 5) ghost.trail.shift();
            }

            // --- dots ---
            dots = dots.filter(
                d => Math.hypot(pacman.x - d.x, pacman.y - d.y) > pacman.radius + 5
            );
            while (dots.length < NUM_DOTS) dots.push({
                x: Math.random() * (canvas.width - MARGIN * 2) + MARGIN,
                y: Math.random() * (canvas.height - MARGIN * 2) + MARGIN,
                size: 3
            });

            pacman.mouthOpen += pacman.mouthSpeed;
            if (pacman.mouthOpen > 1 || pacman.mouthOpen < 0) pacman.mouthSpeed *= -1;
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = 'rgba(255, 215, 0, 0.4)';
            dots.forEach(dot => {
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
                ctx.fill();
            });

            drawPacman();
            drawGhost();
            update();

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                inset: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 0.25
            }}
        />
    );
};

export default PacmanBackground;
