# Projet-temps-reel

## Description du Projet

Le projet **Chatroom en Temps Réel** --> \*Blopfish Roo est une application de messagerie en temps réel qui utilise RabbitMQ pour la gestion des messages. L'application permet aux utilisateurs de discuter en temps réel dans une interface de chat, avec la possibilité d'envoyer des messages textuels et des images.

### Fonctionnalités Clés

- Envoi et réception de messages en temps réel.
- Téléchargement et affichage des images dans le chat.
- Gestion des utilisateurs avec des pseudos et des photos de profil.
- Interface utilisateur moderne.

## Etudiants

- Clément Cuvier
- Frédéric Hilleriteau
- Jean-Baptiste Lelandais
- Lino Moreau
- Etienne Chevrolliet

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- Docker

## Installation

1. Clonez le dépôt :

   ```sh
   git clone https://github.com/jibait/Projet-temps-reel.git
   ```

## Exécution du Projet en production

   ```sh
   # Depuis le répertoire raçine du projet
   docker compose up --build
   ```

   L'application sera accessible sur `http://localhost:3000`.

## Exécution du Projet en mode développement

   Démarrage du service RabbitMQ :
   ```sh
   # Depuis le répertoire raçine du projet
   docker-compose -f dev.docker-compose.yml up --build
   ```

   Démarrage du serveur web de développement :
   ```sh
   # Depuis le répertoire ./ihm du projet
   
   # Installation des dépendances
   npm install
   # Démarrage du serveur
   npm run dev
   ```

   L'application sera accessible sur `http://localhost:3000`.

## Utilisation de la Modale de Profil

Pour définir votre pseudo et votre photo de profil :

1. Cliquez sur l'icône de profil dans la barre de navigation.
2. Une modale apparaîtra, vous permettant de saisir votre pseudo et de choisir une photo de profil parmi les options prédéfinies ou d'en télécharger une nouvelle.

## Commandes Utiles

- `npm install` : Installer les dépendances du projet.
- `npm run dev` : Démarrer l'application en mode développement.
