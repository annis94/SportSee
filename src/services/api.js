import axios from 'axios';
import { mockUsers, mockActivity, mockAverageSessions, mockPerformance } from './mockData';

// Configuration globale pour déterminer la source de données
// Le développeur peut changer cette valeur pour basculer entre mock et API
const USE_MOCK_DATA = true; // true pour utiliser les données mockées, false pour utiliser l'API

// Fonction pour standardiser les données utilisateur
const formatUserData = (data) => {
  return {
    ...data,
    score: data.score || data.todayScore || 0,
    userInfos: {
      ...data.userInfos,
      name: `${data.userInfos.firstName} ${data.userInfos.lastName}`
    }
  };
};

// Fonction pour trouver un utilisateur par son slug
const findUserBySlug = (slug) => {
  return mockUsers.find(u => u.slug === slug);
};

// Service pour récupérer les données utilisateur
export const getUserData = async (userSlug) => {
  if (USE_MOCK_DATA) {
    const user = findUserBySlug(userSlug);
    return user ? formatUserData(user) : null;
  }

  try {
    // Dans un environnement réel, l'API devrait accepter les slugs
    // Pour l'instant, on simule en extrayant l'ID du slug
    const userId = parseInt(userSlug.split('-')[0], 10);
    const response = await axios.get(`http://localhost:3000/user/${userId}`);
    return formatUserData(response.data.data);
  } catch (error) {
    console.error('Erreur lors de la récupération des données utilisateur:', error);
    throw error;
  }
};

// Service pour récupérer l'activité
export const getUserActivity = async (userSlug) => {
  if (USE_MOCK_DATA) {
    return mockActivity;
  }

  try {
    const userId = parseInt(userSlug.split('-')[0], 10);
    const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'activité:', error);
    throw error;
  }
};

// Service pour récupérer les sessions moyennes
export const getUserAverageSessions = async (userSlug) => {
  if (USE_MOCK_DATA) {
    return mockAverageSessions;
  }

  try {
    const userId = parseInt(userSlug.split('-')[0], 10);
    const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des sessions moyennes:', error);
    throw error;
  }
};

// Service pour récupérer les performances
export const getUserPerformance = async (userSlug) => {
  if (USE_MOCK_DATA) {
    return mockPerformance;
  }

  try {
    const userId = parseInt(userSlug.split('-')[0], 10);
    const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des performances:', error);
    throw error;
  }
}; 