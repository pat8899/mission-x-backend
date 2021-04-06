import './App.css';

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
         <li><a href="/">HOME </a> </li>
         <li><a href="/Projects"> PROJECTS</a> </li>
         <li><a href="/Teachers">TEACHERS </a> </li>
           
          </ul>
        
    );
};

export default NavBar;
