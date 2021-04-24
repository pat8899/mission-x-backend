import React from "react";
import './NavBar.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logo2 from "../../assetes/NavBar/Logo2.png";
import NZFlag from "./assetes/NavBar/NZFlag.jpg";
import MaoriFlag from "./assets/NavBar/MaoriFlag.jpg";



function NavBar() {
  return (
  
      <div classname="NavBar">
      
      <header className="AppHeader">
      <img className="Star" src={Logo2.png} alt="Logo" />
       <div>
 <BrowserRouter>
     <toppage />
 <Switch>
    <Route exact path="/">Home</Route>
    <Route exact path="/Projects.js">Teacher</Route>
  <Route exact path="/Teachers.js">Project</Route>
</Switch>
</BrowserRouter>
</div>

<div className="flag">
<p className="lang">Lang</p>
  <img className="flag" src={NZFlag.jpg} alt="Logo" />
  <img className="flag" src={MaoriFlag.jpg} alt="Logo" />
</div>
</header>
</div>
    );
    
  }

export default NavBar;
