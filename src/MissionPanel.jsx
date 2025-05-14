import React from "react";
import { useGPTOverlord } from "./GPTOverlordContext";
import { CheckCircle, Circle } from "lucide-react";

const MissionItem = React.memo(({ mission }) => (
  <div className="flex items-start gap-3 py-1 opacity-80 hover:opacity-100 transition-opacity">
    <div className="mt-0.5">
      {mission.validated ? (
        <CheckCircle className="text-green-400" size={16} />
      ) : (
        <Circle className="text-gray-400" size={16} />
      )}
    </div>
    <p
      className={`text-xs leading-snug break-words font-mono ${
        mission.validated
          ? "text-green-400 line-through opacity-60"
          : "text-gray-300"
      }`}
    >
      {mission.instruction}
    </p>
  </div>
));

function MissionPanel() {
  const { gameState } = useGPTOverlord();

  const missions = gameState.cristalMode
    ? gameState.cristalMissions
    : gameState.missions;

  const currentStep = gameState.cristalMode
    ? gameState.cristalStep
    : gameState.tutorialStep;

  const currentMission = missions[currentStep] || {
    instruction: "Aucune mission active",
    validated: false
  };

  return (
    <div className="bg-gray-800 border-t border-gray-700 h-64 md:h-72 lg:h-80 flex flex-col">
      {/* En-tête */}
      <div className="bg-gray-900 p-3 border-b border-gray-700 sticky top-0 z-20">
        <h2 className="text-blue-300 text-xs uppercase tracking-wider font-semibold mb-1 flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          {gameState.cristalMode && gameState.cristalStep >= 3
            ? "Mission Actuelle"
            : "Current Mission"}
        </h2>

        <div className="flex items-start gap-3">
          <div className="mt-0.5">
            {currentMission.validated ? (
              <CheckCircle className="text-green-400" size={18} />
            ) : (
              <Circle className="text-gray-400" size={18} />
            )}
          </div>
          <p
            className={`text-sm leading-snug break-words whitespace-pre-wrap font-mono ${
              currentMission.validated ? "text-green-400" : "text-white"
            }`}
          >
            {currentMission.instruction}
          </p>
        </div>
      </div>

      {/* Zone scrollable */}
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-0 flex flex-col">
          <h3 className="text-gray-400 text-xs uppercase tracking-wide font-semibold mb-2 px-3 pt-3 bg-gray-800 sticky top-0">
            Progression
          </h3>
          <div className="flex-1 overflow-y-auto px-3 pb-3 scrollbar-thin">
            <div className="space-y-2">
              {missions
                .filter((_, index) => index < currentStep)
                .map((mission, index) => (
                  <MissionItem key={index} mission={mission} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionPanel;
