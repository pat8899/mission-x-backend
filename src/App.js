import React from "react";

import NavBar from "./Components/NavBar/NavBar";
import NavBar2 from "./Components/NavBar/NavBar2";
import Buttonend from "./projects/Components/Buttonend";
import SideCheckbox from "./pages/Projects/Components/SideCheckbox";
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Contentoffer from './Components/Contentoffer'
import Contentb from './Components/Contentb'
import Contentcomp from './Components/Contentcomp'
import Contentstart from './Components/Contentstart'
import Footer from './Components/Footer'
import Projects from "./pages/Projects/Projects"
import "./App.css";
function App() {
  return (
      <div>
      <Navbar />
      <Banner />
      <Contentoffer />
      <Contentb />
      <Contentcomp />
      <Contentstart />
    <div className="sidePic">
        <SideCheckbox />
        <Projects />
        </div>
      <Footer />
      <NavBar />
      <NavBar2 />
      <bodyPage />
      <div className="sidePic">
        <SideCheckbox />
        <Projects />
        </div>
        <Buttonend />
      <Footer />
    </div>
  );
}
export default App;