import PropTypes from 'prop-types';
import styles from './picture.module.css';

const Picture = ({ src, alt }) => (
  <div className={styles.landingContainer}>
    <img className={styles.landingImage} src={src} alt={alt} />
  </div>
);

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Picture;
