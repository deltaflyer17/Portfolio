import React from 'react'
import '../styles/About.css';
const About = () => {
  return (
    <div className='about-page'>
        <div className='about-container'>
            <h1>About Me</h1>
                <p>
                My name is Ulises Gaytan, and I am a senior in high school. I plan to major in computer science during college.
                I have been interested in software development for all of my life, and I am currently working on my web development skills as well as data sctructures and algorithms in Python.
                Outside of programming I enjoy physical activity, and I have ran a marathon and am now training for an Ironman 70.3 in May.
                </p>

                <p>
                I am currently exploring all facets of computer science to eventually specialize in what I enjoy the most. 
                Outside of web development I am interested in using Python, specifically for applications of AI/Machine Learning for finance.
                A future goal is to earn a master's degree in quantitative finance, which combines computer science skills and finance/mathematics skills to eventually work as a quantitative trader.
                </p>
       
                <p>
                 I hope you have enjoyed learning a little bit about me, feel free to connect!   
                </p>
      </div>
    </div>
  );
};

export default About;
