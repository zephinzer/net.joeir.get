import React from 'react';
import logo from 'assets/images/logo.svg';

const Home: React.FC = () => {
  return (
    <header className="Entrypoint-header">
      <img src={logo} className="Entrypoint-logo" alt="logo" />
      <p>
        Edit <code>src/Entrypoint.tsx</code> and save to reload.
      </p>
      <a
        className="Entrypoint-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

export default Home;
