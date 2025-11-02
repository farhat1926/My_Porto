import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black overflow-hidden z-50">
        {/* 🌠 Background galaksi */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-black to-[#0f172a]">
          <div className="absolute inset-0 opacity-30 animate-twinkle bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>

        {/* 🌪️ Spiral Galaksi */}
        <svg
          viewBox="0 0 200 200"
          className="w-40 h-40 relative drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="galaxyGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="40%" stopColor="#6366f1" />
              <stop offset="70%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          {/* Spiral luar */}
          <path
            d="M100 30
               C140 40, 170 80, 160 120
               C150 160, 100 180, 70 160
               C40 140, 30 90, 50 60
               C70 30, 110 20, 140 50"
            stroke="url(#galaxyGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 100 100"
              to="360 100 100"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>

          {/* Spiral dalam */}
          <path
            d="M100 60
               C120 70, 140 100, 130 120
               C120 140, 90 140, 80 120
               C70 100, 80 80, 100 60"
            stroke="url(#galaxyGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 100 100"
              to="0 100 100"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>

          {/* Cahaya pusat */}
          <circle cx="100" cy="100" r="8" fill="url(#galaxyGradient)">
            <animate
              attributeName="r"
              values="8;10;8"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Partikel kecil mengorbit */}
          <circle r="2" fill="#38bdf8">
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              rotate="auto"
              path="M100 30 C140 40, 170 80, 160 120 C150 160, 100 180, 70 160 C40 140, 30 90, 50 60 C70 30, 110 20, 140 50"
            />
          </circle>
        </svg>

        {/* ✨ Teks bawah */}
        <p className="mt-8 text-sm text-white/70 tracking-widest animate-pulse">
          Entering the portfolio
        </p>

        {/* 🔮 Efek tambahan */}
        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.5; }
          }
          .animate-twinkle {
            animation: twinkle 4s ease-in-out infinite;
          }
        `}</style>
      </div>
    )
  );
};

export default Preloader;
