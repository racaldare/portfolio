import React from 'react';
import { Link } from 'react-router-dom';

function Page2({ pageBlock }) {
  return (
    <article className="main-centre" ref={pageBlock}>
      <div>About me</div>
      <p>I'm a passionate web developer</p>
      <p>heading towards innovation</p>
      <Link to="/about" className="main-button">
        Show More
      </Link>
    </article>
  );
}

export default Page2;
