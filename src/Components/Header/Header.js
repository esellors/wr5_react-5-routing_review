import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="site-header">
      <h2>Breaking Routing Bad</h2>
      <nav>
        <ul>
          <li>Home</li>
          <li>Characters</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
