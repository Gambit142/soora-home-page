import styles from './picture.module.css';

const Picture = (props) => (
  <div className={styles.landingContainer}>
    <img className={styles.landingImage} src={props.src} alt={props.alt} />
  </div>
);

export default Picture;