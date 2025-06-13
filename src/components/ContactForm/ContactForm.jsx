import React from "react";
import "./contactform.css";

const ContactForm = () => {
  return (
    <section className="homepage-contact">
      <h2 className="homepage-contact-title">Ready to get started?</h2>
      <p className="homepage-contact-subtext">
        Send us a message and we'll get back to you shortly.
      </p>

      <form
        name="homepage-contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/thank-you"
        className="homepage-contact-form"
      >
        <input type="hidden" name="form-name" value="homepage-contact" />
        <p hidden>
          <label>
            Don't fill this out: <input name="bot-field" />
          </label>
        </p>

        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="phone" placeholder="Phone Number" required />
        <textarea
          name="message"
          placeholder="How can we help you?"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
