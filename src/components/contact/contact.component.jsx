import React, { useState, useEffect } from 'react';

const Contact = () => {
    const [data, setData] = useState({name: '', message: '', email: ''})
    const { name, message, email } = data;

    useEffect(() => {
        console.log(data)
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value)

        setData({...data, [name]: value})

    }

    const handleSubmit = () => {
        // submit form
        setData({name: '', message: '', email: ''})
        console.log(data)
    }
    return (
        <div className='section contact'>
            <form>
                <input type='text' name='name' value={name} placeholder='name' onChange={handleChange}/>
                <input type='email' name='email' value={email} placeholder='Email' onChange={handleChange}/>
                <input type='text' name='message' value={message} placeholder='message' onChange={handleChange}/>
            </form>
            <button onClick={handleSubmit}>Send</button>
        </div>
    )
}

export default Contact;