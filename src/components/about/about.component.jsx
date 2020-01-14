import React from "react";
import image from "../../assets/image.jpeg";
import "./about.styles.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="half-section about" id='about'>
      <div className="about-main">
        <div className="about-text">
          <div className="about-title">
            <h2>Me...</h2>
          </div>
          <p>
            Hi, my name is Lloyd and I'm a full stack developer based in the
            North West of England. Although my professional experience up to now
            has been in the Fintech industry I am passionate about all things
            dev.
            <br></br>
            <br></br>
            After spending 10 years working in the music industry, I
            transitioned into the tech world through an intensive coding
            bootcamp run by Northcoders in Manchester. You can read about my
            journey{" "}
            <a href="https://medium.com/@lloydrhodes/the-story-so-far-from-before-to-core-396d72a627b5">
              here
            </a>
            . Hopefully it can inspire others who are thinking of a career
            change in their 30's to take the plunge. 
            
            <br></br>
            <br></br>
            Outside of developing,
            music remains a huge part of my life. I still play jazz guitar as
            much as I can and continue to get a lot out of teaching.
          </p>
          <div className="about-icons">
            <a href='https://github.com/lloydrhodes87' target="_blank" rel="noopener noreferrer">
              <FaGithub size='3.5em' />
            </a>
            <a href='https://www.linkedin.com/in/lloyd-rhodes-639903175/?originalSubdomain=uk' target="_blank" rel="noopener noreferrer">
              <FaLinkedin size='3.5em' color='orange'/>
            </a>
            
            
          </div>
        </div>

        <div className="image-about">
          <img src={image} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default About;
