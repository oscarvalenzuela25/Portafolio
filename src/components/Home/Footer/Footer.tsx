import React from 'react';
import IconButton from '@components/commons/IconButton';
import LinkedinIcon from '@icons/LinkedinIcon';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className="footer-text">Desarrollado por Oscar Valenzuela</p>
      <IconButton href="https://www.linkedin.com/in/oscar-valenzuela-rojas-8b54701aa/" externalLink>
        <LinkedinIcon color="primaryText" />
      </IconButton>
    </footer>
  );
};

export default Footer;
