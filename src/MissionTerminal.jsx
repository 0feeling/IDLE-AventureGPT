import React from "react";
import { useGPTOverlord } from "./GPTOverlordContext";

const missionMessages = {
  0: `CatGPT : 🌟  
Hello Hello ❗️ Welcome welcome ❗️ 👋  
Here we go pour ton aventure digitale ⚡💻

First mission :  
👉 Tape ton prénom dans l’Editor ✍️

Yes, just like that.  
Juste ton petit first name, sans guillemets, sans rien 🧠

Ça me permet de te connaître a little more 😺  
And c’est symbolic : **chaque héros commence en signant son nom !** 🦸‍♀️🦸‍♂️`,

  1: `CatGPT : 🚨  
Alors comme ça tu es vraiment ready ? ❗️ 🤔  
Proove it avec une alerte ❗️❗️ 😱💬⚠️

Step 1 👉 Type in the Editor :  
alert

C’est une **function** spéciale qui fait pop une boîte à l’écran ❗️ 🎁  
Un peu comme un message surprise 🎉🎊

Step 2 👉 Ajoute une paire de parenthèses :  
( ) 🫧

Step 3 👉 Dedans, place un petit message pour dire que tu es ready ❗️  
Like : let's go! 🏁

Step 4 👉 Entoure le message avec des quotes simples :  
'let’s go!' 

Et... BOOM 💥💣  
Tu viens de create ton first pop-up de code ❗️  
Ça c’est du power level 1 💪✨🔥`,

  2: `CatGPT : 🔥  
Let’s gooo ❗️ 🎉🎈  
You’re about to write ton very 1st line de code 👨‍💻👩‍💻💻

Step 1 👉 Tape juste :  
' console ' 🖥️

Tu le vois partout dans les movies de hackers 😎💻💀  
Ce mot, c’est comme ouvrir un channel vers la machine 👾

Step 2 👉 Maintenant ajoute un petit point juste après :  
' . ' 🧩  

Yes ❗️ Comme dans console.log 🧠  
C’est lui qui va permettre d’**envoyer un message à la console** 📣

Step 3 👉 Maintenant, tu add une paire de parenthèses just après :  
' ( ) '  
Tu peux les coller au mot log, like that :  
' log() ' ⚙️

Step 4 👉 À l’intérieur, write ton message.  
The really famous :  
Hello World! 🌍💬

Step 5 👉 Place-le bien entre 2 quotes simples ''    
(tu peux aussi use des doubles " si tu préfères 😉😉 mais chez nous on use les simples 😉)

Alright ❗️  
✨ Tu viens send ton first message dans le Coding World 💌

It's like a signal…  
Un petit coucou digital au monde entier 🌍👾📡`,

  3: `CatGPT : 🖱️  
A nice webpage sans button? No way 😱🚫

Let’s fix that avec une touch de HTML 💡🧱

Step 1 👉 Tape le magic word :  
' button ' 🔘

Step 2 👉 Mets-le entre deux chevrons comme ça :  
' < > ' 🧲

Step 3 👉 Ajoute un petit mot entre les deux tags  
Quelque chose comme : Inspiration ✨💡

Step 4 👉 finish it en fermant le tag avec :  
' </button> ' 🎯

Résultat final : un big button bien shiny dès que tu vas execute ! 💥🔲  
  
Soon, il va devenir clickable... mais pas encore 😼⏳`,

  4: `CatGPT : 🛠️  
Cool button ❗️ Mais... il ne fait rien 🫠❌

Let’s lui donner un purpose ✨  
Time to create une real **function** qui va run when you clic ❗️ 🔁

Step 1 👉 Tape the magic keyword :  
function 🧙‍♂️

Step 2 👉 add a name à ta function.  
something like : gainInspiration 🪄

Step 3 👉 right after add des parenthèses et une paire d’accolades :  
() {} 🧩🧱

Tu viens de create a little Power ✨  
Et now... le button va avoir un real effect 💥  
That’s coding magic right there! 🧙‍♂️✨🌈`,

  5: `CatGPT : 🔁  
Tu clic depuis tout à l’heure...  
I bet que tu te dis : “Y’a pas un moyen que ça clic tout seul ?” 😩🤖

GOOD NEWS : Yes we can 🙌 Comme disait le Boss 🕶️🇺🇸

Let’s build une petite machine qui clique à ta place 🛠️  
Follow moi step by step 👇👇👇

🧩 Step 1 👉 Tape le mot magique :  
' function ' 
(c’est lui qui crée une nouvelle action 📦)

🧩 Step 2 👉 Ecris after this a name pour ta machine :  
' autoClick '
(c’est son p’tit nom 🤖)

🧩 Step 3 👉 Add une paire de parenthèses qui sont collées :  
' () ' 


🧩 Step 4 👉 Open une paire d’accolades pour mettre ce que ta machine va faire :  
' { } '

🧩 Step 5 👉 Inside les accolades, place this new function :  
' setInterval ' (, 4000)

🧩 Step 6 👉 Add une paire de parenthèses qui sont collées :  
' () ' 

🧩 Step 7 👉 Add inside la function qu'on a créé together before :  
' gainInspiration '

🧩 Step 8 👉 Add une virgule collée à ' gainInspiration' :  
' , ' 

🧩 Step 9 👉 Add a number :  
' 4000 ' 

🎯 Cette ligne va dire à ton programme :  
“hé ! appelle la function gainInspiration toutes les 4000 millisecondes ⏱️”

💡 Et 4000 millisecondes = 4 secondes  
Donc ça clique pour toi toutes les **4 secondes**, like a magic timer ⏰🎯

✨ Not so easy ! But tu viens de create something big !  
Ta machine va tourné toute seule now 🔁⚙️💰

🔓 But be careful my friend :  
you need 150 💡 pour pouvoir unlock cette étape !

C’est le price du confort 😸🛋️  
Don't worry, click juste a little more ! ☕🎮`,

  6: `CatGPT : 🕵️  
Hmmmm...  
Il y a something weird dans le système 👀📡

Un fichier hidden qui était locked 🔒 que j'ai crack 🗝️ 💥  🔐
With a name qui revient again and again... Cristal 🤨💎

J’ai trouvé une weird line dans ce old log.txt 📂📄 :  
"who.is.cristal()" 🧬

Try de la run dans la console... 🎯

Peut-être qu’un other Helper est en train de sleep quelque part 😼💤  
I hope il sera aussi nice que moi ! 💛`
};

export default function MissionTerminal() {
  const { gameState } = useGPTOverlord();
  const step = gameState.tutorialStep;

  return (
    <div className="bg-gray-800 p-2 text-green-300 font-mono text-sm">
      <div className="whitespace-pre-line">
        {missionMessages[step]?.split("\n").map((line, index) => (
          <p key={index} className="my-1">
            {line.replace(
              /`(.*?)`/g,
              '<code class="text-yellow-300">$1</code>'
            )}
          </p>
        )) || "CatGPT: Notre mission est complete at this moment"}
      </div>
    </div>
  );
}
