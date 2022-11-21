import logo from '../../assets/images/logo.png';
import arrow from '../../assets/images/contact-icon.png'; 

const Navigation = () => (
  <nav>
    <div>
      <img src={logo} alt="soora-logo" />
    </div>
    <div>
      <button>
        <span>
          Contact us
        </span>
        <img src={arrow} alt="contact-icon" />
      </button>
    </div>
  </nav>
);

export default Navigation;