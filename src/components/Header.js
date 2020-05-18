import React from 'react';

const Header = ({ titulo }) => {
  return (
    <header className="bg-alert">
      <h1>{titulo}</h1>
      <a
        className="io"
        href="https://www.thecocktaildb.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
         The coctaill DB
      </a>
    </header>
  );
};

export default Header;
