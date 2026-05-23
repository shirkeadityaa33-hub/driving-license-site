import { useState } from "react";

export default function App() {
  const whatsappNumber = "919322705535";

  const kobList = [
    {
      title: "Petty Retailer of snacks/tea shops",
      description:
        "Manufactures or sells any kind of food by himself/herself, petty retailer, hawker, itinerant vendor, temporary stall, Thela, Sweets Shop, Juice Stall, etc.",
      options: [
        {
          criteria: "Petty Retailer of snacks/tea shops",
          licenseType: "Registration",
          price: "₹2,999",
        },
      ],
    },
    {
      title: "Storage (Except Controlled Atmosphere and Cold)",
      description:
        "Storage business involved in storing food products except controlled atmosphere and cold storage.",
      options: [
        {
          criteria: "Turnover up to 12 lakhs/annum",
          licenseType: "Registration",
          price: "₹2,999",
        },
        {
          criteria: "Turnover above 12 lakhs and up to 20 crores/annum",
          licenseType: "State License",
          price: "₹7,999",
        },
      ],
    },
    {
      title: "Wholesaler",
      description:
        "Wholesaler dealing in food products and supplying goods to retailers, distributors or other businesses.",
      options: [
        {
          criteria: "Turnover up to 12 lakhs/annum",
          licenseType: "Registration",
          price: "₹2,999",
        },
        {
          criteria: "Turnover above 12 lakhs/annum",
          licenseType: "State License",
          price: "₹7,999",
        },
      ],
    },
    {
      title: "Retailer",
      description:
        "Retail food business selling food products directly to customers through shop or outlet.",
      options: [
        {
          criteria: "Turnover up to 12 lakhs/annum",
          licenseType: "Registration",
          price: "₹2,999",
        },
        {
          criteria: "Turnover above 12 lakhs/annum",
          licenseType: "State License",
          price: "₹7,999",
        },
      ],
    },
    {
      title: "Distributor",
      description:
        "Distributor supplying food products from manufacturer or wholesaler to retailers and sellers.",
      options: [
        {
          criteria: "Turnover up to 12 lakhs/annum",
          licenseType: "Registration",
          price: "₹2,999",
        },
        {
          criteria: "Turnover above 12 lakhs/annum",
          licenseType: "State License",
          price: "₹7,999",
        },
      ],
    },
    {
      title: "Direct Seller",
      description:
        "Direct seller selling food products directly to end customers through personal selling or online selling.",
      options: [
        {
          criteria: "Direct food seller",
          licenseType: "Registration",
          price: "₹2,999",
        },
      ],
    },
    {
      title: "Food Vending Agencies",
      description:
        "Food vending agency operating food stalls, vending counters, carts or temporary food business.",
      options: [
        {
          criteria: "Food vending business",
          licenseType: "Registration",
          price: "₹2,999",
        },
      ],
    },
    {
      title:
        "Transportation (having a number of specialized vehicles like insulated refrigerated van/ wagon and milk tankers etc.)",
      description:
        "Transportation is an activity of transporting food products from one location to another in vehicles/containers including specialized vehicles like insulated refrigerated van/wagon, oil/milk tankers etc.",
      options: [
        {
          criteria:
            "Having more than 100 vehicles/wagons or turnover more than 30 crores/annum",
          licenseType: "Central License",
          price: "₹15,000",
        },
        {
          criteria:
            "Having up to 100 vehicles/wagons or turnover up to 30 crores/annum",
          licenseType: "State License",
          price: "₹7,999",
        },
        {
          criteria: "Turnover up to 12 lakhs/annum",
          licenseType: "Registration",
          price: "₹2,999",
        },
      ],
    },
    {
      title: "Importer",
      description:
        "Importer bringing food products from outside India for sale, distribution or business use.",
      options: [
        {
          criteria: "Food importer",
          licenseType: "Central License",
          price: "₹15,000",
        },
      ],
    },
    {
      title: "Trader/Merchant - Exporter",
      description:
        "Food trader, merchant or exporter involved in trading or exporting food products.",
      options: [
        {
          criteria: "Trader / Merchant / Exporter",
          licenseType: "Central License",
          price: "₹15,000",
        },
      ],
    },
    {
      title: "Hawker (Itinerant / Mobile food vendor)",
      description:
        "Mobile food vendor, hawker or itinerant food seller selling food items from moving or temporary location.",
      options: [
        {
          criteria: "Mobile food vendor",
          licenseType: "Registration",
          price: "₹2,999",
        },
      ],
    },
  ];

  const services = [
    { name: "New FSSAI Registration", type: "kob" },
    { name: "FSSAI Renewal", price: "₹999" },
    { name: "FSSAI Modification", price: "₹999" },
    { name: "Water Testing Report", price: "₹2,999" },
    { name: "Website Designing", price: "₹4,999" },
  ];

  const [selectedService, setSelectedService] = useState(services[0]);
  const [step, setStep] = useState("kob");
  const [openKob, setOpenKob] = useState(kobList[0].title);
  const [selectedKob, setSelectedKob] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    address: "",
    message: "",
  });

  const selectService = (service) => {
    setSelectedService(service);

    if (service.type === "kob") {
      setStep("kob");
    } else {
      setStep("form");
    }

    document.getElementById("apply").scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `New Application

Service: ${selectedService.name}

${
  selectedService.type === "kob" && selectedKob
    ? `Kind Of Business: ${selectedKob.kobTitle}
Criteria: ${selectedKob.criteria}
License Type: ${selectedKob.licenseType}
Price: ${selectedKob.price}`
    : `Price: ${selectedService.price}`
}

Client Details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Business Name: ${formData.businessName}
Address: ${formData.address}
Message: ${formData.message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const price =
    selectedService.type === "kob" && selectedKob
      ? selectedKob.price
      : selectedService.price;

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
            Fast and trusted support for FSSAI registration, renewal,
            modification, water testing report and website designing.
          </p>

          <a href="#services" style={primaryBtn}>View Services</a>
        </div>

        <div style={heroCard}>
          <img src="/logo.jpeg" alt="Logo" style={{ width: "260px" }} />
          <h2 style={{ color: "#0F3D73" }}>Fast & Trusted Registration Services</h2>
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
            RegFast India is a private consultancy service provider offering
            support for FSSAI services, documentation assistance, water testing
            reports and website designing.
          </p>

          <p style={aboutText}>
            We are not affiliated with any government authority. We only provide
            private consultancy and documentation support services.
          </p>
        </div>
      </section>

      <section id="apply" style={applySection}>
        <div style={formBox}>
          <h2 style={{ textAlign: "center", color: "#0F3D73" }}>
            {selectedService.name}
          </h2>

          {selectedService.type === "kob" && step === "kob" && (
            <>
              <h2 style={{ textAlign: "center", color: "#0F3D73" }}>
                Kind Of Business <span style={{ color: "#49A9BD" }}>(KOB)</span>
              </h2>

              {kobList.map((kob, index) => (
                <div key={index} style={kobItem}>
                  <div
                    onClick={() =>
                      setOpenKob(openKob === kob.title ? "" : kob.title)
                    }
                    style={kobHeader}
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
                          {kob.options.map((option, i) => (
                            <tr key={i}>
                              <td style={tdStyle}>{option.criteria}</td>
                              <td style={tdStyle}>{option.licenseType}</td>
                              <td style={tdStyle}>
                                {option.price}{" "}
                                <input
                                  type="radio"
                                  name="kobOption"
                                  checked={
                                    selectedKob?.kobTitle === kob.title &&
                                    selectedKob?.criteria === option.criteria
                                  }
                                  onChange={() =>
                                    setSelectedKob({
                                      kobTitle: kob.title,
                                      description: kob.description,
                                      ...option,
                                    })
                                  }
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}

              <div style={{ textAlign: "center", marginTop: "25px" }}>
                <button
                  style={darkBtn}
                  onClick={() => setSelectedKob(null)}
                >
                  Clear All Selected KOB
                </button>

                <button
                  style={darkBtn}
                  onClick={() => {
                    if (!selectedKob) {
                      alert("Please select one KOB option first.");
                      return;
                    }
                    setStep("eligibility");
                  }}
                >
                  Proceed
                </button>
              </div>
            </>
          )}

          {selectedService.type === "kob" && step === "eligibility" && (
            <div>
              <h2 style={{ textAlign: "center", color: "#0F3D73" }}>
                View Eligibility
              </h2>

              <p style={{ textAlign: "center", color: "#64748b" }}>
                After assessment of kind of business selected and inputs provided,
                you are eligible for:
              </p>

              <table style={eligibilityTable}>
                <thead>
                  <tr>
                    <th style={eligibilityTh}>SL No</th>
                    <th style={eligibilityTh}>Kind of Business</th>
                    <th style={eligibilityTh}>License Category</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td style={eligibilityTd}>1</td>
                    <td style={eligibilityTd}>{selectedKob.kobTitle}</td>
                    <td style={eligibilityTd}>{selectedKob.licenseType}</td>
                  </tr>
                </tbody>
              </table>

              <div style={{ textAlign: "center", marginTop: "25px" }}>
                <button
                  style={primaryBtn}
                  onClick={() => setStep("form")}
                >
                  You are eligible for {selectedKob.licenseType}, click here to proceed
                </button>
              </div>
            </div>
          )}

          {(step === "form" || selectedService.type !== "kob") && (
            <form onSubmit={handleSubmit}>
              <div style={priceBox}>
                <b>Selected Service:</b> {selectedService.name}
                <br />
                {selectedService.type === "kob" && selectedKob && (
                  <>
                    <b>Kind Of Business:</b> {selectedKob.kobTitle}
                    <br />
                    <b>License Type:</b> {selectedKob.licenseType}
                    <br />
                  </>
                )}
                <b>Service Fee:</b> {price}
              </div>

              <input
                placeholder="Full Name"
                required
                style={inputStyle}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                placeholder="Mobile Number"
                required
                style={inputStyle}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />

              <input
                placeholder="Email Address"
                style={inputStyle}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <input
                placeholder="Business / Firm Name"
                required
                style={inputStyle}
                value={formData.businessName}
                onChange={(e) =>
                  setFormData({ ...formData, businessName: e.target.value })
                }
              />

              <textarea
                placeholder="Address"
                required
                rows="4"
                style={inputStyle}
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />

              <textarea
                placeholder="Message / Requirement"
                rows="4"
                style={inputStyle}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <button type="submit" style={submitBtn}>
                Submit Application on WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      <footer id="contact" style={footerStyle}>
        <img src="/logo.jpeg" alt="Logo" style={footerLogo} />
        <p>WhatsApp: +91 9322705535 | Email: Regfastindia@gmail.com</p>
        <p style={disclaimerStyle}>
          Disclaimer: We are a private consultancy service provider and are not
          affiliated with any government authority. We assist customers with
          application, documentation and online service support.
        </p>
      </footer>

      <a
        href="https://wa.me/919322705535"
        target="_blank"
        rel="noreferrer"
        style={whatsappFloat}
      >
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
const primaryBtn = { display: "inline-block", margin: "10px", background: "#F26A1B", color: "white", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontWeight: "800", border: "none", cursor: "pointer" };
const heroCard = { background: "white", padding: "30px", borderRadius: "24px", boxShadow: "0 15px 35px rgba(15,61,115,0.15)", textAlign: "center" };
const sectionTitle = { textAlign: "center", fontSize: "42px", color: "#0F3D73" };
const serviceGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "25px", marginTop: "40px" };
const serviceCard = { padding: "30px", borderRadius: "18px", background: "white", boxShadow: "0 8px 25px rgba(0,0,0,0.08)", borderTop: "5px solid #F26A1B" };
const smallBtn = { background: "#0F3D73", color: "white", border: "none", padding: "12px 22px", borderRadius: "8px", cursor: "pointer", fontWeight: "700" };
const aboutSection = { background: "#FFF7ED", padding: "80px 8%" };
const aboutBox = { maxWidth: "950px", margin: "auto", background: "white", padding: "45px", borderRadius: "20px", boxShadow: "0 8px 25px rgba(0,0,0,0.08)", borderLeft: "6px solid #F26A1B" };
const aboutText = { fontSize: "18px", lineHeight: "1.8", color: "#475569" };
const applySection = { background: "#0F3D73", padding: "70px 20px" };
const formBox = { maxWidth: "950px", margin: "auto", background: "white", padding: "40px", borderRadius: "20px" };
const kobItem = { marginBottom: "8px" };
const kobHeader = { color: "white", background: "#08796f", padding: "12px 18px", cursor: "pointer", display: "flex", justifyContent: "space-between", fontWeight: "700", borderRadius: "4px" };
const kobContent = { background: "linear-gradient(135deg, #1AA37A, #058B84)", color: "white", padding: "22px", borderRadius: "4px" };
const tableStyle = { width: "100%", borderCollapse: "collapse", marginTop: "15px" };
const thStyle = { borderBottom: "1px solid rgba(255,255,255,0.6)", padding: "12px", textAlign: "left" };
const tdStyle = { borderBottom: "1px solid rgba(255,255,255,0.4)", padding: "12px" };
const darkBtn = { background: "#1f2937", color: "white", border: "none", padding: "12px 18px", borderRadius: "6px", margin: "5px", cursor: "pointer", fontWeight: "700" };
const eligibilityTable = { width: "100%", borderCollapse: "collapse", marginTop: "25px" };
const eligibilityTh = { background: "#f1f5f9", padding: "14px", textAlign: "left", border: "1px solid #e5e7eb" };
const eligibilityTd = { padding: "14px", border: "1px solid #e5e7eb" };
const priceBox = { background: "#FFF7ED", padding: "15px", borderRadius: "10px", marginBottom: "20px", color: "#0F3D73", border: "1px solid #F26A1B" };
const inputStyle = { width: "100%", padding: "14px", marginBottom: "18px", border: "1px solid #CBD5E1", borderRadius: "8px", fontSize: "16px", boxSizing: "border-box" };
const submitBtn = { width: "100%", background: "#F26A1B", color: "white", border: "none", padding: "15px", borderRadius: "10px", fontSize: "18px", fontWeight: "800", cursor: "pointer" };
const footerStyle = { background: "#071B33", color: "white", textAlign: "center", padding: "40px 8%" };
const footerLogo = { height: "75px", background: "white", padding: "8px", borderRadius: "10px" };
const disclaimerStyle = { color: "#CBD5E1", maxWidth: "850px", margin: "20px auto" };
const whatsappFloat = { position: "fixed", bottom: "25px", right: "25px", width: "65px", height: "65px", background: "#25D366", color: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "34px", textDecoration: "none", boxShadow: "0 6px 18px rgba(0,0,0,0.25)" };