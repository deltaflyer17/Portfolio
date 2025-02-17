import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
      <div className="landing-page">
        <div className="hero">
          <h1>Hello, I am Ulises Gaytan!</h1>
          <p>I'm a high school student passionate about all things programming. </p>
          <div className='links'>
            <Link to="/about" className="cta-button">About Me</Link>
            <Link to="/projects-experience" className="cta-button">Projects and Experience</Link>
            <Link to="/contact" className='cta-button secondary-button'>Contact Me!</Link>
          </div>
        </div>
      </div>
    );
  };

  export default Home;  