import { useGPTOverlord } from "./GPTOverlordContext";
import UglyInspirationButton from "./UglyInspirationButton";
import InspirationButton from "./InspirationButton";

export default function ConditionalInspirationButtons() {
  const { gameState } = useGPTOverlord();

  const showUgly =
    !gameState.cristalMode &&
    gameState.tutorialStep >= 3 &&
    gameState.tutorialStep <= 5;

  const showTrue = gameState.cristalMode
    ? gameState.cristalStep >= 2
    : gameState.tutorialStep > 5;

  return (
    <>
      {showUgly && <UglyInspirationButton />}
      {showTrue && <InspirationButton />}
    </>
  );
}
