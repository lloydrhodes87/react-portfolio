import React, { useState } from "react";
import { FaPhone, FaEnvelope} from 'react-icons/fa';
import "./contact.styles.scss";

const Contact = () => {
    return (
        <div className='contact'>
            <a href='mailto:lloydrhodesdev@gmail.com?subject=Enquiry'><FaEnvelope color='white' size='0.8em'/> lloydrhodesdev@gmail.com</a>
            <p>Manchester UK</p>
            <a href='tel:07791254045'><FaPhone color='white' size='0.8em'/> 07791253045</a>
        </div>
    )
};

export default Contact;
