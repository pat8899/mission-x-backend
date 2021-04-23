import React from "react";
import './NavBar2.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logo2 from  "../assets/logo2.png";
import NZFlag from "../assets/NZFlag.jpg";
import MaoriFlag from "../assets/MaoriFlag";

function NavBar2() {
    return (
      <div classname="NavBar2">
      
      <header className="AppHeader">
      <img className="Star" src={Logo2} alt="Logo" />
<div>
 <BrowserRouter>
 <NavBar />
 <Switch>
    <Route exact path="/">Home</Route>
    <Route exact path="/Projects.js">Teacher</Route>
  <Route exact path="/Teachers.js">Project</Route>
</Switch>
</BrowserRouter>
</div>
<div className="flag">
<p className="lang">Lang</p>
  <img className="flag" src={NZFlag} alt="Logo" />
  <img className="flag" src={MaoriFlag} alt="Logo" />
</div>
<header/>
</div>
);
  }

export default NavBar2;