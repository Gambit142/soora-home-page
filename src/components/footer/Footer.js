import facebookIcon from '../../assets/images/facebook.png';
import twitterIcon from '../../assets/images/twitter.png';
import instagramIcon from '../../assets/images/instagram.png';
import tiktokIcon from '../../assets/images/tiktok.png';
import youtubeIcon from '../../assets/images/youtube.png';

const Footer = () => {
  const socialMediaIcons = [
    {
      src: facebookIcon,
      alt: 'facebook-icon',
    },
    {
      src: twitterIcon,
      alt: 'twitter-icon',
    },
    {
      src: instagramIcon,
      alt: 'instagram-icon',
    },
    {
      src: tiktokIcon,
      alt: 'tiktok-icon',
    },
    {
      src: youtubeIcon,
      alt: 'youtube-icon',
    },
  ]

  return (
    <footer>
      <div>
        <ul>
          {socialMediaIcons.map((icon, index) => (
            <li key={index}>
              <img src={icon.src} alt={icon.alt} />
            </li>
          ))}
        </ul>
      </div>
      <p>Copyright © 2022 Soora. All rights reserved</p>
    </footer>
  );
};

export default Footer;