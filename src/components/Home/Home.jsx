import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

function Home() {
  // Liste des utilisateurs disponibles dans l'API
  const availableUsers = [
    { id: 12, name: 'Thomas Durand', dataSource: 'Données fictives' },
    { id: 18, name: 'Cecilia Ratorez', dataSource: 'Données API' }
  ];

  return (
    <main className={styles.container}>
      <h1>Bienvenue sur SportSee</h1>
      <p>Sélectionnez un utilisateur pour voir son tableau de bord :</p>
      
      <div className={styles.userList}>
        {availableUsers.map(user => (
          <Link 
            key={user.id} 
            to={`/user/${user.id}`} 
            className={styles.userCard}
          >
            <div className={styles.userIcon}>{user.name.charAt(0)}</div>
            <div className={styles.userName}>{user.name}</div>
            <div className={styles.dataSource}>{user.dataSource}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home; 