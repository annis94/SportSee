import styles from './LoadingError.module.scss';

/**
 * Composant pour afficher les états de chargement et d'erreur
 * @param {Object} props - Propriétés du composant
 * @param {boolean} props.isLoading - Indique si les données sont en cours de chargement
 * @param {Object} props.error - Objet d'erreur, si une erreur s'est produite
 * @param {Function} props.onRetry - Fonction à appeler pour réessayer de charger les données
 */
function LoadingError({ isLoading, error, onRetry }) {
  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.spinner}></div>
        <p>Chargement des données...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <p>Une erreur est survenue lors du chargement des données.</p>
          <p className={styles.errorMessage}>{error.message}</p>
          {onRetry && (
            <button className={styles.retryButton} onClick={onRetry}>
              Réessayer
            </button>
          )}
        </div>
      </div>
    );
  }

  return null;
}

export default LoadingError; 