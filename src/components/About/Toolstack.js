import React from "react";
import TechOnHover from './TechOnHover';
import { Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiPowershell,
  SiGithub,
  SiAzuredevops, // Added Azure DevOps
} from "react-icons/si";
import {FaWindows} from "react-icons/fa";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <TechOnHover icon={FaWindows} hoveredText="Windows"/>
      <TechOnHover icon={SiVisualstudiocode} hoveredText="VSC"/>
      <TechOnHover icon={SiPostman} hoveredText="Postman"/>
      <TechOnHover icon={SiPowershell} hoveredText="PowerShell"/>
      <TechOnHover icon={SiAzuredevops} hoveredText="Azure DevOps"/> {/* Replaced GitHub */}
      <TechOnHover icon={SiGithub} hoveredText="GitHub Copilot"/>
      </Row>
  );
}

export default Toolstack;
