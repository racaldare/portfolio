import React from 'react';

function Page1({ pageBlock, onDownWheel }) {
  return (
    <article className="main-centre" ref={pageBlock}>
      <div>Let's bring</div>
      <div>Your ideas into</div>
      <div>Reality</div>
      <button className="main-button" onClick={onDownWheel}>
        Get Started
      </button>
    </article>
  );
}

export default Page1;
