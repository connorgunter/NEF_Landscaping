// import React from "react";
// import "./form.css";

// const Form = () => {
//   return (
//     <div className="form-container">
//       <form
//         name="contact"
//         method="POST"
//         data-netlify="true"
//         data-netlify-honeypot="bot-field"
//         action="/thank-you"
//       >
//         {/* Hidden Netlify form name */}
//         <input type="hidden" name="form-name" value="contact" />

//         {/* Honeypot trap */}
//         <p hidden>
//           <label>
//             Don't fill this out: <input name="bot-field" />
//           </label>
//         </p>

//         {/* All actual form fields */}
//         <input type="text" name="name" id="name" placeholder="Name" required />
//         <input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="E-Mail"
//           required
//         />
//         <input
//           type="tel"
//           name="phone"
//           id="phone"
//           placeholder="Phone Number"
//           required
//         />
//         <textarea
//           name="message"
//           id="message"
//           placeholder="Message"
//           required
//         ></textarea>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Form;

import React from "react";
import "./form.css";

const Form = () => {
  return (
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
          <input type="text" name="name" id="name" required />
          <label htmlFor="name">Name</label>
        </div>

        <div className="form-group">
          <input type="email" name="email" id="email" required />
          <label htmlFor="email">E-Mail</label>
        </div>

        <div className="form-group">
          <input type="tel" name="phone" id="phone" required />
          <label htmlFor="phone">Phone Number</label>
        </div>

        <div className="form-group">
          <textarea name="message" id="message" required></textarea>
          <label htmlFor="message">Message</label>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Form;
