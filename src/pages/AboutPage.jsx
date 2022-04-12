import React from 'react';
import { AboutHeader } from '../components';
import profile from '../assets/images/profile.jpg';
import stats from '../assets/icons/profile-stats.svg';

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

              <img src={stats} alt="Roman's abilities in a figure" />
            </div>
            <div className="rank-section">
              <p>Rank: Student</p>
              <p>Class: Junior</p>
            </div>
            <div className="description-section">
              <h1>Description</h1>
              <p>
                I am a self-taught web developer and computer science student at Kingston
                University, currently being employed by TJX Europe into the IT Placement programme.
                Moreover, I built websites and PC setups for different individuals in my spare time.
              </p>
            </div>
          </section>
        </article>
        <article></article>
      </section>

      <aside>
        <a href="https://www.facebook.com/roma.caldare/" className="facebook-icon opposite-svg">
          Link to my Facebook account
        </a>

        <a
          href="https://www.linkedin.com/in/roman-caldare-a76b31170/"
          className="linkedin-icon opposite-svg">
          Link to my Facebook account
        </a>
      </aside>
    </main>
  );
}

export default AboutPage;
