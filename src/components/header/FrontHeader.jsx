import React from 'react';
import HeaderMenu from './HeaderMenu';
import TitleLogo from './TitleLogo';

function FrontHeader({ globalState, goToPage }) {
  return (
    <header className="front-header">
      <TitleLogo />

      <HeaderMenu
        pageNumber={globalState.page}
        menuClick={globalState.menuClick}
        goToPage={goToPage}
      />
    </header>
  );
}

export default FrontHeader;
