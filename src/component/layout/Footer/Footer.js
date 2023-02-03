import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import FavoriteIcon from '@material-ui/icons/Favorite';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Marketify.</h1>
        <p>Made by Mrigank with <FavoriteIcon style={{marginBottom: "-10px"}} /></p>

        <p>Copyrights 2023 &copy; MrigankShukla</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Me</h4>
        <a href="https://www.linkedin.com/in/mrigank-shukla-b844bb223/">Linkedin</a>
        <a href="https://www.instagram.com/mrigank_shukla_/">Instagram</a>
        <a href="https://github.com/mrigank-45">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
