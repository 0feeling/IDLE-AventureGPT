import React, { useState } from "react";
import { useGPTOverlord } from "./GPTOverlordContext";
function UglyInspirationButton({ isActive }) {
  const { setGameState } = useGPTOverlord();
  const [floatingTexts, setFloatingTexts] = useState([]);

  const handleClick = () => {
    if (!isActive) return;

    const id = Date.now();
    setFloatingTexts((prev) => [...prev, { id }]);
    setTimeout(() => {
      setFloatingTexts((prev) => prev.filter((item) => item.id !== id));
    }, 1000);

    setGameState((prev) => ({
      ...prev,
      inspiration: prev.inspiration + 1
    }));
  };

  return (
    <div className="flex justify-center items-center mt-6 mb-6">
      <div className="relative inline-block">
        {floatingTexts.map(({ id }) => (
          <span
            key={id}
            className="absolute left-1/2 top-0 transform -translate-x-1/2 text-black text-xl font-bold animate-float pointer-events-none select-none"
          >
            +1
          </span>
        ))}

        <button
          onClick={handleClick}
          className={`rounded p-4 text-sm font-semibold transition-transform duration-100 ease-out ${
            isActive
              ? "bg-white text-black active:scale-95"
              : "bg-gray-600 text-black cursor-not-allowed"
          }`}
        >
          Inspiration
        </button>
      </div>
    </div>
  );
}

export default UglyInspirationButton;
