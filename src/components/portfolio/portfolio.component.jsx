import React, { useState } from "react";
import "./portfolio.styles.scss";
import PortfolioButtons from "./buttons/buttons.component";
import PortfolioProject from "./project/project.component";

const Portfolio = () => {
  const [project, setChooseProject] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleGetProject = val => {
    setChooseProject(val);
  };

  return (
    <div className="portfolio section-portfolio" id="portfolio">
       <div className='divider'>

      </div>
        <div className="portfolio-heading">
          <h2>My Work</h2>
        </div>
        <div className="portfolio-container">
          <div className="container-left">
            <PortfolioProject
              project={project}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
          </div>
          <div className="container-right">
            <PortfolioButtons
              handleGetProject={handleGetProject}
              setModalOpen={setModalOpen}
            />
          </div>
        </div>
        <div className='divider'>

        </div>
      </div>
    // </div>
  );
};

export default Portfolio;
