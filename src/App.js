import React from "react";

// import NavBar from "./Components/NavBar/NavBar";
// import Buttonend from "./pages/projects/Buttonend.js";
// import SideCheckbox from "../pages/Projects/SideCheckbox.js";
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
      <Footer />
      <Navbar />
   <div className="sidePic">
        {/* <SideCheckbox /> */}
        <Projects />
   </div>
        {/* <Buttonend /> */}
      <Footer />
    </div>
  );
}
export default App;