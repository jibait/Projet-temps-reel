# Projet-temps-reel

## Description du Projet

Le projet **Chatroom en Temps Réel** --> *Blopfish Roo est une application de messagerie en temps réel qui utilise RabbitMQ pour la gestion des messages. L'application permet aux utilisateurs de discuter en temps réel dans une interface de chat, avec la possibilité d'envoyer des messages textuels et des images.

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

- npm 
- RabbitMQ en cours d'exécution

## Installation

1. Clonez le dépôt :

    ```sh
    git clone <URL_DU_DEPOT>
    cd <NOM_DU_REPERTOIRE>
    ```

2. Installez les dépendances du projet :

    ```sh
    npm install
    ```

3. Générer les swaggers (si besoin):

    ```sh
    npm run generate-api
    ```

## Configuration

### Démarrage du Serveur de Développement

1. **Démarrer le serveur backend** (si applicable) :

    Assurez-vous que RabbitMQ est en cours d'exécution et que le serveur backend est configuré pour se connecter à RabbitMQ.

2. **Démarrer l'application frontend** :

    ```sh
    npm start
    ```

    L'application sera accessible sur `http://localhost:3000`.

### Mock des Données

Pour tester l'application avec des données simulées, vous pouvez utiliser `json-server`. Assurez-vous que le fichier `mockData.json` est correctement configuré pour le mock des données.

1. Lancez le serveur `json-server` pour servir les données mockées :

    ```sh
    json-server --watch public/mockData.json --port 5000
    ```

    Vous pouvez accéder aux données mockées via `http://localhost:5000/messages`.

### Utilisation de la Modale de Profil

Pour définir votre pseudo et votre photo de profil :

1. Cliquez sur l'icône de profil dans la barre de navigation.
2. Une modale apparaîtra, vous permettant de saisir votre pseudo et de choisir une photo de profil parmi les options prédéfinies ou d'en télécharger une nouvelle.

## Commandes Utiles

- `npm install` : Installer les dépendances du projet.
- `npm start` : Démarrer l'application en mode développement.
- `json-server --watch public/mockData.json --port 5000` : Démarrer le serveur de données mockées.