import React from 'react';
import { useEffect, useRef } from 'react';

function Counter({ pageNumber, fNum, sNum }) {
  const prevNumber = useRef(0);
  useEffect(() => {
    prevNumber.current = pageNumber;
    if (prevNumber.current === pageNumber && prevNumber.current === 1) prevNumber.current = 0;
  });

  return (
    <div className="page-number number-start">
      0{<span ref={fNum}>{prevNumber.current}</span>}
      {<span ref={sNum}>{pageNumber}</span>}
    </div>
  );
}

export default Counter;
