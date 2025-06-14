import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Form from "../../components/Form/form";
import "./contact.css";

const Contact = () => (
  <>
    <Header />
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p className="contact-subtext">
            Have a project in mind? We'd love to hear from you.
          </p>

          <p className="friendly-text">
            🌱 Let’s grow something great together! <br />
            We’re here to help make your outdoor dreams a reality.
          </p>

          <p>
            📧{" "}
            <a href="mailto:neflandscapedesign@gmail.com">
              neflandscapedesign@gmail.com
            </a>
          </p>
          <p>
            📞 <a href="tel:+16038410335">(603) 841-0335</a>
          </p>
        </div>

        <div className="contact-form">
          <Form />
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Contact;
