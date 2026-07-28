import IconButton from '@components/IconButton';
import LinkedinIcon from '@icons/LinkedinIcon';
import useFooter from './hooks/useFooter';
import './styles.css';

const Footer = () => {
  const { currentYear } = useFooter();

  return (
    <footer className="footer-container">
      <p className="footer-text">
        Desarrollado por Oscar Valenzuela <span aria-hidden="true">·</span> {currentYear}
      </p>
      <IconButton
        aria-label="LinkedIn de Oscar Valenzuela"
        href="https://www.linkedin.com/in/oscar-valenzuela-rojas-8b54701aa/"
        externalLink
      >
        <LinkedinIcon color="primaryText" />
      </IconButton>
    </footer>
  );
};

export default Footer;
