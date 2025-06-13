import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";
import "./form.css";

const Form = () => (
  <div className="form-container">
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thank-you"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="form-group">
        <FaUser className="form-icon" />
        <input type="text" name="name" id="name" required placeholder=" " />
        <label htmlFor="name">Name</label>
      </div>

      <div className="form-group">
        <FaEnvelope className="form-icon" />
        <input type="email" name="email" id="email" required placeholder=" " />
        <label htmlFor="email">E-Mail</label>
      </div>

      <div className="form-group">
        <FaPhone className="form-icon" />
        <input type="tel" name="phone" id="phone" required placeholder=" " />
        <label htmlFor="phone">Phone Number</label>
      </div>

      <div className="form-group textarea-group">
        <FaCommentDots className="form-icon" />
        <textarea name="message" id="message" required placeholder=" " />
        <label htmlFor="message">Message</label>
      </div>

      <button type="submit">Send Message ✉️</button>
    </form>
  </div>
);

export default Form;
