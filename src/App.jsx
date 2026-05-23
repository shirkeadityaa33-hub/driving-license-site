import { useState } from "react";

export default function App() {
  const whatsappNumber = "919322705535";

  const services = [
    { name: "New FSSAI Registration", price: "Select KOB" },
    { name: "FSSAI Renewal", price: "₹999" },
    { name: "FSSAI Modification", price: "₹999" },
    { name: "Water Testing Report", price: "₹2,999" },
    { name: "Website Designing", price: "₹4,999" },
  ];

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
        "Food storage business except controlled atmosphere and cold storage.",
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
      title: "Wholesaler",
      description:
        "Wholesaler dealing in food products and supplying to retailers or distributors.",
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
        "Retail food business selling food products directly to customers.",
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
        "Distributor supplying food products from manufacturer or wholesaler to sellers.",
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
        "Direct seller selling food products directly to end customers.",
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
        "Food vending agency operating food stalls, vending counters or carts.",
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
        "Transportation (having a number of specialized vehicles like insulated refrigerated van/wagon and milk tankers etc.)",
      description:
        "Transportation is an activity of transporting food products from one location to another in vehicles/containers including insulated refrigerated van/wagon, oil/milk tankers etc.",
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
        "Importer bringing food products from outside India for sale or distribution.",
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
        "Mobile food vendor, hawker or itinerant food seller selling food items from temporary/mobile location.",
      options: [
        {
          criteria: "Mobile food vendor",
          licenseType: "Registration",
          price: "₹2,999",
        },
      ],
    },
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

  const chooseService = (service) => {
    setSelectedService(service);
    setSelectedKob(null);

    if (service.name === "New FSSAI Registration") {
      setStep("kob");
      setOpenKob(kobList[0].title);
    } else {
      setStep("form");
    }

    setTimeout(() => {
      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const proceedToEligibility = () => {
    if (!selectedKob) {
      alert("Please select one KOB option first.");
      return;
    }
    setStep("eligibility");
  };

  const proceedToForm = () => {
    setStep("form");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const price =
      selectedService.name === "New FSSAI Registration"
        ? selectedKob?.price
        : selectedService.price;

    const whatsappMessage = `New Application

Service: ${selectedService.name}
${
  selectedService.name === "New FSSAI Registration" && selectedKob
    ? `Kind Of Business: ${selectedKob.kobTitle}
Criteria: ${selectedKob.criteria}
License Type: ${selectedKob.licenseType}
Price: ${selectedKob.price}`
    : `Price: ${price}`
}

Client Details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "-"}
Business Name: ${formData.businessName}
Address: ${formData.address}
Message: ${formData.message || "-"}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#102A43" }}>
      <header style={headerStyle}>
        <img src="/logo.jpeg" alt="RegFast India" style={{ height: "70px" }} />

        <nav style={{ display: "flex", gap: "24px", fontWeight: "600" }}>
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

              <button
                type="button"
                onClick={() => chooseService(service)}
                style={smallBtn}
              >
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

          <select
            style={inputStyle}
            value={selectedService.name}
            onChange={(e) => {
              const service = services.find((s) => s.name === e.target.value);
              chooseService(service);
            }}
          >
            {services.map((service, index) => (
              <option key={index} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>

          {selectedService.name === "New FSSAI Registration" && step === "kob" && (
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
                    style={{
                      ...kobHeader,
                      background:
                        openKob === kob.title ? "#b91c1c" : "#08796f",
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
                          {kob.options.map((option, i) => {
                            const isSelected =
                              selectedKob?.kobTitle === kob.title &&
                              selectedKob?.criteria === option.criteria;

                            return (
                              <tr key={i}>
                                <td style={tdStyle}>{option.criteria}</td>
                                <td style={tdStyle}>{option.licenseType}</td>
                                <td style={tdStyle}>
                                  {option.price}{" "}
                                  <input
                                    type="radio"
                                    name="kobOption"
                                    checked={isSelected}
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
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}

              <div style={{ textAlign: "center", marginTop: "25px" }}>
                <button
                  type="button"
                  style={darkBtn}
                  onClick={() => setSelectedKob(null)}
                >
                  Clear All Selected KOB
                </button>

                <button
                  type="button"
                  style={darkBtn}
                  onClick={proceedToEligibility}
                >
                  Proceed
                </button>
              </div>
            </>
          )}

          {selectedService.name === "New FSSAI Registration" &&
            step === "eligibility" &&
            selectedKob && (
              <div>
                <h2 style={{ textAlign: "center", color: "#0F3D73" }}>
                  View Eligibility
                </h2>

                <p style={{ textAlign: "center", color: "#64748b" }}>
                  After assessment of kind of business selected, you are eligible for:
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
                  <button type="button" style={primaryBtn} onClick={proceedToForm}>
                    You are eligible for {selectedKob.licenseType}, click here to proceed
                  </button>
                </div>
              </div>
            )}

          {step === "form" && (
            <form onSubmit={handleSubmit}>
              <div style={priceBox}>
                <b>Selected Service:</b> {selectedService.name}
                <br />

                {selectedService.name === "New FSSAI Registration" &&
                  selectedKob && (
                    <>
                      <b>Kind Of Business:</b> {selectedKob.kobTitle}
                      <br />
                      <b>License Type:</b> {selectedKob.licenseType}
                      <br />
                    </>
                  )}

                <b>Service Fee:</b>{" "}
                {selectedService.name === "New FSSAI Registration"
                  ? selectedKob?.price
                  : selectedService.price}
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

  <p>
    WhatsApp: +91 9322705535 | Email: Regfastindia@gmail.com
  </p>

  <div style={{ marginTop: "15px" }}>
    <a
      href="https://www.instagram.com/regfastindia?igsh=c2o4Y3FlZmg5Zm45"
      target="_blank"
      rel="noreferrer"
      style={socialBtn}
    >
      Instagram
    </a>

    <a
      href="https://www.facebook.com/share/18UxhfbXdp/"
      target="_blank"
      rel="noreferrer"
      style={socialBtn}
    >
      Facebook
    </a>
  </div>

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

const navStyle = { color: "#0F3D73", textDecoration: "none" };

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
  margin: "10px",
  background: "#F26A1B",
  color: "white",
  padding: "14px 28px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "800",
  border: "none",
  cursor: "pointer",
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

const aboutSection = { background: "#FFF7ED", padding: "80px 8%" };

const aboutBox = {
  maxWidth: "950px",
  margin: "auto",
  background: "white",
  padding: "45px",
  borderRadius: "20px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
  borderLeft: "6px solid #F26A1B",
};

const aboutText = {
  fontSize: "18px",
  lineHeight: "1.8",
  color: "#475569",
};

const applySection = {
  background: "#0F3D73",
  padding: "70px 20px",
};

const formBox = {
  maxWidth: "950px",
  margin: "auto",
  background: "white",
  padding: "40px",
  borderRadius: "20px",
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

const kobItem = { marginBottom: "8px" };

const kobHeader = {
  color: "white",
  padding: "12px 18px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  fontWeight: "700",
  borderRadius: "4px",
};

const kobContent = {
  background: "linear-gradient(135deg, #1AA37A, #058B84)",
  color: "white",
  padding: "22px",
  borderRadius: "4px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "15px",
};

const thStyle = {
  borderBottom: "1px solid rgba(255,255,255,0.6)",
  padding: "12px",
  textAlign: "left",
};

const tdStyle = {
  borderBottom: "1px solid rgba(255,255,255,0.4)",
  padding: "12px",
};

const darkBtn = {
  background: "#1f2937",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "6px",
  margin: "5px",
  cursor: "pointer",
  fontWeight: "700",
};

const eligibilityTable = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "25px",
};

const eligibilityTh = {
  background: "#f1f5f9",
  padding: "14px",
  textAlign: "left",
  border: "1px solid #e5e7eb",
};

const eligibilityTd = {
  padding: "14px",
  border: "1px solid #e5e7eb",
};

const priceBox = {
  background: "#FFF7ED",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "20px",
  color: "#0F3D73",
  border: "1px solid #F26A1B",
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

const socialBtn = {
  display: "inline-block",
  margin: "8px",
  padding: "10px 18px",
  background: "#F26A1B",
  color: "white",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "700",
};