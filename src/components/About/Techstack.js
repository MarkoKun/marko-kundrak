import TechOnHover from './TechOnHover';
import { Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiLua,
  SiSqlite,
  SiAzuredevops,
  SiFlask,
  SiVercel,
} from "react-icons/si";

import { FaAws, FaReact  } from "react-icons/fa";
import { TbBrandSocketIo } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <TechOnHover icon={SiLua} hoveredText="Lua"/>
      <TechOnHover icon={DiJavascript1} hoveredText="JavaScript"/>
      <TechOnHover icon={DiPython} hoveredText="Python"/>
      <TechOnHover icon={FaReact} hoveredText="React"/>
      <TechOnHover icon={DiGit} hoveredText="Git"/>
      <TechOnHover icon={SiAzuredevops} hoveredText="Azure"/>
      <TechOnHover icon={FaAws} hoveredText="AWS"/>
      <TechOnHover icon={SiVercel} hoveredText="Vercel"/>
      <TechOnHover icon={DiNodejs} hoveredText="NodeJS"/>
      <TechOnHover icon={TbBrandSocketIo} hoveredText="SocketIO"/>
      <TechOnHover icon={SiFlask} hoveredText="FlaskAPI"/>
      <TechOnHover icon={DiMongodb} hoveredText="MongoDB"/>
      <TechOnHover icon={SiFirebase} hoveredText="Firebase"/>
      <TechOnHover icon={SiSqlite} hoveredText="Sqlite"/>
    </Row>
  );
}

export default Techstack;
