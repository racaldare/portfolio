import React from 'react';

function LoadingHeader() {
  return (
    <header className="front-header front-header-loading">
      <nav className="front-nav">
        <button className={'menu-open opposite-svg loading-finished'}></button>
      </nav>
    </header>
  );
}

export default LoadingHeader;
