import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Form from "../../pages/Form/form";
import "./contact.css";

const Contact = () => (
  <>
    <Header />
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        Have a project in mind? We'd love to hear from you.
      </p>
      <Form />
    </div>
    <Footer />
  </>
);

export default Contact;
