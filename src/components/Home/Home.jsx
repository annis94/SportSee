import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import { getUserData } from '../../services/api';
import { mockUsers } from '../../services/mockData';

function Home() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // On récupère les données pour les deux utilisateurs
        const user12 = await getUserData('thomas-durand');
        const user18 = await getUserData('cecilia-ratorez');
        
        if (user12 && user18) {
          setUsers([
            { id: 12, slug: 'thomas-durand', name: user12.userInfos.name },
            { id: 18, slug: 'cecilia-ratorez', name: user18.userInfos.name }
          ]);
        } else {
          setError('Impossible de récupérer les utilisateurs');
        }
      } catch (err) {
        setError('Une erreur est survenue lors du chargement des utilisateurs');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <main className={styles.container}>
        <h1>Bienvenue sur SportSee</h1>
        <p>Chargement des utilisateurs...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.container}>
        <h1>Bienvenue sur SportSee</h1>
        <p className={styles.error}>{error}</p>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <h1>Bienvenue sur SportSee</h1>
      <p>Sélectionnez un utilisateur pour voir son tableau de bord :</p>
      
      <div className={styles.userList}>
        {users.map(user => (
          <Link 
            key={user.id} 
            to={`/user/${user.slug}`} 
            className={styles.userCard}
          >
            <div className={styles.userIcon}>{user.name.charAt(0)}</div>
            <div className={styles.userName}>{user.name}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home; 