import React from 'react'

const ProjectDetail = ({handleCancelModal, project}) => {
    const { name, description, image, gitHubLink, liveLink } = project;
    return (
        <div>
            

            <button onClick={handleCancelModal}>Cancel</button>
            <p>{name}</p>
            <p>{description}</p>
            <p>{image}</p>
            <p>{gitHubLink}</p>
            <p>{liveLink}</p>

        </div>
    )
}

export default ProjectDetail;