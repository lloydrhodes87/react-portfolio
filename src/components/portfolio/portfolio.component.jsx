import React, { useState } from 'react';
import './portfolio.styles.scss';
import Container from './container/container.component';
import PortfolioButtons from './buttons/buttons.component';

const Portfolio = () => {
    
    const [project, setChooseProject] = useState('');

    const handleGetProject = (val) => {
        setChooseProject(val)
    }

    return (
        <div className='section portfolio' id='portfolio'>
            <div className='portfolio-container left'>
                <Container project={project}/>
            </div>
            <div className='portfolio-container'>
                <PortfolioButtons handleGetProject={handleGetProject}/>
            </div>
         
        </div>
    )
}

export default Portfolio;
