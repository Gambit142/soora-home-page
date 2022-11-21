import Content from "./Content";
import badge1 from '../assets/images/landing-image-2.png'
import badge2 from '../assets/images/landing-image-1.png'

const Badges = () => (
  <div>
    <img src={badge1} alt="landing for homepage" />
    <img src={badge2} alt="landing for homepage" />
  </div>
);

const Input = () => (
  <form>
    <input type="text" />
    <button type="button">Notify Me</button>
  </form>
);

const Title = (props) => {

  const { title, message, htmlTag } = props;

  if (htmlTag === 'badges') {
    return (
      <Content title={title} message={message}>
        <Badges />
      </Content>
    );
  } else if (htmlTag === 'input') {
    return (
      <Content title={title} message={message}>
        <Input />
      </Content>
    );
  } else {
    return (
      <Content title={title} message={message} />
    );
  }
};

export default Title;