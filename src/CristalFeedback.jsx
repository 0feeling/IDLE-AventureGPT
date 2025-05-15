import React from "react";

export default function CristalFeedback({ messages }) {
  return (
    <div className="text-blue-300 font-mono text-sm space-y-3">
      <div className="bg-gray-800 px-3 py-2 rounded-md border border-gray-700 shadow-sm">
        <span className="text-blue-400 font-semibold tracking-wide">
          ⚜️ Cristal.ia — Helper
        </span>
      </div>

      {messages.map((msg, index) => (
        <pre
          key={index}
          className="bg-gray-900 p-3 rounded-md border border-gray-700 text-blue-200 text-sm overflow-x-hidden whitespace-pre-wrap break-words"
        >
          {msg.split("\n").map((line, lineIndex) => (
            <div key={lineIndex} className="flex items-start">
              {lineIndex === 0 ? (
                <span className="text-blue-400 mr-2">⮞</span>
              ) : (
                <span className="w-4" />
              )}
              <span className="flex-1">{line}</span>
            </div>
          ))}
        </pre>
      ))}
    </div>
  );
}
