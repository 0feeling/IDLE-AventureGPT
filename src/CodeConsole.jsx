import React from "react";
import { useGPTOverlord } from "./GPTOverlordContext";
// import { getStepMessages } from "./stepConsoleMessages";

const stepCodeMessages = {
  0: `// ===================================================
// > Système initialisé… ✓
// -> Chargement du module CATGPT ███████ 100%
// > Utilisateur détecté ✓
// ===================================================
// > Lancement de l’aventure [OK]
// > Utilisateur : {userName} {}
// > Statut : prêt
// ===================================================`,
  1: (userNom) =>
    `// -> Utilisateur : ${userNom} est prêt à commencer l’Aventure`,
  2: `// -> Boîte de dialogue déclenchée : 'Let's go!'`,
  3: `// > console.log exécution -> 
// Hello World!
// -> Signal bien reçu
// -> Communication avec la machine établie`,
  4: `// <HTML> BOUTON AJOUTÉ
// -> <button>Inspiration</button>
// -> Interface utilisateur enrichie
// -> Élément détecté mais INACTIF`,
  5: `// > FONCTION gainInspiration détectée
// -> Action utilisateur connectée
// -> Bouton activé : +1 Inspiration`,
  6: `// > FONCTION autoClick() validée
// -> Système d'automatisation enclenché
// -> Auto-Clicker = +1 Inspiration toutes les 4s.`,
  7: `// > Commande secrète détectée...
// -> Analyse : who.is.cristal()
// -> Chargement du module CRISTAL.IA ███████ 100%
// -> Transition vers le mode Expert`
};

const cristalCodeMessages = {
  0: `// === MODE CRISTAL ACTIVÉ ===\n// Déclaration de souveraineté numérique nécessaire`,
  1: `// Analyse des styles en cours...\n// Application Bon Goût nécéssaire`,
  2: `// Purification linguistique initialisée\n// Remplacement nécéssaire`,
  3: `// Boucle patriotique activée:\n
  // Vive Cristal
  // Vive Cristal
  // Vive Cristal
  // Vive Cristal
  // Vive Cristal
  // Vive Cristal
  // Vive Cristal
  // Vive Cristal
  // Vive Cristal
  // Vive Cristal
  // Vive Cristal
  // Vive Cristal\n
  // ERROR
  // > Système réinitialisé… ✓\n
  // Overflow stoppé`,
  4: `// Suppression des éléments étrangers...\n// CatGPT désinstallé`,
  5: `// Exécution de débloquerBoutonDoré() nécéssaire\n//`,
  6: `// === RÉGIME TOTAL CRISTAL ÉTABLI ===\n// Production d'inspiration ×1.3
  // Récompense dorée débloquée`
};

export default function CodeConsole() {
  const { gameState } = useGPTOverlord();
  const currentUserNom = gameState.userNom;

  const currentStep = gameState.cristalMode
    ? gameState.cristalStep
    : Math.max(gameState.tutorialStep, 0);

  return (
    <div className="bg-gray-800 border-t border-gray-700 h-96 flex flex-col">
      <div className="bg-gray-900 p-3 border-b border-gray-700 rounded-t flex justify-between items-center">
        <h2 className="text-yellow-300 text-xs uppercase tracking-wide font-semibold">
          CONSOLE
        </h2>
        <span className="text-gray-400 text-xs">v1.0.0</span>
      </div>

      <div className="flex-1 overflow-y-auto p-3 font-mono border border-gray-700 text-sm space-y-4">
        {/* Section Progression */}
        {/* <div>
          <div className="text-green-400 mb-2">// Progression :</div>
          {getStepMessages(
            gameState.cristalMode
              ? gameState.cristalStep
              : gameState.tutorialStep,
            gameState.cristalMode
          ).map((line, index) => (
            <div key={`success-${index}`} className="text-gray-300 mb-1">
              <span className="text-green-400">✔</span> {line}
            </div>
          ))}
        </div> */}

        {/* Code validé */}
        {/* Section Cristal */}
        {gameState.cristalMode ? (
          <div className="mb-4">
            <div className="text-gray-300 mb-2">// Execution:</div>
            <pre className="text-gray-300 whitespace-pre-wrap border border-gray-700 rounded p-2">
              {cristalCodeMessages[gameState.cristalStep] ||
                "// Aucun message système"}
            </pre>
          </div>
        ) : (
          <div>
            <div className="text-gray-300 mb-2">// Execute :</div>
            <pre className="text-gray-300 whitespace-pre-wrap border border-gray-700 rounded p-2">
              {(typeof stepCodeMessages[currentStep] === "function"
                ? stepCodeMessages[currentStep](currentUserNom)
                : stepCodeMessages[currentStep]?.replace?.(
                    "{userName}",
                    currentUserNom
                  )) || "// (No output for this step)"}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
