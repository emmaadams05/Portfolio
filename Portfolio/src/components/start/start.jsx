// Code for Navbar -- becomes menu button when screen is small.
import './start.css'
import React, {useState} from 'react';
import Image from "../images/pfp.png"

export const Start = () => {

  return (
  // HTML code for ladning portion of the page
  <section id="start">
    <article>
      <h1>Hi, I'm <mark>Emma</mark> 👋</h1>
      <p>A University of Connecticut undergraduate who loves building <strong>websites</strong> and is passionate about exploring how <strong>emerging technology</strong> can be used in <strong>museums</strong>.
      <br/><br/>
      I have worked at the <strong>Yale Peabody Museum </strong> since I was a sophomore in high school; it was there that I discovered my passion for <strong>web-building</strong> and linking the fields of <strong>technology and museums</strong>.
     </p>
      <div>
       <a href="https://github.com/emmaadams05" target='_blank' class="github">View GitHub</a>
        <a href="https://www.linkedin.com/in/emma-adams-ct/" target='_blank' class="linkedin">View LinkedIn</a>
      </div>
    
      
    </article>

    <img src={Image} alt="Picture of Me!"/>
    
  </section>
  );
};