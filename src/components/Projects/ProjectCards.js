import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReactPlayer from 'react-player'
import { IoLogoGameControllerB } from "react-icons/io";

function ProjectCards(props) {
  const getClassName = () => {
    if (props.isCV) {
      if (window.innerWidth < 768) {
        return 'project-card-cv-m';
      } else {
        return 'project-card-cv-p';
      }
    } else if (props.isDP) {
      if (window.innerWidth < 768) {
        return 'project-card-dp-m';
      } else {
        return 'project-card-dp-p';
      }
    } else {
      if (window.innerWidth < 768) {
        return 'project-card-stl-m';
      } else {
        return 'project-card-stl-p';
      }
    }
  };
  return (
    <Card className={getClassName()}>
      <Card.Body>
        <Card.Title style={{fontSize:"25px"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center"}}>
          {props.description}
        </Card.Text>

        {props.isCV && 
          <ReactPlayer 
            style={window.innerWidth < 768 ? 
              {paddingBottom:"15px"}
              :
              {paddingBottom:"15px"}
            }
            url={props.vidPath} 
            width="100%"
            height={window.innerWidth < 768 ? 
              "25vh"
              :
              "59vh"
            }
            controls
          />
        }

        {props.isDP && 
          <ReactPlayer 
            style={window.innerWidth < 768 ? 
              {paddingBottom:"0px"}
              
              :
              {paddingBottom:"55px"}
            }
            url={props.vidPath} 
            width="100%"
            height={window.innerWidth < 768 ? 
              "25vh"
              :
              "59vh"
            }
            controls
          />
        }
        {props.isSTL && 
          <ReactPlayer 
            style={{paddingBottom:"15px", maxHeight: "85vh !important"}}
            url={props.vidPath} 
            width="100%"
            controls
          />
        }
        {props.isGame ? 
          <Button style={{width:"160px", height: "40px", fontSize:"20px", textAlign: "center", marginBottom: "15px !important"}} variant="primary" href="https://www.roblox.com/games/11576508871/ChangiVerse-T2-UPDATE" target="_blank">
            <IoLogoGameControllerB style={{marginRight:"7px", marginBottom:"3px"}} /> 
            Play!
          </Button>
          :
          ''
        }
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
