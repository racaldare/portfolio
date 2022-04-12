import React from 'react';
import LoadingHeader from '../header/LoadingHeader';

function LoadingScreen() {
  return (
    <div className="moving-slide">
      <section>
        <LoadingHeader />
        <section className="loading-text-area">
          <div>
            <p>Loading</p>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </section>
      </section>

      <aside className="icons-loaded">
        <a
          href="https://www.facebook.com/roma.caldare/"
          className="facebook-icon opposite-svg-loading loading-finished">
          Link to my Facebook account
        </a>

        <a
          href="https://www.linkedin.com/in/roman-caldare-a76b31170/"
          className="linkedin-icon opposite-svg-loading loading-finished">
          Link to my Facebook account
        </a>
      </aside>
    </div>
  );
}

export default LoadingScreen;
