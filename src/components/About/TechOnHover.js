import React, { useState } from 'react';
import { Col } from "react-bootstrap";

const TechOnHover = ({ icon: Icon, hoveredText }) => {
  const [hovered, setHovered] = useState(false); 

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Col xs={4} md={2} className={'tech-icons'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {Icon && hovered ? <div className="centered-text">{hoveredText}</div> : <Icon/>}
    </Col>
  );
};

export default TechOnHover;
