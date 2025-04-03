import axios from 'axios';
import { mockUsers, mockActivity, mockAverageSessions, mockPerformance } from './mockData';

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

// Fonction pour déterminer si on utilise les données mockées
const useMockData = () => {
  return process.env.NODE_ENV === 'development';
};

// Service pour récupérer les données utilisateur
export const getUserData = async (userId) => {
  if (useMockData()) {
    const user = mockUsers.find(u => u.id === userId);
    return user ? formatUserData(user) : null;
  }

  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}`);
    return formatUserData(response.data.data);
  } catch (error) {
    console.error('Erreur lors de la récupération des données utilisateur:', error);
    return null;
  }
};

// Service pour récupérer l'activité
export const getUserActivity = async (userId) => {
  if (useMockData()) {
    return mockActivity;
  }

  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'activité:', error);
    return null;
  }
};

// Service pour récupérer les sessions moyennes
export const getUserAverageSessions = async (userId) => {
  if (useMockData()) {
    return mockAverageSessions;
  }

  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des sessions moyennes:', error);
    return null;
  }
};

// Service pour récupérer les performances
export const getUserPerformance = async (userId) => {
  if (useMockData()) {
    return mockPerformance;
  }

  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des performances:', error);
    return null;
  }
}; 