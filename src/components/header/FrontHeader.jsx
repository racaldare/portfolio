import React from 'react';
import HeaderMenu from './HeaderMenu';
import TitleLogo from './TitleLogo';

function FrontHeader({ pageSettings, setPageSettings, goToPage }) {
  return (
    <header className="front-header">
      <TitleLogo />

      <HeaderMenu
        pageSettings={pageSettings}
        setPageSettings={setPageSettings}
        goToPage={goToPage}
      />
    </header>
  );
}

export default FrontHeader;
