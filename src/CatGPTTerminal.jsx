import React from "react";
import { useGPTOverlord } from "./GPTOverlordContext";
import MissionTerminal from "./MissionTerminal";
import OverlordFeedback from "./OverlordFeedback";

export default function CatGPTTerminal() {
  const { gameState, terminalLogs } = useGPTOverlord();
  const [gptMessages, setGptMessages] = React.useState([]);
  const terminalRef = React.useRef(null);

  React.useEffect(() => {
    const filtered = terminalLogs
      .filter((log) => log.source === "gpt")
      .map((log) => log.text);
    setGptMessages(filtered);
  }, [terminalLogs]);

  React.useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [gptMessages]);

  return (
    <div className="flex flex-col z-3 bg-gray-900 h-full">
      <div className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 px-4 py-2 border-b border-green-700">
        <span className="font-mono text-sm tracking-wide animate-pulse pb-1 border-b border-green-700 text-green-400">
          CATGPT_TERMINAL v9.2.1
        </span>
      </div>

      <div
        ref={terminalRef}
        className="bg-gray-800 font-sans border border-green-700 p-3 space-y-3 min-h-32 max-h-[50vh] overflow-y-auto scroll-terminal"
      >
        <OverlordFeedback messages={gptMessages} />
      </div>

      <div className="flex-1 overflow-y-scroll border-green-700 border p-3 space-y-4">
        <MissionTerminal />
      </div>

      <div
        className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 animate-pulse px-4 py-2 text-xs rounded-b font-sans
       text-green-400"
      >
        {gameState.cristalMode
          ? `STEP : ? — Search Tasks for my Friend ... `
          : `CATGPT STEP: ${gameState.tutorialStep + 1}/7`}
      </div>
    </div>
  );
}
