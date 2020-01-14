import React, { useState, useEffect } from "react";
import projects from "../../../data/data";
import "./buttons.styles.scss";

const PortfolioButtons = ({ handleGetProject, setModalOpen }) => {
  const [project, setChooseProject] = useState(projects[0]);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    handleGetProject(project);
  }, [project, handleGetProject]);

  const handleChooseProject = project => {
    setChooseProject(project);
  };

  return (
    <div className="portfolio-buttons">
      {projects.map(project => {
        const { name } = project;
        return (
          <div className="outer-button-container" onMouseEnter={() => handleChooseProject(project)}>
            <button
              key={name}
              className="button-container"
              onClick={() => setModalOpen(true)}
            >
                {name}
            </button>
            <div>
                <div className="bar"></div>
                
              </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioButtons;
