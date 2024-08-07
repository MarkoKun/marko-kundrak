import React from "react";
import Card from "react-bootstrap/Card";
import { MdFamilyRestroom } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";
import { IoLogoGameControllerB } from "react-icons/io";
import { RiComputerFill } from "react-icons/ri";
import { SlGraph } from "react-icons/sl";
import { GiNightSleep } from "react-icons/gi";
import { GiRobotAntennas } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Hi Everyone, I am <span className="purple">Marko Kundrak </span>
            from <span className="purple"> Košice, Slovakia.</span>
            <br />
            I am currently employed as a custom software engineer at <span className="purple">Accenture.</span>
            <br />
            I have completed <span className="purple">Secondary School of Electrical Engineering </span> 
            in Košice with a focus on <span className="purple">Computer Science</span> and <span className="purple">Informatics</span>.
            <br />
            This gave me strong and cohesive foundation to complete <span className="purple">Master's degree </span>
            in Informatics and Electrical engineering at Technical University of Košice.
          </p>
          <br />
          <h1 style={{ fontSize: "1.7em"}}>
            Gallup <strong className="purple">CliftonStrengths</strong>
          </h1>
          <div style={{ display: "flex", justifyContent: "center"}}>
            <ul className="about-activity-left">
              <li style={{display: "flex", alignItems: "center"}} >
                <GiRobotAntennas style={{marginRight: "7px"}} /> Futuristic
              </li>
              <li>
                <RiComputerFill /> Developer
              </li>
              <li style={{display: "flex", alignItems: "center"}} >
                <SlGraph style={{marginRight: "7px"}} /> Analytical
              </li>
              <li style={{display: "flex", alignItems: "center"}} >
                <GiBookshelf style={{marginRight: "7px"}} /> Learner
              </li>
              <li style={{display: "flex", alignItems: "center"}} >
                <GiNightSleep style={{marginRight: "7px"}} /> Restorative
              </li>
            </ul>
          </div>
          <br />
          <h1 style={{ fontSize: "1.7em"}}>
            Free Time <strong className="purple">Activities </strong>
          </h1>
          <div style={{ display: "flex", justifyContent: "center"}}>
            <ul className="about-activity-left">
              <li style={{display: "flex", alignItems: "center"}} >
                <MdFamilyRestroom style={{marginRight: "7px"}} /> Family  
              </li>
              <li style={{display: "flex", alignItems: "center"}} >
                <IoLogoGameControllerB style={{marginRight: "7px"}} /> Gaming 
              </li>
              <li style={{display: "flex", alignItems: "center"}} >
                <GiBookshelf style={{marginRight: "7px"}} /> Learning  
              </li>
            </ul>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
