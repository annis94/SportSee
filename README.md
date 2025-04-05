# SportSee - Tableau de bord d'analytics sportives

Ce projet est un tableau de bord d'analytics sportives développé avec React et Recharts. Il permet aux utilisateurs de suivre leur activité physique, leurs sessions d'entraînement et leurs données nutritionnelles.

## 🚀 Démarrage rapide

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn
- Un navigateur moderne (Chrome, Firefox, Safari, Edge)

### Installation

1. **Backend (API)**
```bash
git clone https://github.com/OpenClassrooms-Student-Center/SportSee.git backend
cd backend
npm install
npm run dev
```
Le backend sera disponible sur http://localhost:3000

2. **Frontend**
```bash
cd ..
npm install
npm run dev
```
Le frontend sera disponible sur http://localhost:5173

## 📱 Utilisation

1. Accédez à http://localhost:5173
2. Sur la page d'accueil, sélectionnez un utilisateur (Thomas ou Cecilia)
3. Visualisez les données de l'utilisateur :
   - Activité quotidienne (poids et calories)
   - Durée des sessions
   - Types de performance
   - Score d'objectif
   - Données nutritionnelles

### Gestion des erreurs

- Les URLs invalides redirigent vers une page 404 personnalisée
- Seuls les utilisateurs avec les IDs 12 et 18 sont disponibles
- Les IDs non numériques ou invalides sont automatiquement redirigés vers la page 404
- Un message d'erreur s'affiche en cas de problème de chargement des données

## 🏗 Structure du projet

```
src/
├── components/           # Composants React
│   ├── DailyActivity/   # Graphique d'activité quotidienne
│   ├── Header/          # En-tête de l'application
│   ├── KeyData/         # Données nutritionnelles
│   ├── LoadingError/    # Gestion des états de chargement et d'erreur
│   ├── NotFound/        # Page 404 personnalisée
│   ├── Performance/     # Graphique de performance
│   ├── Score/           # Graphique de score
│   ├── SessionDuration/ # Graphique de durée des sessions
│   └── Sidebar/         # Barre latérale
├── services/            # Services pour les appels API
│   ├── api.js          # Service pour les appels API
│   └── mockData.js     # Données fictives pour le développement
├── styles/             # Styles globaux
├── App.jsx            # Composant principal
└── main.jsx          # Point d'entrée de l'application
```

## 📊 Fonctionnalités détaillées

### Graphiques
- **Activité quotidienne** : Suivi du poids et des calories brûlées
- **Sessions moyennes** : Durée des sessions d'entraînement
- **Performance** : Radar chart des différentes performances
- **Score** : Progression vers l'objectif quotidien

### Données nutritionnelles
- Calories
- Protéines
- Glucides
- Lipides

## 🔄 Mode développement

Pour utiliser les données mockées pendant le développement :

1. Ouvrez `src/services/api.js`
2. Modifiez la variable `USE_MOCK_DATA` :
```javascript
const USE_MOCK_DATA = true; // true pour les données mockées, false pour l'API
```

## 🌐 API Endpoints

Base URL : `http://localhost:3000`

| Endpoint | Description |
|----------|-------------|
| `/user/${userId}` | Informations utilisateur |
| `/user/${userId}/activity` | Activité quotidienne |
| `/user/${userId}/average-sessions` | Sessions moyennes |
| `/user/${userId}/performance` | Données de performance |

**Note** : Seuls les utilisateurs 12 et 18 sont disponibles dans l'API.

## 🛠 Technologies utilisées

- React 18
- React Router v7
- Recharts
- Axios
- SASS Modules
- Lucide React (pour les icônes)

## 📝 Notes de développement

- L'application utilise des modules SCSS pour un style modulaire
- Les composants sont optimisés avec React.memo où nécessaire
- La gestion d'erreur est implémentée à tous les niveaux
- Les données sont validées avant affichage
- Design responsive avec points de rupture pour desktop et tablette 