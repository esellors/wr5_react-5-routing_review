import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <h2>Breaking Routing Bad</h2>
      <nav>
        <ul>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/characters'>
              <li>Characters</li>
            </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
