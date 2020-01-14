import React from 'react'
import { FaChevronCircleLeft, FaGithub} from 'react-icons/fa';
import './projectDetail.styles.scss';


const ProjectDetail = ({handleCancelModal, project}) => {
    const { name, description, image, gitHubLink, gitHubLinkBE, liveLink } = project;
   
    return (
        <div className='project-detail-container'>
            <div className='project-detail-exit'>
                <button onClick={handleCancelModal}><FaChevronCircleLeft /></button>
            </div>
            <div className='pd-header'>
                <h1>{name}</h1>
            </div>
            <div className='central-block'>
                <img src={image} alt='project' height='150px' />
                <p>{description}</p>
                
            </div>
            
            <div className='github'>
                <a href={gitHubLink} target="_blank"><FaGithub size='2em' color='orange' /></a>
                {gitHubLinkBE &&
                    <a href={gitHubLinkBE} target="_blank"><FaGithub size='2em' /></a>
                }
            </div>
            
            <div className='visit-site'>
                <a href={liveLink}>Visit App</a>
            </div>
            

        </div>
    )
}

export default ProjectDetail;