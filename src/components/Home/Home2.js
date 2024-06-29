import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/marko.jpg";
import Tilt from "react-parallax-tilt";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleRedirect = (url) => {
    window.location.href = url;
};

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have over a decade of programming experience, beginning in high school, 
              and have been working as a professional software developer for the past four years.
              <br />
              <br />
              My professional career commenced with the development of an AI-driven bartender using <b className="purple">Python</b> and 
              <b className="purple">JavaScript.</b>
              <br />
              I have leveraged <b className="purple">AWS</b> services extensively, using <b className="purple">Lambda</b> 
              for code triggering, <b className="purple">DynamoDB </b>
              for real time data storage, and <b className="purple">MQTT</b> for hardware communication.
              <br />
              Additionally, I implemented the <b className="purple">Alexa SDK</b> in <b className="purple">Python</b> 
              to enable interactive speech and listening capabilities for customers.
              <br />
              <br />
              In recent years, I have developed few games, including  
              <b 
              onClick={(e) => { 
                e.preventDefault(); handleRedirect('https://www.roblox.com/games/11576508871/ChangiVerse');}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={isHovered ? 'purple' : ''}
                style={{ cursor: 'pointer' }}
              > ChangiVerse </b>
              for Singapore Airport, utilizing 
              <b className="purple"> Lua Programming Language </b> and 
              <b className="purple"> Roblox Studio.</b> 
              <br />
              To ensure seamless updates and deployment, I utilized <b className="purple">Azure DevOps</b> to create pipelines using <b className="purple">Bash</b> scripts, 
              facilitating the uploading of new packages from the web application and publishing them across various feeds.
              <br />
              To ensure my code stays clean and efficient, I use <b className="purple">Pylint</b> and <b className="purple">ESLint</b>, 
              and I manage APIs with <b className="purple">Swagger</b>.
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} style={{ borderRadius: '50%' }} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/marko-kundrak-a8a44b230/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
