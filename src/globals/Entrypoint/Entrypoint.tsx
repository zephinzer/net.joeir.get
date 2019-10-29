import React from 'react';
import './Entrypoint.css';
import Router from 'globals/Router';

const Entrypoint: React.FC = () => {
  return (
    <div className="Entrypoint">
      <Router />
    </div>
  );
}

export default Entrypoint;
