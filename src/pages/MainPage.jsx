import React from 'react';
import { Counter, FrontHeader, LoadingScreen, Page1, Page2, Page3, Page4 } from '../components';

function MainPage({ globalState, goToPage, fNum, sNum, pageBlock, onDownWheel }) {
  return (
    <main className={'front-bg'}>
      {globalState.page === 1 && globalState.prev === 0 && <LoadingScreen />}
      <section>
        <FrontHeader globalState={globalState} goToPage={goToPage} />

        {globalState.page === 1 && <Page1 pageBlock={pageBlock} onDownWheel={onDownWheel} />}

        {globalState.page === 2 && <Page2 pageBlock={pageBlock} />}

        {globalState.page === 3 && <Page3 pageBlock={pageBlock} />}

        {globalState.page === 4 && <Page4 pageBlock={pageBlock} />}

        <Counter pageNumber={globalState.page} fNum={fNum} sNum={sNum} />
      </section>
      <aside>
        <a href="https://www.facebook.com/roma.caldare/" className="facebook-icon">
          Link to my Facebook account
        </a>

        <a href="https://www.linkedin.com/in/roman-caldare-a76b31170/" className="linkedin-icon">
          Link to my Facebook account
        </a>
      </aside>
    </main>
  );
}

export default MainPage;
