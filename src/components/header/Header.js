import Content from "./Content";
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
  <form>
    <input type="text" />
    <button type="button">Notify Me</button>
  </form>
);

const Header = (props) => {

  const { title1, title2, message, htmlTag } = props;

  if (htmlTag === 'badges') {
    return (
      <Content title1={title1} title2={title2} message={message}>
        <Badges />
      </Content>
    );
  } else if (htmlTag === 'input') {
    return (
      <Content title1={title1} title2={title2} message={message}>
        <Input />
      </Content>
    );
  } else {
    return (
      <Content title1={title1} title2={title2} message={message} />
    );
  }
};

export default Header;