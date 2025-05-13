README - IDLE-aventureGPT


Un jeu éducatif mêlant code, humour et gestion de ressources

Présentation de l'Application
IDLE-aventureGPT est un jeu vidéo éducatif et humoristique où le joueur apprend les bases de la programmation à travers des défis interactifs. Il est guidé par deux IA aux personnalités opposées : CatGPT, un chat espiègle qui parle en franglais, et Cristal, une IA rigoriste qui ne parle qu’en français, même pour les termes techniques de code. Ces deux IA proposent des missions différentes, offrant au joueur une expérience variée. Le joueur doit :

Résoudre des missions de codage étape par étape

Générer de l'Inspiration (ressource principale) via des mécaniques manuelles ou automatiques

Débloquer des générateurs d'inspiration de plus en plus complexes

Explorer les missions proposées par CatGPT et Cristal

Architecture des Composants
App.jsx
Rôle : Point d'entrée principal, structure l'interface

Logique :

Configure le contexte global (GPTOverlordContext)

Organise les 3 colonnes principales (Terminaux, Éditeur/Console, Missions/Générateurs)

Gère les overlays (messages de bienvenue, déblocages)

Rendu :

Layout responsive avec Flex/Grid

Interactions : Connecte tous les composants via le contexte

GPTOverlordContext.jsx
Rôle : Centralise l'état global du jeu

Logique :

Stocke : Inspiration, étapes tutoriel, générateurs, historique de code

Méthodes : advanceTutorialStep, buyGenerator, logToTerminal

Gère la persistance des données (localStorage)

Interactions :

Utilisé par TOUS les composants via useGPTOverlord()

Editor.jsx
Rôle : Zone de code principale

Logique :

Validation en temps réel avec ValidationService

Gestion des raccourcis (Ctrl+Enter pour exécuter)

Transition vers le mode Cristal via commande secrète

Rendu :

Zone de texte avec coloration syntaxique basique

Feedback immédiat (succès/erreurs)

Interactions :

Met à jour gameState.code

Déclenche advanceTutorialStep

MissionTerminal.jsx
Rôle : Affiche les instructions de mission (Mode CatGPT)

Logique :

Mappe les étapes (tutorialStep) aux messages prédéfinis

Formatage dynamique du code (surbrillance jaune)

Rendu :

Interface terminal style vieux PC (fond noir/texte vert)

Messages avec emojis et mise en forme créative

CristalMissionTerminal.jsx
Rôle : Version alternative pour les missions de Cristal

Logique :

Messages rigoureux et précis, avec un ton sérieux

Validation stricte des fonctions en français (ex : corps au lieu de body, fonction au lieu de function)

Rendu :

Palette bleu/noir

Iconographie sobre

CodeConsole.jsx
Rôle : Journal d'activité technique

Logique :

Affiche trois sections : instructions, progression, historique

Utilise getStepMessages pour le narratif

Rendu :

Panneau déroulant avec onglets virtuels

Style "développeur professionnel"

AllGeneratorsPanel.jsx
Rôle : Gestion de l'automatisation

Logique :

Filtre les générateurs accessibles (progression)

Calcule coûts/production avec formule exponentielle

Rendu :

Liste de cartes avec barres de progression

Animations au déblocage

GeneratorsData.jsx
Rôle : Catalogue des générateurs

Logique :

47 générateurs avec humour geek (ex: "Démon QA Intraitable")

Balance économique précise (coûts/production)

Interactions :

Alimente AllGeneratorsPanel

OverlayMessage.jsx
Rôle : Cinématiques interactives

Logique :

Gère deux états : bienvenue / déblocage auto-idée

Animation d'entrée/sortie

Rendu :

Fond noir semi-transparent

Texte centré avec bouton de fermeture

ValidationService.jsx
Rôle : Moteur de validation de code

Logique :

Deux modes : correspondance exacte / approximative

Regex dynamiques selon l'étape

Flux des Données
Cycle de Vie Principal

Événement utilisateur (ex : saisie de code)

Validation via ValidationService

Mise à jour du contexte (advanceStep, inspiration, etc.)

Rafraîchissement des composants via réactivité du contexte

Feedback visuel (terminaux, console, animations)

Style Visuel
Thème CatGPT : Vert et noir (cyberpunk ludique)

Thème Cristal : Bleu et noir (sérieux et minimaliste)

Animations :

Flottement texte (+1 💫)

Clignotements terminaux

Transitions fluides

Pour Commencer
Cliquez sur "y" dans l'éditeur pour démarrer les missions de CatGPT

Une fois que vous avez complété un certain nombre de missions, vous pouvez accéder aux missions de Cristal

Basculez entre les deux IA pour découvrir leurs différentes approches et missions

Document Technique - IDLE-aventureGPT
Version 1.0 - Architecture et Fonctionnement Interne

Présentation Technique

Stack : React + Vite + Tailwind CSS

Pattern : Centralisation d'état via Context API + Composants Fonctionnels

Complexité : ~45 composants interconnectés | ~3 500 lignes de code

Architecture Globale

src/  
├── components/      # Composants UI  
├── contexts/        # Gestion d'état  
├── data/            # Configurations statiques  
├── services/        # Logique métier  
└── styles/          # Global CSS + Animations
Composants Clés
3.1 GPTOverlordContext (Contexte Principal)

Stockage de l'état global (inspiration, étapes, générateurs)

Mécaniques de persistance (localStorage)

Calculs économiques (coûts/production)

3.2 Editor (Éditeur de Code)

Validation en temps réel via ValidationService

Gestion des hotkeys (Ctrl+Enter = exécution)

Transition vers le mode Cristal (who.is.cristal())

3.3 Mission System (Système de Missions)

MissionTerminal.jsx : Missions CatGPT (franglais)

CristalMissionTerminal.jsx : Missions Cristal (français strict)

3.4 Economic Engine (Moteur Économique)

Générateurs débloqués et automatisation de la production d'Inspiration

3.5 ValidationService

Validation stricte ou approximative des étapes de code

Mécaniques Avancées
Système de Logs

Affichage des événements du jeu via la console et le terminal

"dependencies": {
  "react": "^18.2.0",  
  "react-dom": "^18.2.0",  
  "lucide-react": "^0.264",      // Icônes  
  "tailwindcss": "^3.3.3"        // Styling  
}

Document rédigé par Ofeeling - Mise à jour du 13/05/2025
