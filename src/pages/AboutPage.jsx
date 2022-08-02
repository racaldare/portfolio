import React from 'react';
import { AbilityBar, AboutHeader } from '../components';
import profile from '../assets/images/profile.jpg';
// import stats from '../assets/icons/profile-stats.svg';

import CV from '../utils/CV.pdf';

function AboutPage() {
  return (
    <main className="about-bg">
      <section className="about-main">
        <article className="left-about-main">
          <AboutHeader />
          <section>
            <h1>Roman Caldare</h1>
            <h2>Web Developer</h2>
            <div className="profile-stats">
              <img src={profile} alt="Roman's profile" />

              {/* <img className="stats-image" src={stats} alt="Roman's abilities in a figure" /> */}
            </div>
            <div className="rank-section">
              <p>Class: Student</p>
              <p>Rank: Junior</p>
            </div>
            <div className="description-section">
              <h1>Description</h1>
              <p>
                I am a self-taught web developer and computer science student at Kingston
                University, currently being employed by TJX Europe into the IT Placement programme.
                Moreover, I built websites for several individuals in my spare time.
              </p>
            </div>
          </section>
        </article>

        <article className="about-abilities-section">
          <div className="about-cv-block">
            <a className={'cv-button'} href={CV} target="_blank" rel="noopener noreferrer">
              Click to view CV
            </a>
          </div>
          <h1>Abilities</h1>
          <div className="ability-bar-section">
            <AbilityBar skill={'Javascript'} days={930} animationDelay={0} />

            <AbilityBar skill={'HTML/CSS'} days={1460} animationDelay={1.5} />

            <AbilityBar skill={'MySQL'} days={1263} animationDelay={1} />

            <AbilityBar skill={'PHP'} days={1351} animationDelay={2} />

            <AbilityBar skill={'React'} days={783} animationDelay={1} />

            <AbilityBar skill={'Figma / Adobe XD'} days={1351} animationDelay={0} />

            <AbilityBar skill={'Java'} days={379} animationDelay={3} />

            <AbilityBar skill={'Python'} days={152} animationDelay={2} />
          </div>
        </article>

        <article className="about-right-bg"></article>
      </section>
    </main>
  );
}

export default AboutPage;
