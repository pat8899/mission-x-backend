import './NavBar.css';

// import React, { useState } from "react";

// const NavBar = () => {
  // // const [isOpen, setOpen] = useState(false);
  // return (
  //   <nav
  //     className="NavBar"
  //     role="navigation"
  //     aria-label="main navigation"
  //   >
  //     <div className="NavBar">
  //       <div className="NavBar">
  //         <a href="" role="button" aria-label="menu"
  //           aria-expanded="true"
  //           // onClick={() => setOpen(!isOpen)}>
  //         </a>
  //       </div>
  function NavBar() {
    return (
     
         <ul className="NavBar">
         <li><a href="Home.js">HOME </a> </li>
         <li><a href="Projects.js"> PROJECTS</a> </li>
         <li><a href="Teachers.js">TEACHERS </a> </li>
           
          </ul>
        
    );
};

export default NavBar;
