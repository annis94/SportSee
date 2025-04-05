import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <main className={styles.container}>
      <h1>404</h1>
      <h2>Page non trouvée</h2>
      <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
      <Link to="/" className={styles.button}>
        <Home size={20} style={{ marginRight: '8px' }} />
        Retour à l'accueil
      </Link>
    </main>
  );
}

export default NotFound; 