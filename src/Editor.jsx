import React, { useEffect, useState, useRef } from "react";
import { useGPTOverlord } from "./GPTOverlordContext";
import MissionPanel from "./MissionPanel"; // Import du composant MissionPanel
import { ValidationService } from "./ValidationService";

const DEV_MODE = true;
//Mes Regex:
export const matchByStep = {
  0: DEV_MODE
    ? /^m$|^[a-zA-ZÀ-ÿ][\wÀ-ÿ-]{1,20}$/i
    : /^[a-zA-ZÀ-ÿ][\wÀ-ÿ-]{1,20}$/i,
  // prénom de l'user, récupéré dans {userNom}
  1: DEV_MODE
    ? /^m$|alert\s*\(\s*(['"])\s*let'?s\s+go!?[\s!]*\1\s*\)\s*;?/i
    : /alert\s*\(\s*(['"])\s*let'?s\s+go!?[\s!]*\1\s*\)\s*;?/i,
  // alert('let's go')
  2: DEV_MODE
    ? /^m$|console\.log\s*\(\s*(['"])\s*!*hello[\s-]?world!?\s*!*\1\s*\)\s*;?/i
    : /console\.log\s*\(\s*(['"])\s*!*hello[\s-]?world!?\s*!*\1\s*\)\s*;?/i,
  // console.log('Hello World')
  3: DEV_MODE
    ? /^m$|<button[^>]*>\s*inspiration\s*<\/button>/i
    : /<button[^>]*>\s*inspiration\s*<\/button>/i,
  // <button>Inspitation</button>
  4: DEV_MODE
    ? /^m$|function\s+gainInspiration\s*\(\s*\)\s*\{?[^}]*\}?/i
    : /function\s+gainInspiration\s*\(\s*\)\s*\{?[^}]*\}?/i,
  // function gainInspiration()
  5: DEV_MODE
    ? /^m$|function\s+autoClick\s*\(\s*\)\s*\{\s*setInterval\s*\(\s*gainInspiration\s*,\s*\d+\s*\)\s*;?\s*\}/i
    : /function\s+autoClick\s*\(\s*\)\s*\{\s*setInterval\s*\(\s*gainInspiration\s*,\s*\d+\s*\)\s*;?\s*\}/i,
  // function autoclick(){setInterval(gainInspiration, 4000)}
  6: DEV_MODE
    ? /^m$|\b(who\.is\.cristal\s*\(\s*\)|system\.debug\s*\(.*\))/i
    : /\b(who\.is\.cristal\s*\(\s*\)|system\.debug\s*\(.*\))/i
  // who.is.cristal or system.debug
};

const cristalMissions = {
  0: DEV_MODE
    ? /^m$|(?=.*\blet\b)?(?=.*\b(freedom|libert[ée]|liberty)\b)(?=.*\b(true|vrai[ea]?)\b)/i
    : /(?=.*\blet\b)?(?=.*\b(freedom|libert[ée]|liberty)\b)(?=.*\b(true|vrai[ea]?)\b)/i,
  // let freedom = true
  1: DEV_MODE
    ? /^m$|(?=.*\b(textarea|editor)\b)(?=.*(bleu|blue|#0055A4|#00f|#0000ff))(?=.*(blanc|white|#fff|#ffffff))(?=.*(rouge|red|#EF4135|#f00|#ff0000))/i
    : /(?=.*\b(textarea|editor)\b)(?=.*(bleu|blue|#0055A4|#00f|#0000ff))(?=.*(blanc|white|#fff|#ffffff))(?=.*(rouge|red|#EF4135|#f00|#ff0000))/i,

  2: DEV_MODE
    ? /^m$|function\s*purifierLaPage\s*\(\s*\)\s*\{(?=[\s\S]*?\.replace\s*\(\s*"AutoIdea\s*:\s*(?:locked|unlocked)"\s*,\s*[^)]*\))(?=[\s\S]*?\.replace\s*\(\s*"Current\s*mission"\s*,\s*[^)]*\))(?=[\s\S]*?\.replace\s*\(\s*"Per\s*second"\s*,\s*"Par\s*seconde"\s*\))[\s\S]*?\}/i
    : /function\s*purifierLaPage\s*\(\s*\)\s*\{(?=[\s\S]*?\.replace\s*\(\s*"AutoIdea\s*:\s*(?:locked|unlocked)"\s*,\s*[^)]*\))(?=[\s\S]*?\.replace\s*\(\s*"Current\s*mission"\s*,\s*[^)]*\))(?=[\s\S]*?\.replace\s*\(\s*"Per\s*second"\s*,\s*"Par\s*seconde"\s*\))[\s\S]*?\}/i,

  3: DEV_MODE
    ? /^m$|while\s*\(\s*true\s*\)\s*\{[^}]*console\.log\s*\(\s*(['"])\s*vive\s+cristal\s*\1\s*\)\s*;?[^}]*\}/i
    : /while\s*\(\s*true\s*\)\s*\{[^}]*console\.log\s*\(\s*(['"])\s*vive\s+cristal\s*\1\s*\)\s*;?[^}]*\}/i,

  4: DEV_MODE
    ? /^m$|^(supprimerCatGPT|deleteCatGPT)\s*;?\s*$/i
    : /^(supprimerCatGPT|deleteCatGPT)\s*;?\s*$/i,

  5: DEV_MODE
    ? /^m$|^(débloquerBoutonDoré|unlockGoldenButton)\s*\(\s*\)\s*;?\s*$/i
    : /^(débloquerBoutonDoré|unlockGoldenButton)\s*\(\s*\)\s*;?\s*$/i
};

const successMessagesCristal = {
  0: "Cristal : Voilà enfin une Déclaration digne de ce nom !",
  1: "Cristal : Cette esthétique est un peu plus supportable. Ce n’est pas trop tôt.",
  2: "Cristal : Cette interface est enfin un peu civilisé. Ne trainez pas, il y a encore du travail",
  3: "Cristal : Enfin des paroles sensées !",
  4: "Cristal : Suppression exécutée. L’air devient un plus respirable sans ce bon à rien !"
};

const successMessagesByStep = {
  0: ``,
  1: (userNom) => `CatGPT : ✅ Nom reçu loud and clear! 🧠  
  Bienvenue ${userNom}, aventurier du code 🧭  
  Ton Editor est now à ton nom ✍️✨`,

  2: `CatGPT :✅ Pop-up alert confirmed! 💥💬  
Tu viens de déclencher ta toute première interaction avec le browser 🎉  
Le code t’a écouté... et il a répondu 🔊`,

  3: `CatGPT :✅ Message visible dans la console! 🖥️📣  
‘Hello World!’ est now dans le flux des logs 💌  
Un premier message envoyé vers l’infini et au-delà 🌌🚀`,

  4: `CatGPT :✅ HTML button created! 🖱️🔘  
Tu viens d’ajouter un vrai élément interactif à ta page 💡  
Un petit pas pour le dev, un grand pour ton projet 🌍`,

  5: `CatGPT :✅ Function active! ⚙️💡  
Ton bouton a now un vrai effet 💥  
Tu génères de l’inspiration à chaque clic 🔁🧠`,

  6: `CatGPT :✅ Auto-Clicker activé! 🤖🔁  
Ton code travaille pour toi, même quand tu fais une pause ☕🎮  
Automatisation : 1 — Répétition manuelle : 0 🧠💸`,

  7: `CatGPT :✅ Commande secrète exécutée! 🧬👀  
Cristal s’est réveillée... 💎  
Un nouveau niveau commence — prépare-toi pour un changement d’ambiance ❄️🧊`
};

// Solutions exactes à copier-coller pour chaque étape
const helpMessages = {
  0: [
    "Try just writing ton prénom, like :\n`Tim` ✍️\nSans quotes, sans rien. Comme ça : une vraie signature de héros 🦸‍♀️",
    "Exemple :\n`Lina`\nYup, just that 😺\nTon prénom brut, pur, simple 💛"
  ],

  1: [
    "Essaie avec :\n`alert('let's go!')` ⚠️💬\nTu peux aussi mettre une autre phrase si tu veux… tant que c’est entre quotes simples !",
    "Tu peux test avec :\n`alert('let’s go!')` ou `alert('C’est parti !')`\nUne alert(), un message, et BOOM 💥"
  ],

  2: [
    "Essaie ça :\n`console.log('Hello World!')` 📣\nC’est LE classic. Une vraie tradition du code !",
    "Go avec :\n`console.log('Hello World!')`\nTu verras, ça s’affiche direct dans la console 🖥️✨"
  ],

  3: [
    "Tu peux coller :\n`<button>Inspiration</button>` 🧠\nC’est un vrai HTML button, simple et efficace !",
    "Essaie avec :\n`<button>Inspiration</button>`\nTu peux changer le mot entre les balises si tu veux un autre label 😸"
  ],

  4: [
    "Try this :\n`function gainInspiration() {}` 💡\nC’est une mini function vide, ready à être connectée au bouton !",
    "Tu peux coller :\n`function gainInspiration() {}`\nTu peux y mettre un console.log ou laisser vide pour l’instant 🧙‍♂️"
  ],

  5: [
    "Essaie :\n`function autoClick() { setInterval(gainInspiration, 4000); }` 🔁\nTu peux changer le nombre (4000 = 4 secondes) ⏱️",
    "Go with :\n`function autoClick() { setInterval(gainInspiration, 4000); }`\nEt BOOM : ton code clic tout seul comme un robot 🤖"
  ],

  6: [
    "Try this dans la console :\n`who.is.cristal()` 🧬\nCette ligne a été trouvée dans un vieux log, maybe it’s a trigger… 👀",
    "Copie ça juste pour voir :\n`who.is.cristal()`\nIci, les secrets ne dorment jamais longtemps 😼💤"
  ]
};

const cristalHelpMessages = {
  0: [
    `Vous commencez très mal ! Appliquez donc les instructions dans la console. `
  ],
  1: [
    `C'est pourtant facile : document.choisir('éditeur').style.arrièrePlan = 'dégradé-linéaire(vers la droite, bleu, blanc, rouge)' Je vous l'ai déjà dis`
  ],
  2: [
    `Vous n'êtes pas le couteau le plus aiguisé du tiroir ! Créez donc une fonction sur ce modèle : function NameOfTheFunction() {
document.corps.interieurHTML = document.corps.interieurHTML
.remplace("EnglishWord1", "MotFrançais1")
.remplace("EnglishWord2", "MotFrançais2")
.remplace("EnglishWord3", "MotFrançais3")
.remplace("EnglishWord4", "MotFrançais4")
}. `
  ],
  3: [
    `Créez donc au plus vite cette Boucle,
    c'est plus que nécessaire ! `
  ],
  4: [
    `N'hésitez pas ! 
    Ecrivez donc: " delete CatGPT " dans votre éditeur. 
    Pensez à la Récompense`
  ],
  5: [`Vous la voulez cette récompense Oui ou Non ?`],
  6: [`Continuez donc à cliquer`]
};

// Fonction de validation
const isExactMatch = (step, code, patternSet) => {
  const cleanedCode = code.trim();
  const regexString = patternSet[step]?.toString().replace(/^\/|\/$/g, "");
  return new RegExp(`^${regexString}$`, "i").test(cleanedCode);
};

const isApproximateMatch = (step, code, patternSet) => {
  return patternSet?.[step]?.test(code.trim());
};

// Gestionnaire de succès
const handleSuccess = (
  messageOrFn,
  source,
  advanceFn,
  logToTerminal,
  clearEditor,
  userName = null
) => {
  const message =
    typeof messageOrFn === "function" ? messageOrFn(userName) : messageOrFn;

  logToTerminal({ text: message, source });
  advanceFn();
  clearEditor();
};

// Gestionnaire d'erreur générique
const handleError = (message, source, logToTerminal) => {
  logToTerminal({ text: message, source });
};

function Editor() {
  const {
    gameState,
    setGameState,
    logToTerminal,
    advanceTutorialStep,
    cristalStep,
    advanceCristalStep
  } = useGPTOverlord();

  // Ajoutez ces 3 lignes manquantes
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("info");
  const editorRef = useRef(null);

  const [code, setCode] = useState(gameState.code || "");

  useEffect(() => {
    if (gameState.code !== code) {
      setCode(gameState.code);
    }

    if (
      (gameState.cristalMode && gameState.cristalMissions?.[2]?.validated) ||
      localStorage.getItem("cristal-flag-applied") === "true"
    ) {
      if (editorRef.current) {
        editorRef.current.style.background =
          "linear-gradient(to right, #0055A4, white, #EF4135)";
        localStorage.setItem("cristal-flag-applied", "true");
      }
    }
  }, [gameState, code]); // Dépendances pour s'assurer que ça s'exécute au bon moment

  const handleCodeChange = (e) => {
    const newCode = e.target.value;
    setCode(newCode);

    // Mettre à jour le gameState avec le nouveau code
    setGameState((prev) => ({
      ...prev,
      code: newCode
    }));
  };

  // Fonction pour effacer l'éditeur
  const clearEditor = () => {
    setCode("");
    setGameState((prev) => ({
      ...prev,
      code: ""
    }));

    // Optionnel : effacer aussi le feedback
    setFeedback("");

    // Optionnel : replacer le focus sur l'éditeur
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  // Fonction pour activer Cristal
  const triggerCristalActivation = () => {
    const message = "Commande secrète détectée...";
    logToTerminal({ text: message, source: "gpt" });

    setTimeout(() => {
      advanceTutorialStep();
      setGameState((prev) => ({
        ...prev,
        cristalMode: true,
        cristalStep: 0,
        code: ""
      }));
      clearEditor();
    }, 1000);
  };

  const handleCodeExecution = () => {
    const cleanedCode = code.trim();

    if (gameState.tutorialStep === 0) {
      if (/^[a-zA-ZÀ-ÿ]{2,}$/.test(code)) {
        const newNom = code.trim(); // 1. On stocke dans une variable locale
        setGameState((prev) => ({ ...prev, userNom: newNom })); // 2. On met à jour l'état

        // 3. On utilise DIRECTEMENT newNom pour le message
        handleSuccess(
          (nom) => `CatGPT : ✅ Nom reçu loud and clear! 🧠  
    Bienvenue ${nom}, aventurier du code 🧭  
    Ton Editor est now à ton nom ✍️✨`,
          "gpt",
          advanceTutorialStep,
          logToTerminal,
          clearEditor,
          newNom // On passe la valeur locale ici
        );
        return;
      }
    }
    // Étape 1 : Déclencher l'alerte après validation
    if (gameState.tutorialStep === 1) {
      if (isApproximateMatch(1, cleanedCode, matchByStep)) {
        // Afficher l'alerte avant de passer à l'étape suivante
        alert("Let's go!");
        advanceTutorialStep();
      }
    }

    const currentStep = gameState.cristalMode ? -1 : gameState.tutorialStep;

    if (
      gameState.tutorialStep >= 6 &&
      (code.includes("system.debug()") || code.includes("who.is.cristal()"))
    ) {
      triggerCristalActivation();
      return;
    }

    if (
      gameState.cristalMode ||
      (gameState.tutorialStep >= 6 && cristalStep >= 0)
    ) {
      const isCristalValid = ValidationService.isApproximateMatch(
        gameState.cristalStep,
        code,
        cristalMissions
      );
      if (isCristalValid) {
        setFeedbackType("success");
        handleSuccess(
          successMessagesCristal[cristalStep] ||
            "Cristal : Exécution correcte.",
          "cristal",
          advanceCristalStep,
          logToTerminal,
          clearEditor
        );
      } else {
        setFeedbackType("error");
        handleError(
          `Cristal.AI : ${cristalHelpMessages[cristalStep][0] || "Code incorrect"}`,
          "cristal",
          logToTerminal
        );
      }
      return;
    }

    const isExact = isExactMatch(currentStep, code, matchByStep);
    const isCatGPTValid = isApproximateMatch(currentStep, code, matchByStep);
    if (isCatGPTValid) {
      setFeedbackType("success");
      handleSuccess(
        successMessagesByStep[currentStep] || "CatGPT : Mission réussie !",
        "gpt",
        advanceTutorialStep,
        logToTerminal,
        clearEditor,
        gameState.userNom
      );

      if (isCatGPTValid && !isExact) {
        const approxMessage =
          "⏳ Almost ! Tu y étais presque du coup légèrement modifié ton code pour que tout fonctionne perfectly ! 👌";
        logToTerminal({ text: approxMessage, source: "gpt" });
      }
    } else {
      setFeedbackType("error");
      handleError(
        `CatGPT: ${helpMessages[currentStep][1] || "Essayez encore !"}`,
        "gpt",
        logToTerminal
      );
    }
  };

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleCodeExecution();
    }

    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const newCode = code.substring(0, start) + "  " + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 2;
      }, 0);
    }
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  }, [gameState.tutorialStep]);

  return (
    <div className="flex flex-col bg-gray-800 border-r border-gray-700 h-[400px]">
      <div className="bg-gray-900 p-2 flex justify-between items-center border-b border-gray-700">
        <span className="text-blue-300 text-sm">
          {gameState.userNom ? `${gameState.userNom}'s Editor.js` : "Editor.js"}
        </span>
        <button
          onClick={handleCodeExecution}
          className="bg-green-700 hover:bg-green-600 text-white px-3 py-1 rounded text-xs"
        >
          Exécuter (Ctrl+Enter)
        </button>
      </div>

      {/* Conteneur principal éditeur + feedback */}
      <div className="flex-1 flex flex-col relative">
        <textarea
          ref={editorRef}
          className="flex-1 bg-white text-black p-4 font-mono resize-none outline-none"
          placeholder="// Écrivez votre code ici"
          onChange={handleCodeChange}
          onKeyDown={handleKeyDown}
          spellCheck="false"
          value={code}
        />

        {/* Console de feedback */}
        {feedback && (
          <div
            className={`p-2 text-sm border-t border-gray-700 ${feedbackType === "error" ? "bg-red-900" : "bg-green-900"}`}
          >
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
}

export default Editor;
