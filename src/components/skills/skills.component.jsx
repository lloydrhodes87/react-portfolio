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
        <div className='half-section'>
            <p>A selection of my favourite skill tech</p>
            <div className='skills'>
                <img src={js} alt='' height='100px'/>
                <img src={react} alt='' height='100px'/>
                <img src={vue} alt='' height='100px'/>
                <img src={aws} alt='' height='100px'/>
                <img src={node} alt='' height='100px'/>
                <img src={sass} alt='' height='100px'/>
            </div>
           
        </div>
    )
}

export default Skills;