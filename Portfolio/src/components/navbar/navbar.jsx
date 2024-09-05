// Code for Navbar -- becomes menu button when screen is small.
import './navbar.css'
import React, {useState} from 'react';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
  // navbar links & code
  <nav>
    <a href="#start" className="logo">Emma Adams</a>
    {/* div for 3-bar menu for small screens*/}
    <div className="menu" onClick={() => setOpen(!open)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={open ? "open" : ""}>
      <li><a href="#projects" class="navLink1">Projects & Publications</a></li>
      {/* <li><a href="#" class="navLink2">Experience</a></li> */}
      <li><a href="#contact" class="navLink3">Contact</a></li>
    </ul>

  </nav>
  );
};