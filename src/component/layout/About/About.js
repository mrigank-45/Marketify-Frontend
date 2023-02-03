import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import img from './me.jpeg';
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/mrigank_shukla_/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={img}
              alt="Founder"
            />
            <Typography>Mrigank Shukla</Typography>
            <Button onClick={visitInstagram} color="primary" target="blank">
              Visit My Instagram
            </Button>
            <span>
              I am a MERN Stack web developer and a Blockchain enthusiast who enjoys exploring new technologies.
              This is a Full Stack E-commerce wesbite made by me with <FavoriteIcon style={{marginBottom: "-10px"}} />.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">My Works</Typography>
            <a
              href="https://www.linkedin.com/in/mrigank-shukla-b844bb223/"
              target="blank"
            >
              <LinkedInIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://github.com/mrigank-45" target="blank">
              <GitHubIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
