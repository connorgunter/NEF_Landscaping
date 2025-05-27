import Header from "../../components/Header/header";
import Gallery from "../../components/Gallery/gallery";
import m1 from "../../assets/before1.png";
import m2 from "../../assets/after1.png";
import m3 from "../../assets/before2.png";
import m4 from "../../assets/after2.png";

const Maintenance = () => {
  const images = [m1, m2, m3, m4];
  return (
    <div className="service-detail">
      <Header />
      <h1>Maintenance Services</h1>
      <Gallery images={images} />
    </div>
  );
};
export default Maintenance;
