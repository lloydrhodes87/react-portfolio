import React from 'react';
import image from '../../assets/image.jpeg';
import './about.styles.scss';

const About = () => {
    return (
        <div className='section about'>
            <div>
                <img src={image} alt='profile' width='500px' />
            </div>
            <div>
                <p>Hi, my name is Lloyd and I'm a full stack developer based in the North West of England. Although my professional experience up to now has been
                    in the Fintech industry I am passionate about all things dev.

                    After spending 10 years working in the music industry, I transitioned into the tech world through an intensive coding bootcamp run by Northcoders in Manchester.
                    You can read about my journey  <a href="https://medium.com/@lloydrhodes/the-story-so-far-from-before-to-core-396d72a627b5">here</a>. Hopefully it can inspire others
                    who are thinking of a career change in their 30's to take the plunge.

                    >Outside of developing, music remains a huge part of my life. I still play jazz guitar as much as I can and continue to get a lot out of teaching.
                </p>
            </div>
        </div>
    )
}

export default About;