import { useGPTOverlord } from "./GPTOverlordContext";
import UglyInspirationButton from "./UglyInspirationButton";
import InspirationButton from "./InspirationButton";

export default function ConditionalInspirationButtons() {
  const { gameState } = useGPTOverlord();

  // Affiche UglyButton uniquement en mode Cristal avant l'étape 5
  const showUgly = gameState.cristalMode && gameState.cristalStep <= 5;

  // Affiche InspirationButton quand l'étape 5 Cristal est validée
  const showTrue = gameState.cristalMode && gameState.cristalStep > 5;

  return (
    <>
      {showUgly && <UglyInspirationButton />}
      {showTrue && <InspirationButton />}

      {/* Garder les boutons pour le mode CatGPT */}
      {!gameState.cristalMode && (
        <>
          {gameState.tutorialStep >= 3 && gameState.tutorialStep <= 5 && (
            <UglyInspirationButton />
          )}
          {gameState.tutorialStep > 5 && <InspirationButton />}
        </>
      )}
    </>
  );
}
