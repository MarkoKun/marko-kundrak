import TechOnHover from './TechOnHover';
import { Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiLua,
  SiPostgresql,
  SiAzuredevops,
  SiFlask,
  SiVercel,
  SiGraphql, // Placeholder for LangChain
  SiOpenapiinitiative,
  SiSwagger,
  SiPandas,
  SiCss3,
  SiHtml5,
  SiChakraui,
  SiOpenai, // Replacing TensorFlow with OpenAI icon
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
      <TechOnHover icon={SiFirebase} hoveredText="Firebase"/>
      <TechOnHover icon={SiPostgresql} hoveredText="PostgreSQL"/>
      <TechOnHover icon={SiGraphql} hoveredText="LangChain"/> {/* Placeholder */}
      <TechOnHover icon={SiChakraui} hoveredText="Chroma VectorDB"/>
      <TechOnHover icon={SiOpenapiinitiative} hoveredText="OpenAPI"/>
      <TechOnHover icon={SiSwagger} hoveredText="Swagger"/>
      <TechOnHover icon={SiPandas} hoveredText="Pandas"/>
      <TechOnHover icon={SiCss3} hoveredText="CSS"/>
      <TechOnHover icon={SiHtml5} hoveredText="HTML"/>
      <TechOnHover icon={SiOpenai} hoveredText="OpenAI"/> {/* Updated icon */}
    </Row>
  );
}

export default Techstack;
