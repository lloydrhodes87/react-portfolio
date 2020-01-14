import React, { useEffect, useState } from "react";
import "./project.styles.scss";
import ProjectDetail from "../projectDetail/projectDetail.component";
import Modal from "react-modal";

const PortfolioProject = ({ project, modalOpen, setModalOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "600px",
      height: "600px",
      transform: "translate(-50%, -50%)"
    }
  };
  const [showDetail, setShowDetail] = useState(modalOpen);
  Modal.setAppElement("#root");

  const handleCancelModal = () => {
    setShowDetail(false);
    setModalOpen(false);
  };

  useEffect(() => {
    setShowDetail(modalOpen);
  }, [modalOpen]);

  const { small } = project;

  return (
    <div
      className={
        small ? "portfolio-piece-container small" : "portfolio-piece-container"
      }
    >
      <button onClick={() => setShowDetail(true)}>
        <img src={project.image} alt="project" />
      </button>
      <Modal isOpen={showDetail} style={customStyles}>
        <div className="sign-in-modal">
          <ProjectDetail
            handleCancelModal={handleCancelModal}
            project={project}
          />
        </div>
      </Modal>
    </div>
  );
};

export default PortfolioProject;
