// Code for Navbar -- becomes menu button when screen is small.
import './projects.css'
import React, {useState} from 'react';

export const Projects = () => {

  
  return (
  // HTML code for ladning portion of the page

    <div class="projects" id="projects">

      <div class="project-header">
        <h1>Projects & Publications 👩‍💻</h1>
        <p>Click to check out some of the cool projects I have worked on!</p>
      </div>

      
      <div class="project-wrap">
        <a href="https://scazlab.yale.edu/sites/default/files/files/RO_MAN_2024___Hide_and_Seek%20(10).pdf" target="_blank">
          <article class="project-article article1">
            <h2>Publication: Robots that Influence Humans to Infer Their Strategy</h2>
            <p>August 2024</p>
            <p><strong>For:</strong> Yale Social Robotics Lab, IEEE RO-MAN 2024 🦾</p>
          </article>
        </a>
        

        <a href="http://aware-air.replit.app" target="_blank">
          <article class="project-article article2">
            <h2>Aware Air</h2>
            <p>July 2024</p>
            <p><strong>For:</strong> KWK x Deloitte Health Equity Challenge 💙<br/><br/>🏆 Challenge Winner</p>
          </article>
        </a>

        <a href="https://github.com/emmaadams05/YPM-AI-Dark-Data-Digitization" target="_blank">
          <article class="project-article article3">
            <h2>Bringing Dark Data to LUX</h2>
            <p>June 2024</p>
            <p><strong>For:</strong> Yale Peabody Museum AI Development Internship 🦕</p>
          </article>
        </a>

        <a href="https://emmaadams05.github.io/Chubby-Cow-Ice-Cream-Shop/" target="_blank">
          <article class="project-article article4">
            <h2>Chubby Cow Ice Cream Shop</h2>
            <p>February 2022</p>
            <p><strong>For:</strong> 2022 CT FBLA Web-Development Compleition 🍦<br/><br/>🏆 Received 1st Place</p>
          </article>
        </a>


        <a href="https://emmaadams05.github.io/STEAMTEEN/" target="_blank">
          <article class="project-article article5">
            <h2>STEAMTEEN</h2>
            <p>April 2022</p>
            <p><strong>For:</strong> 2022 CT TSA "WebMaster" Web-Development Compleition 👩‍🔬<br/><br/>🏆 Received 1st Place</p>
          </article>
        </a>


        <a href="https://emmaadams05.github.io/The-Sugar-Monster/" target="_blank">
          <article class="project-article article6">
            <h2>The Sugar Monster</h2>
            <p>March 2023</p>
            <p><strong>For:</strong> 2022 CT FBLA Web-Development Compleition 🍪<br/><br/>🏆 Received 2nd Place</p>
          </article>
        </a>

        
      </div>
    
  
    </div>

    

  
  );
};