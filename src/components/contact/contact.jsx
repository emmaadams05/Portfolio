// Code for Navbar -- becomes menu button when screen is small.
import './contact.css'
import React, {useState} from 'react';
import Gmail from "../images/gmail.png";
import Linkedin from "../images/linkedin.png";
import Github from "../images/github.webp";

export const Contact = () => {

  return (
  // navbar links & code
  <div class="contact-container" id="contact">

    <div class="contact-text">
      <h1>Contact ☎️</h1>
      <p>Here is my contact information, reach out anytime!</p>
    </div>

    <div class="contact-wrap">

      <article>
        <a href="mailto:emma.adams@uconn.edu" target="-blank" class="img-link"><img src={Gmail} alt="GMail Logo"/></a>
        <div>
          <h2>University Email:</h2>
          <a href="mailto:emma.adams@uconn.edu" target="_blank"   class="contact-gmail">emma.adams@uconn.edu</a>
        </div>
      </article>

      <article>
        <a href="mailto:27emmaadams@gmail.com" target="-blank" class="img-link"><img src={Gmail} alt="GMail Logo"/></a>
        <div>
          <h2>Personal Email:</h2>
          <a href="mailto:27emmaadams@gmail.com" target="_blank"  class="contact-gmail">27emmaadams@gmail.com</a>
        </div>
      </article>

      <article>
        <a href="https://github.com/emmaadams05" target="-blank" class="img-link"><img src={Github} alt="Github Logo" class="github-logo"/></a>
        <div>
          <h2 class="github-title">GitHub Profile</h2>
          <a href="https://github.com/emmaadams05" target="_blank" class="contact-github">emmaadams05</a>
        </div>
      </article>

      <article>
        <a href="http://www.linkedin.com/in/emma-adams-ct/" target="-blank" class="img-link"><img src={Linkedin} alt="LinkedIn Logo"/></a>
        <div>
          <h2>LinkedIn Profile</h2>
          <a href="http://www.linkedin.com/in/emma-adams-ct/" target="_blank"  class="contact-linkedin">linkedin.com/in/emma-adams-ct/</a>
        </div>
      </article>
      

    </div>
    
  </div>
  );
};