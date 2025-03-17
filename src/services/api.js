import axios from 'axios';
import { mockUserData, mockActivity, mockAverageSessions, mockPerformance } from './mockData';

// Configuration de l'URL de base de l'API
// Idéalement, cela devrait être dans un fichier .env
const API_BASE_URL = 'http://localhost:3000';

// Nous n'utilisons plus cette variable globale car nous allons décider par utilisateur
// const USE_MOCK_DATA = false;

/**
 * Formatte les données utilisateur pour standardiser la structure
 * @param {Object} data - Données brutes de l'API
 * @returns {Object} - Données formatées
 */
const formatUserData = (data) => {
  // Certains utilisateurs ont todayScore, d'autres ont score
  const score = data.todayScore || data.score;
  
  return {
    id: data.id,
    userInfos: data.userInfos,
    score: score,
    keyData: data.keyData
  };
};

/**
 * Vérifie si la réponse de l'API est valide
 * @param {Object} response - Réponse de l'API
 * @returns {Boolean} - True si la réponse est valide
 */
const isValidResponse = (response) => {
  return response && response.data && response.data.data;
};

/**
 * Détermine si on doit utiliser les données fictives pour un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Boolean} - True si on doit utiliser les données fictives
 */
const shouldUseMockData = (userId) => {
  // Utiliser les données fictives uniquement pour l'utilisateur 12 (Thomas Durand)
  return userId === 12;
};

/**
 * Récupère les informations de l'utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise} - Données de l'utilisateur
 */
export const getUserData = async (userId) => {
  if (shouldUseMockData(userId)) {
    console.log(`Utilisation des données fictives pour l'utilisateur ${userId}`);
    return Promise.resolve(mockUserData);
  }
  
  try {
    console.log(`Utilisation de l'API pour l'utilisateur ${userId}`);
    const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
    
    if (!isValidResponse(response)) {
      throw new Error("Données utilisateur invalides reçues de l'API");
    }
    
    return formatUserData(response.data.data);
  } catch (error) {
    console.error('Erreur lors de la récupération des données utilisateur:', error);
    throw error;
  }
};

/**
 * Récupère les données d'activité de l'utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise} - Données d'activité
 */
export const getUserActivity = async (userId) => {
  if (shouldUseMockData(userId)) {
    return Promise.resolve(mockActivity);
  }
  
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}/activity`);
    
    if (!isValidResponse(response)) {
      throw new Error("Données d'activité invalides reçues de l'API");
    }
    
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données d\'activité:', error);
    throw error;
  }
};

/**
 * Récupère les données de sessions moyennes de l'utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise} - Données de sessions
 */
export const getUserAverageSessions = async (userId) => {
  if (shouldUseMockData(userId)) {
    return Promise.resolve(mockAverageSessions);
  }
  
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}/average-sessions`);
    
    if (!isValidResponse(response)) {
      throw new Error("Données de sessions invalides reçues de l'API");
    }
    
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de sessions:', error);
    throw error;
  }
};

/**
 * Récupère les données de performance de l'utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Promise} - Données de performance
 */
export const getUserPerformance = async (userId) => {
  if (shouldUseMockData(userId)) {
    return Promise.resolve(mockPerformance);
  }
  
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}/performance`);
    
    if (!isValidResponse(response)) {
      throw new Error("Données de performance invalides reçues de l'API");
    }
    
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de performance:', error);
    throw error;
  }
}; 