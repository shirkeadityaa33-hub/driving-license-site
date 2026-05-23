import { useState } from "react";

export default function App() {
  const services = [
    { name: "New FSSAI Registration", price: "₹1,499" },
    { name: "FSSAI Renewal", price: "₹999" },
    { name: "FSSAI Modification", price: "₹999" },
    { name: "Water Testing Report", price: "₹2,999" },
    { name: "Website Designing", price: "₹4,999" },
  ];

  const [selectedService, setSelectedService] = useState(services[0]);

  const selectService = (service) => {
    setSelectedService(service);
    document.getElementById("apply").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#102A43" }}>
      <header style={headerStyle}>
        <img src="/logo.jpeg" alt="Logo" style={{ height: "70px" }} />

        <nav style={{ display: "flex", gap: "25px", fontWeight: "600" }}>
          <a href="#" style={navStyle}>Home</a>
          <a href="#services" style={navStyle}>Services</a>
          <a href="#apply" style={navStyle}>Apply</a>
          <a href="#contact" style={navStyle}>Contact</a>
        </nav>

        <a href="#apply" style={callBtn}>Apply Now</a>
      </header>

      <section style={heroStyle}>
        <div>
          <p style={{ color: "#F26A1B", fontWeight: "800", letterSpacing: "2px" }}>
            PRIVATE CONSULTANCY SERVICES
          </p>

          <h1 style={heroTitle}>
            Business Registration <br />
            & Compliance <span style={{ color: "#F26A1B" }}>Services</span>
          </h1>

          <p style={heroText}>
            We help customers with FSSAI registration, renewal, modification,
            water testing reports, website designing and business documentation support.
          </p>

          <a href="#services" style={primaryBtn}>View Services</a>
        </div>

        <div style={heroCard}>
          <img src="/logo.jpeg" alt="Logo" style={{ width: "260px" }} />
          <h2 style={{ color: "#0F3D73" }}>Fast & Reliable Service</h2>
          <p style={{ color: "#64748b" }}>
            Choose service, check price, submit details and get support.
          </p>
        </div>
      </section>

      <section id="services" style={{ padding: "70px 8%" }}>
        <h2 style={sectionTitle}>
          Our <span style={{ color: "#F26A1B" }}>Services</span>
        </h2>

        <div style={serviceGrid}>
          {services.map((service, index) => (
            <div key={index} style={serviceCard}>
              <h3 style={{ color: "#0F3D73" }}>{service.name}</h3>

              <h2 style={{ color: "#F26A1B" }}>{service.price}</h2>

              <p style={{ color: "#64748b" }}>
                Professional application and documentation assistance.
              </p>

              <button onClick={() => selectService(service)} style={smallBtn}>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="apply" style={applySection}>
        <div style={formBox}>
          <h2 style={{ textAlign: "center", color: "#0F3D73" }}>
            Apply For Service
          </h2>

          <div style={priceBox}>
            <b>Selected Service:</b> {selectedService.name}
            <br />
            <b>Service Fee:</b> {selectedService.price}
          </div>

          <input placeholder="Full Name" style={inputStyle} />
          <input placeholder="Mobile Number" style={inputStyle} />
          <input placeholder="Email Address" style={inputStyle} />

          <select
            style={inputStyle}
            value={selectedService.name}
            onChange={(e) => {
              const service = services.find((s) => s.name === e.target.value);
              setSelectedService(service);
            }}
          >
            {services.map((service, index) => (
              <option key={index}>{service.name}</option>
            ))}
          </select>

          <textarea
            placeholder="Address / Message"
            rows="4"
            style={inputStyle}
          ></textarea>

          <button style={submitBtn}>
            Submit Application
          </button>
        </div>
      </section>

      <footer id="contact" style={footerStyle}>
        <img src="/logo.jpeg" alt="Logo" style={footerLogo} />

        <p>Phone: +91 9876543210 | Email: support@yourbusiness.com</p>

        <p style={disclaimerStyle}>
          Disclaimer: We are a private consultancy service provider and are not
          affiliated with any government authority. We assist customers with
          application, documentation and online service support.
        </p>
      </footer>
    </div>
  );
}

const headerStyle = {
  background: "white",
  padding: "15px 8%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
  position: "sticky",
  top: 0,
  zIndex: 10,
};

const navStyle = {
  color: "#0F3D73",
  textDecoration: "none",
};

const callBtn = {
  background: "#F26A1B",
  color: "white",
  padding: "12px 22px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "700",
};

const heroStyle = {
  padding: "90px 8%",
  background: "linear-gradient(120deg, #FFF7ED 0%, #FFFFFF 45%, #EAF3FF 100%)",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "40px",
  alignItems: "center",
};

const heroTitle = {
  fontSize: "56px",
  lineHeight: "1.1",
  color: "#0F3D73",
  marginBottom: "20px",
};

const heroText = {
  fontSize: "20px",
  color: "#475569",
  lineHeight: "1.7",
};

const primaryBtn = {
  display: "inline-block",
  marginTop: "25px",
  background: "#F26A1B",
  color: "white",
  padding: "15px 35px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "800",
};

const heroCard = {
  background: "white",
  padding: "30px",
  borderRadius: "24px",
  boxShadow: "0 15px 35px rgba(15,61,115,0.15)",
  textAlign: "center",
};

const sectionTitle = {
  textAlign: "center",
  fontSize: "42px",
  color: "#0F3D73",
};

const serviceGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "25px",
  marginTop: "40px",
};

const serviceCard = {
  padding: "30px",
  borderRadius: "18px",
  background: "white",
  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
  borderTop: "5px solid #F26A1B",
};

const smallBtn = {
  background: "#0F3D73",
  color: "white",
  border: "none",
  padding: "12px 22px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "700",
};

const applySection = {
  background: "#0F3D73",
  padding: "70px 20px",
};

const formBox = {
  maxWidth: "700px",
  margin: "auto",
  background: "white",
  padding: "40px",
  borderRadius: "20px",
};

const priceBox = {
  background: "#FFF7ED",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "20px",
  color: "#0F3D73",
  border: "1px solid #F26A1B",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  border: "1px solid #CBD5E1",
  borderRadius: "8px",
  fontSize: "16px",
};

const submitBtn = {
  width: "100%",
  background: "#F26A1B",
  color: "white",
  border: "none",
  padding: "15px",
  borderRadius: "10px",
  fontSize: "18px",
  fontWeight: "800",
};

const footerStyle = {
  background: "#071B33",
  color: "white",
  textAlign: "center",
  padding: "40px 8%",
};

const footerLogo = {
  height: "75px",
  background: "white",
  padding: "8px",
  borderRadius: "10px",
};

const disclaimerStyle = {
  color: "#CBD5E1",
  maxWidth: "850px",
  margin: "20px auto",
};