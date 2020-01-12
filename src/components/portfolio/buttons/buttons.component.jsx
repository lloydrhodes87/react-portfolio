import React, { useState, useEffect } from 'react';
import projects from '../../../data/data';
import './buttons.styles.scss';

const PortfolioButtons = ({handleGetProject}) => {
    const [project, setChooseProject] = useState(null);

    useEffect(() => {
        handleGetProject(project)
    }, [project, handleGetProject])
    
    const handleChooseProject = (project) => {
        setChooseProject(project)
    }

  
    return (
        <div className='portfolio-buttons'>
            {projects.map(project => {
                const { name } = project;
                return (
                <button onClick={() => handleChooseProject(project)} key={name}>{name}</button>
                )
            })}
        </div>
    )
};

export default PortfolioButtons;

