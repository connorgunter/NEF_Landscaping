import React from 'react';
import './form.css';

const Form = () => {
    return (
        <div className="form-container">
            <h1>Contact Us</h1>
            <form name="contact" netlify>
                <input type="hidden" name="form-name" value="contact" />
                <input placeholder="Name" type="text" id="name" name="name" required />
                <input placeholder="E-Mail" type="email" id="email" name="email" required />
                <input placeholder="Phone Number" type="phonenumber" id="phonenumber" name="phonenumber" required />
                <textarea placeholder="Message" id="message" name="message" required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;