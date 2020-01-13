import React from 'react'


const ProjectDetail = ({handleCancelModal, project}) => {
    const { name, description, image, gitHubLink, liveLink } = project;
    
    console.log(image)
    return (
        <div>
            <button onClick={handleCancelModal}>Cancel</button>
            <p>{name}</p>
            <p>{description}</p>
            <img src={image} alt='project' height='100' />
            <p>{gitHubLink}</p>
            <p>{liveLink}</p>

        </div>
    )
}

export default ProjectDetail;