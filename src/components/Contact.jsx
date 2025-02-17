import React from 'react'
import '../styles/Contact.css'


const Contact = () => {
  return (
    <div className='contact-page'>
        <div className='contact-container'>
            <h1 className='contact-title'>Contact Me!</h1>
            <div className='contact-info'>
                <p>Let's connect! Feel free to contact me the following ways: </p>
                <p>Email: <a href='mailto:ulijr.gaytan@gmaiol.com'>ulijr.gaytan@gmail.com</a></p>
                <p>GitHub: <a href='https://github.com/deltaflyer17' target='blank' rel='noopener noreferrer'> github.com/deltaflyer17 </a></p>
            </div>
        </div>
    </div>
  );
};

export default Contact;
