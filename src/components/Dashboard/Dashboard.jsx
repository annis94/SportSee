import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import DailyActivity from '../DailyActivity/DailyActivity';
import SessionDuration from '../SessionDuration/SessionDuration';
import Performance from '../Performance/Performance';
import Score from '../Score/Score';
import KeyData from '../KeyData/KeyData';
import LoadingError from '../LoadingError/LoadingError';
import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../services/api';

function Dashboard() {
  // Récupération de l'ID utilisateur depuis l'URL
  const { userId } = useParams();
  const userIdNumber = parseInt(userId, 10);
  
  // États pour stocker les données
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [sessionsData, setSessionsData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  
  // États pour gérer le chargement et les erreurs
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fonction pour récupérer les données, optimisée avec useCallback
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Récupération de toutes les données en parallèle
      const [user, activity, sessions, performance] = await Promise.all([
        getUserData(userIdNumber),
        getUserActivity(userIdNumber),
        getUserAverageSessions(userIdNumber),
        getUserPerformance(userIdNumber)
      ]);
      
      // Mise à jour des états avec les données récupérées
      setUserData(user);
      setActivityData(activity);
      setSessionsData(sessions);
      setPerformanceData(performance);
      
      setIsLoading(false);
    } catch (err) {
      console.error('Erreur lors de la récupération des données:', err);
      setError(err);
      setIsLoading(false);
    }
  }, [userIdNumber]);

  // Récupération des données au chargement du composant
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Fonction pour afficher un message si aucune donnée n'est disponible
  const renderNoDataMessage = (type) => (
    <div className="no-data-message">
      <p>Aucune donnée {type} disponible pour cet utilisateur.</p>
    </div>
  );

  return (
    <main className="main-content">
      <LoadingError 
        isLoading={isLoading} 
        error={error} 
        onRetry={fetchData} 
      />
      
      {!isLoading && !error && userData && (
        <>
          <h1>Bonjour <span className="name">{userData.userInfos.firstName}</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👋</p>
          
          <div className="dashboard-container">
            <div className="charts-container">
              {activityData ? (
                <DailyActivity data={activityData} />
              ) : (
                renderNoDataMessage("d'activité")
              )}
              <div className="small-charts">
                {sessionsData ? (
                  <SessionDuration data={sessionsData} />
                ) : (
                  renderNoDataMessage("de sessions")
                )}
                {performanceData ? (
                  <Performance data={performanceData} />
                ) : (
                  renderNoDataMessage("de performance")
                )}
                {userData.score ? (
                  <Score score={userData.score} />
                ) : (
                  renderNoDataMessage("de score")
                )}
              </div>
            </div>
            {userData.keyData ? (
              <KeyData data={userData.keyData} />
            ) : (
              renderNoDataMessage("nutritionnelles")
            )}
          </div>
        </>
      )}
    </main>
  );
}

export default Dashboard; 