import React from 'react';
import { Link } from 'react-router-dom';

function FrontHeader() {
  return (
    <header className="front-header">
      <Link to="/" className={'back-button'}></Link>
    </header>
  );
}

export default FrontHeader;
