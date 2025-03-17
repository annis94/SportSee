import { Bike, Dumbbell } from 'lucide-react';
import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <div className={styles.icon}>
          <img src="/images/icons/yoga.svg" alt="Yoga" />
        </div>
        <div className={styles.icon}>
          <img src="/images/icons/swim.svg" alt="Natation" />
        </div>
        <div className={styles.icon}>
          <Bike />
        </div>
        <div className={styles.icon}>
          <Dumbbell />
        </div>
      </nav>
      <p className={styles.copyright}>Copyright, SportSee 2020</p>
    </aside>
  );
}

export default Sidebar;