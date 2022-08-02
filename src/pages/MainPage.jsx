import React from 'react';
import { Counter, FrontHeader, LoadingScreen, Page1, Page2, Page3, Page4 } from '../components';

function MainPage({
  pageSettings,
  setPageSettings,
  goToPage,
  firstFrontNumberRef,
  secondFrontNumberRef,
  pageBlock,
  onDownWheel,
}) {
  return (
    <main className={'front-bg'}>
      {pageSettings.current === 1 && pageSettings.prev === 0 && <LoadingScreen />}
      <section>
        <FrontHeader
          pageSettings={pageSettings}
          setPageSettings={setPageSettings}
          goToPage={goToPage}
        />

        {pageSettings.current === 1 && <Page1 pageBlock={pageBlock} onDownWheel={onDownWheel} />}

        {pageSettings.current === 2 && <Page2 pageBlock={pageBlock} />}

        {pageSettings.current === 3 && <Page3 pageBlock={pageBlock} />}

        {pageSettings.current === 4 && <Page4 pageBlock={pageBlock} />}

        <Counter
          pageNumber={pageSettings.current}
          firstFrontNumberRef={firstFrontNumberRef}
          secondFrontNumberRef={secondFrontNumberRef}
        />
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
