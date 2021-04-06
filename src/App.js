import React from 'react';
import './App.css';
import Logo2 from './logo2.png';
import NZFlag from './NZFlag.jpg';
import MaoriFlag from './MaoriFlag.jpg';
import HOME from './Home.js';
import TEACHERS from '././Teachers.js';
import PROJECTS from './Projects.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./Components/SideBar";
import Project01 from './assets/projects/Project01.jpg';
import Project02 from './assets/projects/Project02.jpg';
import Project03 from './assets/projects/Project03.jpg';
import Project04 from './assets/projects/Project04.jpg';
import Project05 from './assets/projects/Project05.jpg';
import Project06 from './assets/projects/Project06.jpg';
import Project07 from './assets/projects/Project07.jpg';
import Project08 from './assets/projects/Project08.jpg';
import Project09 from './assets/projects/Project09.jpg';
import Project10 from './assets/projects/Project10.jpg';
import Project11 from './assets/projects/Project11.jpg';
import Project12 from './assets/projects/Project12.jpg';
import Project13 from './assets/projects/Project13.jpg';
import Project14 from './assets/projects/Project14.jpg';
import Project15 from './assets/projects/Project15.jpg';

// import reactDom from 'react-dom';

function App() {
  return (
    <div classname="App">
      <header className="App-header">
        <img className="Star" src={Logo2} alt="Logo" />
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/"><HOME /></Route>
            <Route exact path="/Projects"><TEACHERS /></Route>
            <Route exact path="/Teachers"><PROJECTS /></Route>
          </Switch>
        </BrowserRouter>
        <div className="flag">
          <p className="lang">Lang</p>
          <img className="flag" src={NZFlag} alt="Logo" />
          <img className="flag" src={MaoriFlag} alt="Logo" />
        </div>
      </header>

      <h3 className="h3">Projects</h3>
      <p className="p1">Welcome to the project library. You can use the filters on the roght to help you search for specific Projects.</p>

      <div className="buttons">

        <button href="/Beginner" className="button" >BEGINNER</button>
        <button>INTERMEDIATE</button>
        <button>ADVANCED</button>

        <div className="number">
          <p className="show">Show</p>
          <button>25</button>
          <button>50</button>
          <button>100</button>
        </div>

      </div>
      <div>
        <pictures />
      </div>
      {/* <SideBar /> */}

      <div className="pictures">

        <div className="columnPic">
          <div>
            <img className="pic" src={Project01} alt="Project01" />
            <h4 className="h4">Introduction</h4>
            <p className="p3">BEGINNER | ANIMATION</p>
          </div>

          <div>
            <img className="pic" src={Project02} alt="Project02" />
            <h4 className="h4">My Birthday</h4>
            <p className="p3">BEGINNER | ANIMATION</p>

          </div>
          <div>
            <img className="pic" src={Project03} alt="Project03" />
            <h4 className="h4">10 Block Challenge</h4>
            <p className="p3">BEGINNER | ANIMATION</p>
          </div>
        </div>
        <div>
          <div className="columnPic">
            <div>
              <img className="pic" src={Project04} alt="Project04" />
              <h4 className="h4">Build a band</h4>
              <p className="p3">BEGINNER | ANIMATION</p>

            </div>

            <div>

              <img className="pic" src={Project05} alt="Project05" />
              <h4 className="h4">The bear and the monkey</h4>
              <p className="p3">BEGINNER | ANIMATION</p>

            </div>

            <div>

              <img className="pic" src={Project06} alt="Project06" />
              <h4 className="h4">Debugging</h4>
              <p className="p3">BEGINNER | ANIMATION</p>
            </div>
          </div>
        </div>


        <div>
          <div className="columnPic">
            <div>
              <img className="pic" src={Project07} alt="Project07" />
              <h4 className="h4">About me</h4>
              <p className="p3">BEGINNER | ANIMATION</p>
            </div>


            <div>
              <img className="pic" src={Project08} alt="Project08" />
              <h4 className="h4">I am here</h4>
              <p className="p3">BEGINNER | ANIMATION</p>

            </div>

            <div>
              <img className="pic" src={Project09} alt="Project09" />
              <h4 className="h4">Funny faces</h4>
              <p className="p3">BEGINNER | ANIMATION</p>
            </div>
          </div>
        </div>

        <div>
          <div className="columnPic">
            <div>
              <img className="pic" src={Project10} alt="Project10" />
              <h4 className="h4">It tickles</h4>
              <p className="p3">BEGINNER | ANIMATION</p >

            </div>

            <div>

              <img className="pic" src={Project11} alt="Project11" />
              <h4 className="h4">Penguin in a Desert</h4>
              <p className="p3">BEGINNER | ANIMATION</p>

            </div>

            <div>

              <img className="pic" src={Project12} alt="Project12" />
              <h4 className="h4">Time Travel</h4>
              <p className="p3">BEGINNER | ANIMATION</p>
            </div>
          </div>
        </div>

        <div>
          <div className="columnPic">
            <div>
              <img className="pic" src={Project13} alt="Project13" />
              <h4 className="h4">Birthday Card</h4>
              <p className="p3">BEGINNER | </p>

            </div>

            <div>

              <img className="pic" src={Project14} alt="Project14" />
              <h4 className="h4">The Lion and the Mouse Part 1</h4>
              <p className="p3">BEGINNER | ANIMATION</p>

            </div>

            <div>
              <img className="pic" src={Project15} alt="Project15" />
              <h4 className="h4">The Lion and the</h4>
              <p className="p3">BEGINNER | ANIMATION</p>
            </div>
          </div>
        </div>
      </div>
    </div >
    //   <div>
    //   <button href= "/Dashboard.js" className="button-dash" >BACK TO DASHBOARD</button>
    // </div>

  );
}



export default App;