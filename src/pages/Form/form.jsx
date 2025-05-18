import React from 'react';
import './form.css';

const Form = () => {
    return (
        <div className="form-container">
            <h1 className='contact'>Contact Us</h1>
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <input placeholder="Name" type="text" id="name" name="name" required />
                <input placeholder="E-Mail" type="email" id="email" name="email" required />
                <input placeholder="Phone Number" type="tel" id="number" name="number" required />
                <textarea placeholder="Message" id="message" name="message" required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;