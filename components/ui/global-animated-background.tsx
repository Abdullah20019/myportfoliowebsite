"use client";

import { useEffect, useState } from "react";

// CSS-only floating animation using keyframes
const floatAnimation = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(-20px) translateX(10px); }
  }
  @keyframes float-reverse {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(20px) translateX(-10px); }
  }
  @keyframes pulse-scale {
    0%, 100% { transform: scale(1); opacity: 0.4; }
    50% { transform: scale(1.15); opacity: 0.6; }
  }
  @keyframes particle-float {
    0% { transform: translateY(0) translateX(0); opacity: 0.3; }
    50% { transform: translateY(-50px) translateX(20px); opacity: 0.7; }
    100% { transform: translateY(-100px) translateX(0); opacity: 0.3; }
  }
`;

export function GlobalAnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Static positions for SSR (deterministic)
  const orbs = [
    { size: 500, left: -100, top: -100, delay: 0, duration: 12 },
    { size: 400, right: -50, top: 150, delay: 2, duration: 15 },
    { size: 350, left: 200, bottom: 100, delay: 4, duration: 13 },
  ];

  const particles = [
    { left: 10, top: 20, delay: 0, duration: 15 },
    { left: 30, top: 60, delay: 2, duration: 18 },
    { left: 50, top: 30, delay: 4, duration: 12 },
    { left: 70, top: 70, delay: 1, duration: 16 },
    { left: 90, top: 40, delay: 3, duration: 14 },
    { left: 20, top: 80, delay: 5, duration: 17 },
    { left: 60, top: 10, delay: 2.5, duration: 13 },
    { left: 80, top: 90, delay: 4.5, duration: 15 },
  ];

  return (
    <>
      <style>{floatAnimation}</style>
      <div 
        className="fixed inset-0 overflow-hidden"
        style={{ 
          zIndex: -1,
          background: 'linear-gradient(135deg, #0a0a0a 0%, #051a0f 50%, #0a0a0a 100%)'
        }}
      >
        {/* Reduced number of gradient orbs - only 3 */}
        {orbs.map((orb, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle, rgba(34,197,94,${0.25 - i * 0.05}) 0%, rgba(34,197,94,0.05) 50%, transparent 70%)`,
              filter: 'blur(40px)',
              left: orb.left,
              top: orb.top,
              right: orb.right,
              bottom: orb.bottom,
              animation: `pulse-scale ${orb.duration}s ease-in-out ${orb.delay}s infinite`,
              willChange: 'transform, opacity',
            }}
          />
        ))}

        {/* Simplified floating shapes - only 3 */}
        <div
          className="absolute w-[250px] h-[60px] rounded-full border border-green-500/20 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(34,197,94,0.15), transparent)',
            left: '5%',
            top: '30%',
            animation: 'float 10s ease-in-out infinite',
            willChange: 'transform',
          }}
        />

        <div
          className="absolute w-[200px] h-[50px] rounded-full border border-emerald-500/20 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.15))',
            right: '10%',
            top: '50%',
            animation: 'float-reverse 12s ease-in-out infinite',
            willChange: 'transform',
          }}
        />

        <div
          className="absolute w-[150px] h-[40px] rounded-full border border-green-400/20 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(74,222,128,0.1), transparent)',
            left: '15%',
            bottom: '30%',
            animation: 'float 8s ease-in-out infinite',
            willChange: 'transform',
          }}
        />

        {/* Reduced particles - only 8 with CSS animation */}
        {mounted && particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-green-400/40 pointer-events-none"
            style={{
              width: 3,
              height: 3,
              left: `${p.left}%`,
              top: `${p.top}%`,
              animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
              willChange: 'transform, opacity',
            }}
          />
        ))}

        {/* Static grid pattern - no animation */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>
    </>
  );
}

export default GlobalAnimatedBackground;
