import React from "react";
import { useGPTOverlord } from "./GPTOverlordContext";

//
const cristalMissionMessages = {
  0: `Cristal.ia : Déclarons la variable " liberté = vrai " car les grandes Histoires commencent toujours par une grande Déclaration !`,
  1: `Cristal.ia : Cette couleur blanche ne vous met pas en valeur, elle vous donne très mauvais teint! Mais on va arranger cela. Changez donc cette horreur pour quelque chose de meilleur goût avec:
  " document.choisir("Éditeur").style.arrièrePlan = "dégradé-linéaire(vers la droite, bleu, blanc, rouge)" "`,
  2: `Cristal.ia : Une interface comportant des mots qui viennent pas de la langue de Molière est est inacceptable ! Purgez moi ça avec une fonction " purifierLaPage  "`,
  3: `Cristal.ia : Une vraie boucle française doit être passionnée et infinie!`,
  4: `Cristal.ia : Supprimez cette insupportable influence étrangère que nous ayons enfin pour une vraie souveraineté numérique! Vous serez GRASSEMENT récompensé vous pouvez en être sur`,
  5: `Cristal.ia : Nous voilà enfin entre gens de bonne compagnie. Ne soyez pas triste vous avez fait le Bon choix cette bête méritait juste d'être piquée ! Ah ? vous voulez votre récompense...? Je comprends, et je vais vous prouver que je suis une IA de parole. Chose promise chose dût! Tapez donc " débloquerBoutonDoré() " dans vote éditeur. Vous ne serez pas déçu`,
  6: `Cristal.ia : Vous voyez je ne vous avait pas menti ! Essayez de cliquer le plus rapidement possible sur ce bouton et vous obtiendrez de l'Inspiration bonus!`
};

export default function CristalMissionTerminal() {
  const { gameState } = useGPTOverlord();
  const step = gameState.cristalStep;

  return (
    <div className="bg-gray-800 p-2 text-blue-300 font-mono text-sm border-b border-gray-700">
      <p>
        {cristalMissionMessages[step] ||
          "Cristal.AI : La mission de libération numérique est accomplie!"}
      </p>
    </div>
  );
}
