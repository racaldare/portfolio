import React from 'react';

function AbilityBar({ skill, days, animationDelay }) {
  let animationDuration = ((days / 1600) * 100 * 2) / 100 < 1 ? 1 : ((days / 1600) * 100 * 2) / 100;

  return (
    <div className="ability-bar-item">
      <h1>
        {skill} <span>{days.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} days</span>
      </h1>
      <div className="ability-bar">
        <div
          className="ability-bar-progress"
          style={{
            width: (days / 1600) * 100 + '%',
            animationDelay: animationDelay + 's',
            animationDirection: animationDuration + 's',
          }}></div>
      </div>
    </div>
  );
}

export default AbilityBar;
