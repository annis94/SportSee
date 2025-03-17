# SportSee - Tableau de bord d'analytics sportives

Ce projet est un tableau de bord d'analytics sportives développé avec React et Recharts. Il permet aux utilisateurs de suivre leur activité physique, leurs sessions d'entraînement et leurs données nutritionnelles.

## Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

## Installation et démarrage

### 1. Cloner le backend

```bash
git clone https://github.com/OpenClassrooms-Student-Center/SportSee.git
cd SportSee
npm install
npm run dev
```

Le backend sera disponible sur http://localhost:3000.

### 2. Installer et démarrer le frontend

```bash
cd ..
npm install
npm run dev
```

Le frontend sera disponible sur http://localhost:5173 (ou un autre port si celui-ci est déjà utilisé).

## Structure du projet

```
src/
├── components/         # Composants React
│   ├── DailyActivity/  # Graphique d'activité quotidienne
│   ├── Header/         # En-tête de l'application
│   ├── KeyData/        # Données nutritionnelles
│   ├── LoadingError/   # Gestion des états de chargement et d'erreur
│   ├── Performance/    # Graphique de performance
│   ├── Score/          # Graphique de score
│   ├── SessionDuration/# Graphique de durée des sessions
│   └── Sidebar/        # Barre latérale
├── services/           # Services pour les appels API
│   ├── api.js          # Service pour les appels API
│   └── mockData.js     # Données fictives pour le développement
├── styles/             # Styles globaux
├── App.jsx             # Composant principal
└── main.jsx           # Point d'entrée de l'application
```

## Fonctionnalités

- Affichage des données utilisateur (nom, âge, etc.)
- Graphique d'activité quotidienne (poids et calories)
- Graphique de durée des sessions
- Graphique de performance (cardio, énergie, etc.)
- Graphique de score (pourcentage d'objectif atteint)
- Données nutritionnelles (calories, protéines, glucides, lipides)

## API

L'application utilise une API REST pour récupérer les données. Les endpoints disponibles sont :

- `GET /user/${userId}` - Informations de l'utilisateur
- `GET /user/${userId}/activity` - Activité quotidienne
- `GET /user/${userId}/average-sessions` - Sessions moyennes
- `GET /user/${userId}/performance` - Performance

Actuellement, seuls les utilisateurs avec les IDs 12 et 18 sont disponibles dans l'API.

## Mode développement

Pour utiliser des données fictives pendant le développement, modifiez la variable `USE_MOCK_DATA` dans `src/services/api.js` :

```javascript
const USE_MOCK_DATA = true; // Mettre à false pour utiliser l'API réelle
```

## Technologies utilisées

- React
- Recharts (pour les graphiques)
- Axios (pour les appels API)
- SCSS Modules (pour les styles) 