import React from 'react'


const ProjectDetail = ({handleCancelModal, project}) => {
    const { name, description, image, gitHubLink, liveLink } = project;
    const path = `../../../assets/${image}.png`
    console.log(path)
    return (
        <div>
            

            <button onClick={handleCancelModal}>Cancel</button>
            <p>{name}</p>
            <p>{description}</p>
            <img src={require("" + path)}/>
            <p>{gitHubLink}</p>
            <p>{liveLink}</p>

        </div>
    )
}

export default ProjectDetail;