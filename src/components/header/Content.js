import styles from './header.module.css';

const Content = (props) => {
  const { children, title1, title2, message } = props;
  const display = {
    block: {
      display: 'block',
    },
    none: {
      display: 'none',
    },
  };
  const messageDisplay = message ? display.block : display.none;
  return (
    <section className={styles.headerSectionContainer}>
      <div className={styles.titleContainer}>
        <hr className={styles.line}/>
        <small className={styles.smallText}>Coming Soon</small>
      </div>
      <h1 className={styles.title}>
        <span>{title1}</span>
        <span className={styles.title}>{title2}</span>
      </h1>
      <div className={styles.parentContainer}>
        {children}
      </div>
      <small className={`${messageDisplay} ${styles.spamInfo}`}>{message}</small>
    </section>
  )
};

export default Content;