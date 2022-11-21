import logo from '../../assets/images/logo.png';
import arrow from '../../assets/images/contact-icon.png';
import styles from './navigation.module.css';

const Navigation = () => (
  <nav className={styles.navContainer}>
    <div>
      <img className={styles.logo} src={logo} alt="soora-logo" />
    </div>
    <button className={styles.button}>
      <span className={styles.text}>
        Contact us
      </span>
      <img className={styles.arrow} src={arrow} alt="contact-icon" />
    </button>
  </nav>
);

export default Navigation;