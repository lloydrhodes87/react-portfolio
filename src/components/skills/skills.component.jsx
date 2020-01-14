import React from 'react';
import js from '../../assets/js.png';
import vue from '../../assets/vue.png';
import react from '../../assets/react.png';
import aws from '../../assets/aws.png';
import node from '../../assets/node.png';
import sass from '../../assets/sass.png';
import './skills.styles.scss';

const Skills = () => {
    return (
        <div className='half-section skills-section' id='skills'>
            <div className='skills-heading'>
                <h2>Some tech I like to use...</h2>
            </div>
        
            <div className='skills'>
                <img src={js} alt='skill' />
                <img src={react} alt='skill' />
                <img src={vue} alt='skill' />
                <img src={aws} alt='skill' />
                <img src={node} alt='skill' />
                <img src={sass} alt='skill' />
            </div>
         
           
        </div>
    )
}

export default Skills;