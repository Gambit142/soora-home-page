const Content = (props) => {
  const { children, title, message } = props;
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
    <section>
      <hr />
      <small>Coming Soon</small>
      <h1>{title}</h1>
      <div>
        {children}
      </div>
      <small className={messageDisplay}>{message}</small>
    </section>
  )
};

export default Content;