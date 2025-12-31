import { SocialLink } from '../../types';
import './Footer.css';

const Footer = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/aniketshah',
      icon: 'LinkedIn'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/aniketshah',
      icon: 'GitHub'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/aniketshah',
      icon: 'Twitter'
    },
    {
      name: 'Email',
      url: 'mailto:aniket.shah@example.com',
      icon: 'Email'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Aniket Shah</h3>
            <p>Junior Project Manager</p>
            <p className="footer-tagline">
              Turning ideas into successful projects
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Aniket Shah. All rights reserved.</p>
          <p>Built with React + TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
