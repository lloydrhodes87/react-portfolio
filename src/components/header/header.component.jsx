import React from "react";
import "./header.styles.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

const background = require('../../assets/background.png');

const Header = () => {
  return (
    <div className="header" style={{backgroundImage: `url(${background})`}}>
      <div className='navigation'>
        <ul>
          <li>
            <AnchorLink href="#portfolio">
              Portfolio
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#about">
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#skills">
              Skills
            </AnchorLink>
          </li>
        </ul>
      </div>
  
    </div>
  );
};

export default Header;
