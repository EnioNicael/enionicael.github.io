import React from 'react';

import Navbar from './Navbar';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="introduce">
      <h1>Enio Nicael</h1>
      <h2>Frontend Dev</h2>
    </div>
    <Navbar />
  </header>
);

export default Header;
