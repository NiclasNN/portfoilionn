import React from 'react';
import './container.css';
import Comet from './comet';

const Container = ({ children }) => {
  return (
    <div className="container">
      <Comet />
      {children}
    </div>
  );
};

export default Container;
