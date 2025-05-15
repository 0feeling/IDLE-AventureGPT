import { useGPTOverlord } from "./GPTOverlordContext";
import UglyInspirationButton from "./UglyInspirationButton";
import InspirationButton from "./InspirationButton";

export default function ConditionalInspirationButtons() {
  const { gameState } = useGPTOverlord();

  const showUglyGray = !gameState.cristalMode && gameState.tutorialStep === 4;

  const showUglyWhite =
    (!gameState.cristalMode &&
      (gameState.tutorialStep === 5 || gameState.tutorialStep === 6)) ||
    (gameState.cristalMode && gameState.cristalStep <= 5);

  const showInspirationYellow =
    gameState.cristalMode && gameState.cristalStep >= 6;

  return (
    <>
      {showUglyGray && <UglyInspirationButton isActive={false} />}
      {showUglyWhite && <UglyInspirationButton isActive={true} />}
      {showInspirationYellow && <InspirationButton />}
    </>
  );
}
