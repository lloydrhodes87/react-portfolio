import React from 'react';
import './header.styles.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
    return (
        <div className='section header'>
            
            
            <ul id='grid' className='clear'>
                <li>
                    <div className="hexagon">
                        <AnchorLink href='#portfolio'><h2>Portfolio</h2></AnchorLink> 
                    </div>
                </li>
                <li>
                    <div className="hexagon">
                        <AnchorLink href='#about'><h2>About</h2></AnchorLink> 
                    </div>
                </li>
                <li>
                    <div></div>
                </li>
                <li>
                    <div className="hexagon">
                        <AnchorLink href='#skills'><h2>Skills</h2></AnchorLink> 
                    </div>
                </li>
        
       
            </ul>
            <div className='info'>
                <h1>Lloyd rhodes</h1>
                <h2>Full Stack Developer</h2>
                <h2>{'{ }'}</h2>
            </div>
            
        </div>
    )
}

export default Header;

