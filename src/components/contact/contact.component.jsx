import React, { useState } from 'react';
import './contact.styles.scss';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const Contact = () => {
    const [data, setData] = useState({name: '', message: '', email: ''})
    const { name, message, email } = data;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({...data, [name]: value})
    }

    const handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", data})
        })
          .then(() => {
              alert("Success!");
              setData({name: '', message: '', email: ''})
          })
          .catch(error => alert(error));
  
       
      };
        
   
    return (
        <div className='half-section contact'>
            <div className='form-container'>
            <h2>Get in touch</h2>
            <form>
                <input type='text' name='name' value={name} placeholder='Name' onChange={handleChange}/>
                <input type='email' name='email' value={email} placeholder='Email' onChange={handleChange}/>
                <textarea type='text' name='message' value={message} placeholder='Message' onChange={handleChange}/>
            </form>
            <button onClick={handleSubmit}>Send</button>
            </div>
            
        </div>
    )
}

export default Contact;