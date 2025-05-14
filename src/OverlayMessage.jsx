import React, { useEffect, useState } from "react";
import { useGPTOverlord } from "./GPTOverlordContext";

function OverlayMessage() {
  const { gameState } = useGPTOverlord();
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [showAutoMessage, setShowAutoMessage] = useState(false);

  useEffect(() => {
    if (gameState.autoIdeaUnlocked) {
      setShowAutoMessage(true);
    }
  }, [gameState.autoIdeaUnlocked]);

  const shouldShowOverlay = showWelcomeMessage || showAutoMessage;

  if (!shouldShowOverlay) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="bg-gray-900 border border-gray-700 p-8 rounded-xl max-w-2xl mx-4 text-white shadow-xl text-center animate-fade-in space-y-6">
        {showWelcomeMessage && (
          <>
            <h2 className="text-3xl font-bold text-yellow-400">
              👋 Bienvenue dans IDLE-AventureGPT
            </h2>

            <div className="text-base text-gray-200 leading-relaxed space-y-4">
              <p>
                Salut ! <br />
                Je suis <strong>le créateur de ce jeu</strong>,
              </p>

              <p>
                Tu t'apprêtes à vivre une aventure où{" "}
                <span className="text-green-300">code</span>,{" "}
                <span className="text-blue-300">découverte</span> et{" "}
                <span className="text-yellow-300">créativité</span> <br />
                se rencontrent et s'entremêlent.
              </p>

              <p>
                Il y aura des bugs, des erreurs, des moments de doute mais aussi{" "}
                <br />
                des surprises, des réussites, et des moments de rigolade.
              </p>

              <p>
                Alors prends ton temps pour explorer, et j'espère que tu
                t'amuseras. <br />
                Ici, grands débutants comme dev' seniors ont leur place.
              </p>

              {/* Saut de ligne visuel */}
              <div className="h-2" />

              <p className="italic">Bon jeu !</p>
              <p className="text-right mr-20">
                <strong> - Tim -</strong>
              </p>
            </div>

            <button
              onClick={() => setShowWelcomeMessage(false)}
              className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded shadow"
            >
              Commencer l’aventure !
            </button>
          </>
        )}

        {showAutoMessage && (
          <>
            <h1 className="text-2xl font-bold underline text-blue-400 animate-pulse">
              ⚡ Auto-Générateur Débloqué ⚡
            </h1>
            <h2 className="text-gray-300 text-base leading-relaxed">
              Tu viens d’activer la{" "}
              <strong>production passive d’inspiration</strong>.
              <br />
              <br />
              <p className="text-yellow-300 text-xl mt-2">
                💡 Les générateurs produisent maintenant de l'Inspiration 💡
              </p>
              <br />
              "L'Inspiration ne rime pas forcément avec la transpiration"
              <p className="font-style: italic"> - Bertrand Lavier</p>
            </h2>
            <button
              onClick={() => setShowAutoMessage(false)}
              className="mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow-md"
            >
              OK
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default OverlayMessage;
