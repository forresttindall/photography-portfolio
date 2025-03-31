import React, { useEffect } from 'react';
import imagePath from './utils/imagePath';
import './About.css';
import { InstagramLogo, ThreadsLogo, Globe, Envelope } from '@phosphor-icons/react';


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="profile-image">
          <div className='links-container'>
            <img 
              src={imagePath('IMG_4876.jpg')} 
              alt="Photographer Portrait" 
              loading="lazy" 
              srcSet={`${imagePath('IMG_4876.jpg')} 1x, ${imagePath('IMG_4876.jpg')} 2x`} 
            />
          </div>
          <div className="social-links">
            <a href="https://www.instagram.com/forrest.tindall" target="_blank" rel="noopener noreferrer">
              <InstagramLogo size={32} color='black' />
            </a>
            <a href="https://www.threads.net/forrest.tindall" target="_blank" rel="noopener noreferrer">
              <ThreadsLogo size={32} color='black' />
            </a>
            <a href="https://bsky.app/profile/forresttindall.com" target="_blank" rel="noopener noreferrer">
              <Globe size={32} color='black' />
            </a>
            <a href="/contact" rel="noopener noreferrer">
              <Envelope size={32} color='black' />
            </a>
          </div>
        </div>
        <div className="bio-content">
          <h1>About Me</h1>
          <p>
            I've been a photographer for 13 years, originally out of necessity. As a knifemaker, I needed high-quality images of my work, but photography quickly became more than just a tool—it became the focus. Now, I specialize in outdoor commercial photography, working with brands that live at the intersection of craftsmanship and the wild.
          </p>
          <p>
            My approach is clean, diverse, and timeless. I work primarily with natural light, adapting to every environment to capture scenes as they are—without unnecessary embellishment.
          </p>
          <p>
            My work has been featured in Popular Mechanics Magazine, and I've collaborated with brands like Worksharp, Schrade Knives, CRKT, TinCup Whiskey, and Sawyer Outdoors.
          </p>
          <p>
            Based in the mountains of Boise County, Idaho, I travel often. The best part of this work is being forced to slow down, to see places differently, and to translate that perspective into something tangible. Outside of photography, I spend my time fly fishing, hunting, programming, and exploring through wardriving.
          </p>
          <p>Let's build something real.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
