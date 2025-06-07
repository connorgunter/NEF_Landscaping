import Header from "../../components/Header/header";
import BeforeAfter from "../../components/BeforeAfter/BeforeAfter";
import "./maintenance.css";
import m1 from "../../assets/before1.png";
import m2 from "../../assets/after1.png";
import m3 from "../../assets/before2.png";
import m4 from "../../assets/after2.png";

const Maintenance = () => (
  <div className="service-detail">
    <Header />
    <h1>Maintenance Services</h1>
    <p className="intro">
      NEF provides complete landscape care so your property always looks its
      best. Our experienced team handles routine mowing, seasonal cleanups and
      everything in between.
    </p>
    <ul className="offering-list">
      <li>Weekly lawn mowing and edging</li>
      <li>Mulching, pruning and bed maintenance</li>
      <li>Spring and fall cleanups</li>
      <li>Snow plowing during winter months</li>
    </ul>
    <BeforeAfter
      before={m1}
      after={m2}
      description="Transforming overgrown lawns into manicured spaces."
    />
    <BeforeAfter
      before={m3}
      after={m4}
      description="Detailed cleanup for a refreshed landscape."
    />
  </div>
);
export default Maintenance;
