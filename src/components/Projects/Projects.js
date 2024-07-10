import React from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  const Description = ({ text }) => {
    return <p style={{whiteSpace: "pre-line"}}>{text}</p>;
  };

  const ChangiVerseDescription = `Developing Roblox experience containing all iconic gaming and visual elements from real Changi Airport and additional gamification as described by client.
  Technology used - Roblox Studio, Lua Programming Language, Trello, Mural`;

  const HighSchoolDescription = `Web application for controlling and monitoring various sensors and electrical devices of smart house model.
  Technology used - PHP, HTML, CSS, MySQL, JavaScript, phpMyAdmin, Arduino, Ethernet Shield, PIR Motion sensor, Touch sensor, Step/Servo motor, RFID, Buzzer, LCD Display, Temperature and Humidity sensor.
  `;

  const MasterThesisDescription = `Developing both the software and hardware part of the UAV model.
  Collection of a large volume of data from the microphone and camera in real time.
  Identification of students and their emotions during lectures.
  Saving data in the database and displaying them in the web application.
  Technology used - C, JavaScript, Python, Arduino, Firebase, CSS, HTML`;

  return (
    <div fluid className="project-section">
      <Particle />
      <h1 className="project-heading">
        My Recent <strong className="purple">Works </strong>
      </h1>
      <p style={{ color: "white" }}>
        Here are a few projects I've worked on recently.
      </p>
      <div className="project-card">
        <ProjectCard
          vidPath={"https://markokun.github.io/marko-kundrak/Videos/ChangiVerse.mp4"}
          isGame={true}
          title="ChangiVerse"
          isCV={true}
          isDP={false}
          isSTL={false}
          description={<Description text={ChangiVerseDescription} />}
        />
      </div>

      <div className="project-card">
        <ProjectCard
          vidPath={"https://markokun.github.io/marko-kundrak/Videos/SocTechLyceum.mp4"}
          isGame={false}
          title="Secondary School Project"
          isCV={false}
          isDP={false}
          isSTL={true}
          description={<Description text={HighSchoolDescription} />}
        />
      </div>
      
      <div className="project-card">
        <ProjectCard
          vidPath={"https://markokun.github.io/marko-kundrak/Videos/DpTuke.mp4"}
          isGame={false}
          title="Master Thesis"
          isCV={false}
          isDP={true}
          isSTL={false}
          description={<Description text={MasterThesisDescription} />}
        />
      </div>
    </div>
  );
}

export default Projects;
