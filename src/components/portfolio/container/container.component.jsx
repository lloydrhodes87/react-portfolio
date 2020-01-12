import React from 'react';
import './container.styles.scss';
import PortfolioProject from '../project/project.component';
import projects from '../../../data/data';

const Container = ({project}) => {
   
    return (
        <div>
            <PortfolioProject project={project}/>
        </div>
    )

}

export default Container;