import { useState } from "react";

export default function App() {
  const whatsappNumber = "919322705535";

  const services = [
    {
      name: "New FSSAI Registration",
      price: "₹1,499",
      fields: ["businessName", "ownerName", "phone", "email", "address"],
    },
    {
      name: "FSSAI Renewal",
      price: "₹999",
      fields: ["licenseNumber", "businessName", "ownerName", "phone", "expiryDate"],
    },
    {
      name: "FSSAI Modification",
      price: "₹999",
      fields: ["licenseNumber", "businessName", "ownerName", "phone", "changesRequired"],
    },
    {
      name: "Water Testing Report",
      price: "₹2,999",
      fields: ["businessName", "ownerName", "phone", "city", "address"],
    },
    {
      name: "Website Designing",
      price: "₹4,999",
      fields: ["businessName", "ownerName", "phone", "email", "websiteType", "message"],
    },
  ];

  const [selectedService, setSelectedService] = useState(services[0]);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    phone: "",
    email: "",
    address: "",
    licenseNumber: "",
    expiryDate: "",
    changesRequired: "",
    city: "",
    websiteType: "",
    message: "",
  });

  const fieldLabels = {
    businessName: "Business / Firm Name",
    ownerName: "Owner Name",
    phone: "Mobile Number",
    email: "Email Address",
    address: "Full Address",
    licenseNumber: "FSSAI License Number",
    expiryDate: "License Expiry Date",
    changesRequired: "Changes Required",
    city: "City",
    websiteType: "Website Type",
    message: "Message / Requirement",
  };

  const selectService = (service) => {
    setSelectedService(service);
    setSuccess(false);
    document.getElementById("apply").scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    setSuccess(false);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (e) => {
    const service = services.find((item) => item.name === e.target.value);
    setSelectedService(service);
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let details = "";

    selectedService.fields.forEach((field) => {
      details += `${fieldLabels[field]}: ${formData[field] || "-"}\n`;
    });

    const whatsappMessage = `New Service Application

Service: ${selectedService.name}
Price: ${selectedService.price}

Client Details:
${details}

Confirmation Message:
Stay tuned. Our executive will reach you soon with details about ${selectedService.name}.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    setSuccess(true);
  };

  const renderField = (field) => {
    if (field === "expiryDate") {
      return (
        <input
          key={field}
          type="date"
          name={field}
          value={formData[field]}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      );
    }

    if (field === "changesRequired" || field === "address" || field === "message") {
      return (
        <textarea
          key={field}
          name={field}
          placeholder={fieldLabels[field]}
          rows="4"
          value={formData[field]}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      );
    }

    if (field === "websiteType") {
      return (
        <select
          key={field}
          name={field}
          value={formData[field]}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="">Select Website Type</option>
          <option>Business Website</option>
          <option>E-commerce Website</option>
          <option>Portfolio Website</option>
          <option>Landing Page</option>
          <option>Other</option>
        </select>
      );
    }

    return (
      <input
        key={field}
        type={field === "email" ? "email" : "text"}
        name={field}
        placeholder={fieldLabels[field]}
        value={formData[field]}
        onChange={handleChange}
        required={field !== "email"}
        style={inputStyle}
      />
    );
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#102A43" }}>
      <header style={headerStyle}>
        <img src="/logo.jpeg" alt="RegFast India" style={{ height: "70px" }} />

        <nav style={{ display: "flex", gap: "25px", fontWeight: "600" }}>
          <a href="#" style={navStyle}>Home</a>
          <a href="#services" style={navStyle}>Services</a>
          <a href="#apply" style={navStyle}>Apply</a>
          <a href="#contact" style={navStyle}>Contact</a>
        </nav>

        <a href="#services" style={callBtn}>Apply Now</a>
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
          <img src="/logo.jpeg" alt="RegFast India Logo" style={{ width: "260px" }} />
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

        <p style={{ textAlign: "center", color: "#64748b", fontSize: "18px" }}>
          Select a service and the correct form will open with the price.
        </p>

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

          <form onSubmit={handleSubmit}>
            <select
              style={inputStyle}
              value={selectedService.name}
              onChange={handleServiceChange}
            >
              {services.map((service, index) => (
                <option key={index}>{service.name}</option>
              ))}
            </select>

            {selectedService.fields.map((field) => renderField(field))}

            <button type="submit" style={submitBtn}>
              Submit Application on WhatsApp
            </button>

            {success && (
              <p style={successMessage}>
                Thank you! Stay tuned, our executive will reach you soon with
                details about your selected service: {selectedService.name}.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer id="contact" style={footerStyle}>
        <img src="/logo.jpeg" alt="RegFast India" style={footerLogo} />

        <p>WhatsApp: +91 9322705535 | Email: Regfastindia@gmail.com</p>

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
  boxSizing: "border-box",
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
  cursor: "pointer",
};

const successMessage = {
  color: "#15803d",
  background: "#dcfce7",
  padding: "14px",
  borderRadius: "10px",
  marginTop: "15px",
  fontWeight: "700",
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