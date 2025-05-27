import { Link } from "react-router-dom";
import "./serviceslist.css";

const ServicesList = () => {
  return (
    <div className="serviceslist-container">
      <h1 className="services">Services</h1>
      <div className="serviceslist">
        <div className="service-item">
          <h2>Year-Round Landscape Maintenance</h2>
          <p>
            Reliable lawn care services all four seasons — including expert
            mowing, seasonal cleanups, and professional snow plowing. NEF keeps
            your property looking sharp year-round with proactive landscape
            upkeep.
          </p>
          <Link to="/services/maintenance" className="learn-more-button">
            Learn More
          </Link>
        </div>

        <div className="service-item">
          <h2>Native Plant Landscaping & Garden Design</h2>
          <p>
            Custom landscape design with plants native to your specific zone -
            marked by the USDA Plant Hardiness Zone Map. NEF specializes in
            sustainable, climate-smart planting and landscape architecture that
            thrives naturally.
          </p>
          <Link to="/services/nativeplants" className="learn-more-button">
            Learn More
          </Link>
        </div>
        <div className="service-item">
          <h2>Hardscape Installation – Patios, Walkways, Fireplaces</h2>
          <p>
            From elegant stone walkways to custom patios and outdoor fireplaces,
            NEF builds durable, beautiful hardscapes that elevate curb appeal
            and outdoor living.
          </p>
          <Link to="/services/hardscape" className="learn-more-button">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ServicesList;
