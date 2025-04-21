import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/marko.jpg";
import Tilt from "react-parallax-tilt";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
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
              🧠 <b className="purple">AI & Software Engineering Experience</b>
              <br />
              I have over a decade of programming experience, starting in high school, and have been working professionally as a software developer for the past four years.
              <br />
              <br />
              My career began with the development of an AI-powered bartender using <b className="purple">Python</b> and <b className="purple">JavaScript</b>. This project leveraged <b className="purple">AWS</b> services such as <b className="purple">Lambda</b> for event-driven execution, <b className="purple">DynamoDB</b> for real-time data storage, and <b className="purple">MQTT</b> for hardware communication. I also integrated the <b className="purple">Alexa SDK</b> in <b className="purple">Python</b> to enable interactive voice capabilities.
              <br />
              <br />
              🎮 <b className="purple">Game Development</b>
              <br />
              In recent years, I transitioned into game development, creating several titles including  
              <b 
              onClick={(e) => { 
                e.preventDefault(); handleRedirect('https://www.changiairport.com/en/discover/changiverse.html');}}
                className='shineEffectParent'
                style={{ cursor: 'pointer' }}
              > ChangiVerse </b>
              for Singapore Changi Airport. Built using the <b className="purple">Lua programming language</b> in <b className="purple">Roblox Studio</b>, the game has reached nearly <b className="purple">10 million</b> visits and has won multiple awards in both gaming and marketing categories.
              <br />
              <br />
              ⚙️ <b className="purple">DevOps & Automation</b>
              <br />
              As part of a project involving <b className="purple">JavaScript</b>-based package management, I implemented CI/CD pipelines using <b className="purple">Azure DevOps</b> and <b className="purple">Bash scripting</b>. This automation process streamlined deployment by enabling efficient publishing of packages across multiple feed types, improving consistency and development velocity.
              <br />
              <br />
              🤖 <b className="purple">Generative AI</b>
              <br />
              Over the past year, I’ve focused on <b className="purple">Generative AI</b>, actively experimenting with <b className="purple">LLMs</b> via <b className="purple">Azure OpenAI</b> and the <b className="purple">LangChain</b> framework. I built full-stack AI-driven applications using <b className="purple">Python</b>, <b className="purple">JavaScript</b>, and <b className="purple">OpenAPI</b>, handling tasks like:
              <ul>
                <li>Loading and transforming unstructured data into structured formats (CSV)</li>
                <li>Indexing and retrieving data using <b className="purple">Chroma vector database</b></li>
                <li>Implementing similarity search and other retrieval techniques</li>
                <li>Creating custom metadata fields to improve data categorization</li>
              </ul>
              Additionally, I served as a mentor in a company-wide <b className="purple">GenAI bootcamp</b>, where I trained 10 engineers on foundational <b className="purple">LLM</b> concepts, prompt engineering best practices, and productivity tools such as <b className="purple">GitHub Copilot</b>.
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
