import PropTypes from 'prop-types';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img src="/images/logo.svg" alt="SportSee logo" />
      </a>
      <nav className={styles.nav}>
        <a href="/">Accueil</a>
        <a href="/profile">Profil</a>
        <a href="/settings">Réglage</a>
        <a href="/community">Communauté</a>
      </nav>
    </header>
  );
}

export default Header;