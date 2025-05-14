import React, { useState, useRef } from "react";
import { useGPTOverlord } from "./GPTOverlordContext";

function InspirationButton() {
  const [floatingTexts, setFloatingTexts] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const [burstLevel, setBurstLevel] = useState(1);
  const timeoutRef = useRef(null);
  const { setGameState } = useGPTOverlord();

  const handleClick = () => {
    const now = Date.now();
    setClickCount((prev) => prev + 1);

    // Burst Level Logic
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setClickCount(0), 1500);

    let newBurst = 1;
    if (clickCount > 1) newBurst = 2;
    if (clickCount > 3) newBurst = 3;
    if (clickCount > 5) newBurst = 5;
    if (clickCount > 7) newBurst = 7;
    if (clickCount > 9) newBurst = 10;
    setBurstLevel(newBurst);

    // Crée des +1 en burst autour du bouton
    const newTexts = Array.from({ length: newBurst }).map((_, i) => ({
      id: now + i,
      x: (Math.random() - 0.5) * burstLevel * 20,
      y: (Math.random() - 1) * burstLevel * 12,
      rotation: (Math.random() - 0.5) * burstLevel * 15
    }));
    setFloatingTexts((prev) => [...prev, ...newTexts]);

    setTimeout(() => {
      setFloatingTexts((prev) =>
        prev.filter((item) => !newTexts.some((t) => t.id === item.id))
      );
    }, 1000);

    setGameState((prev) => ({
      ...prev,
      inspiration: prev.inspiration + newBurst
    }));
  };

  return (
    <div className="flex justify-center items-center mt-8 mb-10">
      <div className="relative inline-block">
        {/* Textes volants */}
        {floatingTexts.map(({ id, x, y, rotation }) => (
          <span
            key={id}
            style={{
              transform: `translate(${x}%, ${y}%) rotate(${rotation}deg)`
            }}
            className="absolute left-1/2 top-3 text-yellow-300 text-2xl font-extrabold animate-float pointer-events-none select-none z-10"
          >
            +1 💫
          </span>
        ))}

        <button
          onClick={handleClick}
          className={`rounded-lg px-8 py-6 text-black font-bold text-lg transition-transform duration-100 ease-out transform active:scale-95 shadow-lg
            bg-yellow-400 hover:bg-yellow-500
            ${
              burstLevel >= 3
                ? "animate-[glowCharge_0.8s_ease-in-out_forwards]"
                : ""
            }`}
        >
          💡 Générateur Manuel d'Inspiration 💡
        </button>
      </div>
    </div>
  );
}

export default InspirationButton;
