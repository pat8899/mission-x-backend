import React from "react";

import "./Projects.css";

import Project01 from "../../assets/projects/Project01.jpg";
import Project02 from "../../assets/projects/Project02.jpg";
import Project03 from "../../assets/projects/Project03.jpg";
import Project04 from "../../assets/projects/Project04.jpg";
import Project05 from "../../assets/projects/Project05.jpg";
import Project06 from "../../assets/projects/Project06.jpg";
import Project07 from "../../assets/projects/Project07.jpg";
import Project08 from "../../assets/projects/Project08.jpg";
import Project09 from "../../assets/projects/Project09.jpg";
import Project10 from "../../assets/projects/Project10.jpg";
import Project11 from "../../assets/projects/Project11.jpg";
import Project12 from "../../assets/projects/Project12.jpg";
import Project13 from "../../assets/projects/Project13.jpg";
import Project14 from "../../assets/projects/Project14.jpg";
import Project15 from "../../assets/projects/Project15.jpg";

const Projects = () => {
  // return (
  // <div className="pictures">
  //   <div className="columnPic">
  //     <div>
  //       <img className="pic" src={Project01} alt="Project01" />
  //       <h4 className="h4"> Introduction </h4>{" "}
  //       <p className="p3"> BEGINNER | ANIMATION </p>{" "}
  //     </div>
  //     <div>
  //       <img className="pic" src={Project02} alt="Project02" />
  //       <h4 className="h4"> My Birthday </h4>{" "}
  //       <p className="p3"> BEGINNER | ANIMATION </p>
  //     </div>{" "}
  //     <div>
  //       <img className="pic" src={Project03} alt="Project03" />
  //       <h4 className="h4"> 10 Block Challenge </h4>{" "}
  //       <p className="p3"> BEGINNER | ANIMATION </p>{" "}
  //     </div>{" "}
  //   </div>{" "}
  //   <div>
  //     <div className="columnPic">
  //       <div>
  //         <img className="pic" src={Project04} alt="Project04" />
  //         <h4 className="h4"> Build a band </h4>{" "}
  //         <p className="p3"> BEGINNER | ANIMATION </p>
  //       </div>
  //       <div>
  //         <img className="pic" src={Project05} alt="Project05" />
  //         <h4 className="h4"> The bear and the monkey </h4>{" "}
  //         <p className="p3"> BEGINNER | ANIMATION </p>
  //       </div>
  //       <div>
  //         <img className="pic" src={Project06} alt="Project06" />
  //         <h4 className="h4"> Debugging </h4>{" "}
  //         <p className="p3"> BEGINNER | ANIMATION </p>{" "}
  //       </div>{" "}
  //     </div>{" "}
  //   </div>
  //   <div>
  //     <div className="columnPic">
  //       <div>
  //         <img className="pic" src={Project07} alt="Project07" />
  //         <h4 className="h4"> About me </h4>{" "}
  //         <p className="p3"> BEGINNER | ANIMATION </p>{" "}
  //       </div>
  //       <div>
  //         <img className="pic" src={Project08} alt="Project08" />
  //         <h4 className="h4"> I am here </h4>{" "}
  //         <p className="p3"> BEGINNER | ANIMATION </p>
  //       </div>
  //       <div>
  //         <img className="pic" src={Project09} alt="Project09" />
  //         <h4 className="h4"> Funny faces </h4>{" "}
  //         <p className="p3"> BEGINNER | ANIMATION </p>{" "}
  //       </div>{" "}
  //     </div>{" "}
  //   </div>
  //   <div>
  //     <div className="columnPic">
  //       <div>
  //         <img className="pic" src={Project10} alt="Project10" />
  //         <h4 className="h4"> It tickles </h4>{" "}
  //         <p className="p3"> BEGINNER | ANIMATION </p>
  //       </div>
  //       <div>
  //         <img className="pic" src={Project11} alt="Project11" />
  //         <h4 className="h4"> Penguin in a Desert </h4>{" "}
  //         <p className="p3"> BEGINNER | ANIMATION </p>
  //       </div>
  //       <div>
  //         <img className="pic" src={Project12} alt="Project12" />
  //         <h4 className="h4"> Time Travel </h4>{" "}
  //         <p className="p3"> BEGINNER | ANIMATION </p>{" "}
  //       </div>{" "}
  //     </div>{" "}
  //   </div>
  //   <div>
  //     <div className="columnPic">

  //       <div>
  //         <img className="pic" src={Project14} alt="Project14" />
  //         <h4 className="h4"> The Lion and the Mouse Part 1 </h4>{" "}
  //         <p className="p3"> BEGINNER | ANIMATION </p>
  //       </div>
  //       <div>
  //         <img className="pic" src={Project15} alt="Project15" />
  //         <h4 className="h4"> The Lion and the </h4>{" "}
  //         <p className="p3"> BEGINNER | ANIMATION </p>{" "}
  //       </div>{" "}
  //     </div>{" "}
  //   </div>{" "}
  // </div>
  // );
  const projects = [
    
    { title: "Introduction", difficulty: "BEGINNER", imageURL: Project01, ActivityType: "Animation" },
    { title: "My Birthday", difficulty: "BEGINNER", imageURL: Project02, ActivityType: "Animation" },
    { title: "10 Block Challenge", difficulty: "BEGINNER", imageURL: Project03, ActivityType: "Animation" },
    { title: "Build a band", difficulty: "BEGINNER", imageURL: Project04, ActivityType: "Animation" },
    { title: "The bear and the monkey", difficulty: "BEGINNER", imageURL: Project05, ActivityType: "Animation" },
    { title: "Debugging", difficulty: "BEGINNER", imageURL: Project06, ActivityType: "Animation"},
    { title: "About me", difficulty: "BEGINNER", imageURL: Project07, ActivityType: "Animation"},
    { title: "I am here", difficulty: "BEGINNER", imageURL: Project08, ActivityType: "Animation"},
    { title: "Funny faces", difficulty: "BEGINNER", imageURL: Project09, ActivityType: "Animation"},
    { title: "It tickles", difficulty: "BEGINNER", imageURL: Project10, ActivityType: "Animation"},
    { title: "Penguin in a Desert", difficulty: "BEGINNER", imageURL: Project11, ActivityType: "Animation"},
    { title: "Time Travel", difficulty: "BEGINNER", imageURL: Project12, ActivityType: "Animation"},
    { title: "Birthday Card", difficulty: "BEGINNER", imageURL: Project13, ActivityType: "Animation"},
    { title: "The Lion and the Mouse Part 1", difficulty: "BEGINNER", imageURL: Project14, ActivityType: "Animation"},
    { title: "The Lion and the", difficulty: "BEGINNER", imageURL: Project15, ActivityType: "Animation"},
      
  ];
  return (
    <div className="pictures">
      {projects.map((project, index) => {
        return (
          <div>
            <img className="pic" src={project.imageURL} alt="Project01" />
            <h4 className="h4"> {project.title} </h4>{" "}
            <p className="p3">
              {project.difficulty} | {project.ActivityType}
            </p>
          </div>
          
        );
      })}
    </div>
  );
};

export default Projects;
