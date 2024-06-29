import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Marko Kundrak </span>
            from <span className="purple"> Košice, Slovakia.</span>
            <br />
            I am currently employed as a custom software engineer at <span className="purple">Accenture.</span>
            <br />
            I have completed <span className="purple">Secondary School of Electrical Engineering</span> 
            in Košice with a focus on <span className="purple">Computer Science</span> and <span className="purple">Informatics</span>.
            <br />
            This gave me strong and cohesive foundation to complete <span className="purple">Master's degree</span>
            in Informatics and Electrical engineering at Technical University of Košice.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Enjoying time with my family
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
