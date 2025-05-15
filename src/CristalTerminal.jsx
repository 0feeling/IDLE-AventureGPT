// CristalTerminal.jsx
import React from "react";
import { useGPTOverlord } from "./GPTOverlordContext";
import CristalFeedback from "./CristalFeedback";
import CristalMissionTerminal from "./CristalMissionTerminal";

export default function CristalTerminal() {
  const { gameState, terminalLogs } = useGPTOverlord(); // Une seule déclaration
  const [cristalMessages, setCristalMessages] = React.useState([]);
  const terminalRef = React.useRef(null);

  React.useEffect(() => {
    if (gameState.cristalMode) {
      const filtered = terminalLogs
        .filter((log) => log.source === "cristal")
        .map((log) => log.text);
      setCristalMessages(filtered);
    }
  }, [terminalLogs, gameState.cristalMode]);

  React.useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [cristalMessages]);

  return (
    <div className="flex flex-col z-3 bg-gray-900 h-full">
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 animate-pulse px-4 rounded-t py-2 border-b border-blue-700">
        <span className="font-mono text-sm tracking-wide pb-1 border-b border-blue-700 text-blue-400">
          CRISTAL_TERMINAL v7.5.0
        </span>
      </div>

      <div
        ref={terminalRef}
        className="bg-gray-800 font-sans border border-blue-700 p-3 space-y-3 min-h-32 max-h-[50vh] overflow-y-auto scroll-terminal"
      >
        <CristalFeedback messages={cristalMessages} />
      </div>

      <div className="flex-1 overflow-y-scroll border-blue-700 border p-3 space-y-4">
        <CristalMissionTerminal />
      </div>

      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 animate-pulse px-4 py-2 text-xs rounded-b font-sans text-blue-400">
        {gameState.cristalMode
          ? `STEP: ${gameState.cristalStep + 1}/5`
          : `STEP: ${gameState.tutorialStep + 1}/7`}
      </div>
    </div>
  );
}
