import React from 'react';
import './form.css';

const Form = () => {
  return (
    <div className="form-container">
      <h1 className="contact">Contact Us</h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/thank-you"
      >
        {/* Hidden Netlify form name */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot trap */}
        <p hidden>
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>

        {/* All actual form fields */}
        <input type="text" name="name" id="name" placeholder="Name" required />
        <input type="email" name="email" id="email" placeholder="E-Mail" required />
        <input type="tel" name="phone" id="phone" placeholder="Phone Number" required />
        <textarea name="message" id="message" placeholder="Message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
