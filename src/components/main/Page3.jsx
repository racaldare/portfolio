import React from 'react';

function Page3({ pageBlock }) {
  return (
    <article className="main-centre" ref={pageBlock}>
      <div>Portfolio</div>
      <p>E-Commerce Website</p>
      <p>Personalised for client's needs</p>
      <button className="main-button">Redirect</button>
    </article>
  );
}

export default Page3;
