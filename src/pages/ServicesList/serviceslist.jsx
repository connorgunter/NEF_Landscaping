import "./serviceslist.css";

const ServicesList = () => {
    return (
        <div className="serviceslist-container">
            <h1 className='services'>Services</h1>
            <div className="serviceslist">
                <div className="service-item">
                    <h2>Service 1</h2>
                    <p>Description of Service 1</p>
                </div>
                <div className="service-item">
                    <h2>Service 2</h2>
                    <p>Description of Service 2</p>
                </div>
                <div className="service-item">
                    <h2>Service 3</h2>
                    <p>Description of Service 3</p>
                </div>
            </div>
        </div>
    );
}
export default ServicesList;