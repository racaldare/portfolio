import React from 'react';
import { useEffect, useRef } from 'react';

function Counter({ pageNumber, firstFrontNumberRef, secondFrontNumberRef }) {
  const prevNumber = useRef(0);
  useEffect(() => {
    prevNumber.current = pageNumber;
    if (prevNumber.current === pageNumber && prevNumber.current === 1) prevNumber.current = 0;
  });

  return (
    <div className="page-number number-start">
      <p>0</p>
      {
        <span className="number-out-link-back" ref={firstFrontNumberRef}>
          {prevNumber.current}
        </span>
      }
      {
        <span className="number-in-link-back" ref={secondFrontNumberRef}>
          {pageNumber}
        </span>
      }
    </div>
  );
}

export default Counter;
