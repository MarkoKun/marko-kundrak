import React from "react";
import TechOnHover from './TechOnHover';
import { Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiPowershell,
} from "react-icons/si";
import { FaWindows, FaGithub} from "react-icons/fa";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <TechOnHover icon={FaWindows} hoveredText="Windows"/>
      <TechOnHover icon={SiVisualstudiocode} hoveredText="VSC"/>
      <TechOnHover icon={SiPostman} hoveredText="Postman"/>
      <TechOnHover icon={SiPowershell} hoveredText="PowerShell"/>
      <TechOnHover icon={FaGithub} hoveredText="GitHub"/>
      </Row>
  );
}

export default Toolstack;
