import { useState } from "react";

export default function App() {
  const whatsappNumber = "919322705535";

  const kobList = [
    {
      title: "Petty Retailer of snacks/tea shops",
      description:
        "Manufactures or sells any kind of food by himself/herself, petty retailer, hawker, itinerant vendor, temporary stall, Thela, sweets shop, juice stall, etc.",
      criteria: "Petty Retailer of snacks/tea shops",
      licenseType: "Registration",
      validity: "1 Year",
      price: "₹2,999",
    },
    {
      title: "Storage (Except Controlled Atmosphere and Cold)",
      description:
        "Storage business involved in storing food products except controlled atmosphere and cold storage.",
      criteria: "Food storage business",
      licenseType: "Registration / License",
      validity: "1 Year",
      price: "₹3,999",
    },
    {
      title: "Wholesaler",
      description:
        "Wholesaler dealing in food products and supplying goods to retailers, distributors or other businesses.",
      criteria: "Food wholesaler",
      licenseType: "License",
      validity: "1 Year",
      price: "₹4,999",
    },
    {
      title: "Retailer",
      description:
        "Retail food business selling food products directly to customers through shop or outlet.",
      criteria: "Food retailer",
      licenseType: "Registration / License",
      validity: "1 Year",
      price: "₹2,999",
    },
    {
      title: "Distributor",
      description:
        "Distributor supplying food products from manufacturer or wholesaler to retailers and sellers.",
      criteria: "Food distributor",
      licenseType: "License",
      validity: "1 Year",
      price: "₹4,999",
    },
    {
      title: "Direct Seller",
      description:
        "Direct seller selling food products directly to end customers through personal selling or online selling.",
      criteria: "Direct food seller",
      licenseType: "Registration / License",
      validity: "1 Year",
      price: "₹2,999",
    },
    {
      title: "Food Vending Agencies",
      description:
        "Food vending agency operating food stalls, vending counters, carts or temporary food business.",
      criteria: "Food vending business",
      licenseType: "Registration",
      validity: "1 Year",
      price: "₹2,999",
    },
    {
      title:
        "Transportation (having a number of specialized vehicles like insulated refrigerated van/ wagon and milk tankers etc.)",
      description:
        "Food transportation business using vehicles for movement of food products, refrigerated vans, milk tankers or special vehicles.",
      criteria: "Food transportation",
      licenseType: "License",
      validity: "1 Year",
      price: "₹4,999",
    },
    {
      title: "Importer",
      description:
        "Importer bringing food products from outside India for sale, distribution or business use.",
      criteria: "Food importer",
      licenseType: "Central License",
      validity: "1 Year",
      price: "₹9,999",
    },
    {
      title: "Trader/Merchant - Exporter",
      description:
        "Food trader, merchant or exporter involved in trading or exporting food products.",
      criteria: "Trader / Merchant / Exporter",
      licenseType: "License",
      validity: "1 Year",
      price: "₹6,999",
    },
    {
      title: "Hawker (Itinerant / Mobile food vendor)",
      description:
        "Mobile food vendor, hawker or itinerant food seller selling food items from moving or temporary location.",
      criteria: "Mobile food vendor",
      licenseType: "Registration",
      validity: "1 Year",
      price: "₹2,999",
    },
  ];

  const services = [
    {
      name: "New FSSAI Registration",
      hasKob: true,
      price: "₹2,999",
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
  const [selectedKob, setSelectedKob] = useState(kobList[0]);
  const [openKob, setOpenKob] = useState(kobList[0].title);

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

  const getCurrentPrice = () => {
    if (selectedService.hasKob) return selectedKob.price;
    return selectedService.price;
  };

  const selectService = (service) => {
    setSelectedService(service);
    if (service.hasKob) {
      setSelectedKob(kobList[0]);
      setOpenKob(kobList[0].title);
    }
    document.getElementById("apply").scrollIntoView({ behavior: "smooth" });
  };

  const handleServiceChange = (e) => {
    const service = services.find((item) => item.name === e.target.value);
    setSelectedService(service);
    if (service.hasKob) {
      setSelectedKob(kobList[0]);
      setOpenKob(kobList[0].title);
    }
  };

  const handleKobSelect = (kob) => {
    setSelectedKob(kob);
    setOpenKob(kob.title);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let details = "";

    selectedService.fields.forEach((field) => {
      details += `${fieldLabels[field]}: ${formData[field] || "-"}\n`;
    });

    const whatsappMessage = `New Service Application

Service: ${selectedService.name}
${
  selectedService.hasKob
    ? `Kind Of Business: ${selectedKob.title}
Description: ${selectedKob.description}
Criteria: ${selectedKob.criteria}
License Type: ${selectedKob.licenseType}
Validity: ${selectedKob.validity}`
    : ""
}
Price: ${getCurrentPrice()}

Client Details:
${details}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  const renderField = (field) => {
    if (field === "expiryDate") {
      return <input key={field} type="date" name={field} value={formData[field]} onChange={(e) => setFormData({ ...formData, [field]: e.target.value })} required style={inputStyle} />;
    }

    if (field === "websiteType") {
      return (
        <select key={field} name={field} value={formData[field]} onChange={(e) => setFormData({ ...formData, [field]: e.target.value })} required style={inputStyle}>
          <option value="">Select Website Type</option>
          <option>Business Website</option>
          <option>E-commerce Website</option>
          <option>Portfolio Website</option>
          <option>Landing Page</option>
        </select>
      );
    }

    if (field === "changesRequired" || field === "address" || field === "message") {
      return <textarea key={field} name={field} placeholder={fieldLabels[field]} rows="4" value={formData[field]} onChange={(e) => setFormData({ ...formData, [field]: e.target.value })} required style={inputStyle} />;
    }

    return <input key={field} type={field === "email" ? "email" : "text"} name={field} placeholder={fieldLabels[field]} value={formData[field]} onChange={(e) => setFormData({ ...formData, [field]: e.target.value })} required={field !== "email"} style={inputStyle} />;
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#102A43" }}>
      <header style={headerStyle}>
        <img src="/logo.jpeg" alt="RegFast India" style={{ height: "70px" }} />

        <nav style={{ display: "flex", gap: "25px", fontWeight: "600" }}>
          <a href="#" style={navStyle}>Home</a>
          <a href="#services" style={navStyle}>Services</a>
          <a href="#about" style={navStyle}>About</a>
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
            water testing reports, website designing and documentation support.
          </p>

          <a href="#services" style={primaryBtn}>View Services</a>
        </div>

        <div style={heroCard}>
          <img src="/logo.jpeg" alt="Logo" style={{ width: "260px" }} />
          <h2 style={{ color: "#0F3D73" }}>Fast & Reliable Service</h2>
          <p style={{ color: "#64748b" }}>
            Choose service, select KOB, fill details and connect instantly.
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

      <section id="about" style={aboutSection}>
        <div style={aboutBox}>
          <h2 style={{ color: "#0F3D73", fontSize: "38px" }}>
            About <span style={{ color: "#F26A1B" }}>RegFast India</span>
          </h2>
          <p style={aboutText}>
            RegFast India is a private consultancy service provider offering support
            for business registration, FSSAI services, documentation assistance,
            water testing reports and website designing.
          </p>
          <p style={aboutText}>
            We are not affiliated with any government authority. We only provide
            private consultancy and documentation support services.
          </p>
        </div>
      </section>

      <section id="apply" style={applySection}>
        <div style={formBox}>
          <h2 style={{ textAlign: "center", color: "#0F3D73" }}>Apply For Service</h2>

          <div style={priceBox}>
            <b>Selected Service:</b> {selectedService.name}
            <br />
            {selectedService.hasKob && (
              <>
                <b>Kind Of Business:</b> {selectedKob.title}
                <br />
              </>
            )}
            <b>Service Fee:</b> {getCurrentPrice()}
          </div>

          <form onSubmit={handleSubmit}>
            <select style={inputStyle} value={selectedService.name} onChange={handleServiceChange}>
              {services.map((service, index) => (
                <option key={index}>{service.name}</option>
              ))}
            </select>

            {selectedService.hasKob && (
              <div style={kobBox}>
                <h2 style={{ textAlign: "center", color: "#0F3D73" }}>
                  Kind Of Business <span style={{ color: "#49A9BD" }}>(KOB)</span>
                </h2>

                {kobList.map((kob, index) => (
                  <div key={index} style={kobItem}>
                    <div
                      onClick={() => handleKobSelect(kob)}
                      style={{
                        ...kobHeader,
                        background: selectedKob.title === kob.title ? "#0F8F83" : "#08796f",
                      }}
                    >
                      <span>{kob.title}</span>
                      <span>{openKob === kob.title ? "⌃" : "⌄"}</span>
                    </div>

                    {openKob === kob.title && (
                      <div style={kobContent}>
                        <h3>Description</h3>
                        <p>{kob.description}</p>

                        <h3>Fees per Annum / Criteria / Certificate Validity :</h3>

                        <table style={tableStyle}>
                          <thead>
                            <tr>
                              <th style={thStyle}>Criteria</th>
                              <th style={thStyle}>License Type / Registration</th>
                              <th style={thStyle}>1 Year</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={tdStyle}>{kob.criteria}</td>
                              <td style={tdStyle}>{kob.licenseType}</td>
                              <td style={tdStyle}>
                                {kob.price}{" "}
                                <input
                                  type="radio"
                                  checked={selectedKob.title === kob.title}
                                  onChange={() => handleKobSelect(kob)}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {selectedService.fields.map((field) => renderField(field))}

            <button type="submit" style={submitBtn}>
              Submit Application on WhatsApp
            </button>
          </form>
        </div>
      </section>

      <footer id="contact" style={footerStyle}>
        <img src="/logo.jpeg" alt="Logo" style={footerLogo} />
        <p>WhatsApp: +91 9322705535 | Email: Regfastindia@gmail.com</p>
        <p style={disclaimerStyle}>
          Disclaimer: We are a private consultancy service provider and are not affiliated
          with any government authority. We assist customers with application,
          documentation and online service support.
        </p>
      </footer>

      <a href="https://wa.me/919322705535" target="_blank" rel="noreferrer" style={whatsappFloat}>
        💬
      </a>
    </div>
  );
}

const headerStyle = { background: "white", padding: "15px 8%", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", position: "sticky", top: 0, zIndex: 10 };
const navStyle = { color: "#0F3D73", textDecoration: "none" };
const callBtn = { background: "#F26A1B", color: "white", padding: "12px 22px", borderRadius: "8px", textDecoration: "none", fontWeight: "700" };
const heroStyle = { padding: "90px 8%", background: "linear-gradient(120deg, #FFF7ED 0%, #FFFFFF 45%, #EAF3FF 100%)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" };
const heroTitle = { fontSize: "56px", lineHeight: "1.1", color: "#0F3D73", marginBottom: "20px" };
const heroText = { fontSize: "20px", color: "#475569", lineHeight: "1.7" };
const primaryBtn = { display: "inline-block", marginTop: "25px", background: "#F26A1B", color: "white", padding: "15px 35px", borderRadius: "10px", textDecoration: "none", fontWeight: "800" };
const heroCard = { background: "white", padding: "30px", borderRadius: "24px", boxShadow: "0 15px 35px rgba(15,61,115,0.15)", textAlign: "center" };
const sectionTitle = { textAlign: "center", fontSize: "42px", color: "#0F3D73" };
const serviceGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "25px", marginTop: "40px" };
const serviceCard = { padding: "30px", borderRadius: "18px", background: "white", boxShadow: "0 8px 25px rgba(0,0,0,0.08)", borderTop: "5px solid #F26A1B" };
const smallBtn = { background: "#0F3D73", color: "white", border: "none", padding: "12px 22px", borderRadius: "8px", cursor: "pointer", fontWeight: "700" };
const aboutSection = { background: "#FFF7ED", padding: "80px 8%" };
const aboutBox = { maxWidth: "950px", margin: "auto", background: "white", padding: "45px", borderRadius: "20px", boxShadow: "0 8px 25px rgba(0,0,0,0.08)", borderLeft: "6px solid #F26A1B" };
const aboutText = { fontSize: "18px", lineHeight: "1.8", color: "#475569" };
const applySection = { background: "#0F3D73", padding: "70px 20px" };
const formBox = { maxWidth: "900px", margin: "auto", background: "white", padding: "40px", borderRadius: "20px" };
const priceBox = { background: "#FFF7ED", padding: "15px", borderRadius: "10px", marginBottom: "20px", color: "#0F3D73", border: "1px solid #F26A1B" };
const inputStyle = { width: "100%", padding: "14px", marginBottom: "18px", border: "1px solid #CBD5E1", borderRadius: "8px", fontSize: "16px", boxSizing: "border-box" };
const kobBox = { marginBottom: "25px" };
const kobItem = { marginBottom: "8px" };
const kobHeader = { color: "white", padding: "12px 18px", cursor: "pointer", display: "flex", justifyContent: "space-between", fontWeight: "700", borderRadius: "4px" };
const kobContent = { background: "linear-gradient(135deg, #1AA37A, #058B84)", color: "white", padding: "22px", borderRadius: "4px" };
const tableStyle = { width: "100%", borderCollapse: "collapse", marginTop: "15px" };
const thStyle = { borderBottom: "1px solid rgba(255,255,255,0.6)", padding: "12px", textAlign: "left" };
const tdStyle = { borderBottom: "1px solid rgba(255,255,255,0.4)", padding: "12px" };
const submitBtn = { width: "100%", background: "#F26A1B", color: "white", border: "none", padding: "15px", borderRadius: "10px", fontSize: "18px", fontWeight: "800", cursor: "pointer" };
const footerStyle = { background: "#071B33", color: "white", textAlign: "center", padding: "40px 8%" };
const footerLogo = { height: "75px", background: "white", padding: "8px", borderRadius: "10px" };
const disclaimerStyle = { color: "#CBD5E1", maxWidth: "850px", margin: "20px auto" };
const whatsappFloat = { position: "fixed", bottom: "25px", right: "25px", width: "65px", height: "65px", background: "#25D366", color: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "34px", textDecoration: "none", boxShadow: "0 6px 18px rgba(0,0,0,0.25)" };