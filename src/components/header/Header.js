import PropTypes from 'prop-types';
import Content from './Content';
import badge1 from '../../assets/images/google-play.png';
import badge2 from '../../assets/images/apple-store.png';
import styles from './header.module.css';

const Badges = () => (
  <div className={styles.badgesContainer}>
    <img className={styles.badge} src={badge1} alt="landing for homepage" />
    <img className={styles.badge} src={badge2} alt="landing for homepage" />
  </div>
);

const Input = () => (
  <div className={styles.searchInputContainer}>
    <input className={styles.input} type="text" />
    <button className={styles.button} type="button">Notify Me</button>
  </div>
);

const Header = (props) => {
  const {
    title1, title2, message, htmlTag,
  } = props;

  if (htmlTag === 'badges') {
    return (
      <Content title1={title1} title2={title2} message={message}>
        <Badges />
      </Content>
    );
  } if (htmlTag === 'input') {
    return (
      <Content title1={title1} title2={title2} message={message}>
        <Input />
      </Content>
    );
  }
  return (
    <Content title1={title1} title2={title2} message={message} />
  );
};

Header.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  htmlTag: PropTypes.string.isRequired,
};

export default Header;
