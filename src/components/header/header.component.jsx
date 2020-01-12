import React from 'react';
import './header.styles.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
    return (
        <div className='section header'>
            <h1>Lloyd Rhodes</h1>
            <h2>Full Stack Software Engineer</h2>
            <AnchorLink href='#portfolio'>Portfolio</AnchorLink>
            
        </div>
    )
}

export default Header;

