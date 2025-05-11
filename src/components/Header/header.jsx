import React from 'react';
import './header.css';
import logo from '../../../images/cropped.png';

const Header = () => {
  return (
    <header className="header-container">
      <img src={logo} alt="NEF Landscaping Logo" className="header-image" />
    </header>
  );
};

export default Header;
