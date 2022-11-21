import Navigation from './components/navigation/Navigation';
import Header from './components/header/Header';
import Picture from './components/picture/Picture';
import landingImage1 from './assets/images/landing-image-2.png';
import landingImage2 from './assets/images/landing-image-1.png';
import Footer from './components/footer/Footer';
import styles from './app.module.css';

function App() {
  return (
    <>
      <div className={styles.generalContainer}>
        <Navigation />
        <Header
          title1="Bringing"
          title2="Muslims Together"
          message=""
          htmlTag="badges"
        />
        <Picture
          src={landingImage1}
          alt="landing for homepage"
        />
        <Header
          title1="Get Notified"
          title2="When We Launch"
          message="Don't worry, we won't spam you :)"
          htmlTag="input"
        />
        <Picture
          src={landingImage2}
          alt="landing for homepage"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
