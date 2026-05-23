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
          id: "petty-registration",
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
          id: "storage-registration",
          criteria: "Turnover up to 12 lakhs/annum",
          licenseType: "Registration",
          price: "₹2,999",
        },
        {
          id: "storage-state",
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
          id: "wholesaler-registration",
          criteria: "Turnover up to 12 lakhs/annum",
          licenseType: "Registration",
          price: "₹2,999",
        },
        {
          id: "wholesaler-state",
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
          id: "retailer-registration",
          criteria: "Turnover up to 12 lakhs/annum",
          licenseType: "Registration",
          price: "₹2,999",
        },
        {
          id: "retailer-state",
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
          id: "distributor-registration",
          criteria: "Turnover up to 12 lakhs/annum",
          licenseType: "Registration",
          price: "₹2,999",
        },
        {
          id: "distributor-state",
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
          id: "direct-seller-registration",
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
          id: "vending-registration",
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
          id: "transport-central",
          criteria:
            "Having more than 100 vehicles/wagons or turnover more than 30 crores/annum",
          licenseType: "Central License",
          price: "₹15,000",
        },
        {
          id: "transport-state",
          criteria:
            "Having up to 100 vehicles/wagons or turnover up to 30 crores/annum",
          licenseType: "State License",
          price: "₹7,999",
        },
        {
          id: "transport-registration",
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
          id: "importer-central",
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
          id: "exporter-central",
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
          id: "hawker-registration",
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

  const chooseService = (service, forceReset = true) => {
    setSelectedService(service);

    if (service.name === "New FSSAI Registration") {
      setStep("kob");
      setOpenKob(kobList[0].title);

      if (forceReset) {
        setSelectedKob(null);
      }
    } else {
      setStep("form");
      setSelectedKob(null);
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
    <div className="site">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }

        .site {
          font-family: Arial, sans-serif;
          color: #102A43;
          width: 100%;
          overflow-x: hidden;
        }

        .header {
          background: white;
          padding: 15px 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .logo {
          height: 70px;
        }

        .nav {
          display: flex;
          gap: 24px;
          font-weight: 600;
        }

        .nav a {
          color: #0F3D73;
          text-decoration: none;
        }

        .callBtn {
          background: #F26A1B;
          color: white;
          padding: 12px 22px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
        }

        .hero {
          padding: 90px 8%;
          background: linear-gradient(120deg, #FFF7ED 0%, #FFFFFF 45%, #EAF3FF 100%);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          align-items: center;
        }

        .heroTitle {
          font-size: 56px;
          line-height: 1.1;
          color: #0F3D73;
          margin-bottom: 20px;
        }

        .heroText {
          font-size: 20px;
          color: #475569;
          line-height: 1.7;
        }

        .primaryBtn {
          display: inline-block;
          margin: 10px;
          background: #F26A1B;
          color: white;
          padding: 14px 28px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 800;
          border: none;
          cursor: pointer;
        }

        .heroCard {
          background: white;
          padding: 30px;
          border-radius: 24px;
          box-shadow: 0 15px 35px rgba(15,61,115,0.15);
          text-align: center;
        }

        .heroCard img {
          width: 260px;
          max-width: 100%;
        }

        .section {
          padding: 70px 8%;
        }

        .sectionTitle {
          text-align: center;
          font-size: 42px;
          color: #0F3D73;
        }

        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 25px;
          margin-top: 40px;
        }

        .serviceCard {
          padding: 30px;
          border-radius: 18px;
          background: white;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          border-top: 5px solid #F26A1B;
        }

        .smallBtn {
          background: #0F3D73;
          color: white;
          border: none;
          padding: 12px 22px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;
        }

        .aboutSection {
          background: #FFF7ED;
          padding: 80px 8%;
        }

        .aboutBox {
          max-width: 950px;
          margin: auto;
          background: white;
          padding: 45px;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          border-left: 6px solid #F26A1B;
        }

        .aboutText {
          font-size: 18px;
          line-height: 1.8;
          color: #475569;
        }

        .applySection {
          background: #0F3D73;
          padding: 70px 20px;
        }

        .formBox {
          max-width: 950px;
          margin: auto;
          background: white;
          padding: 40px;
          border-radius: 20px;
        }

        .inputStyle {
          width: 100%;
          padding: 14px;
          margin-bottom: 18px;
          border: 1px solid #CBD5E1;
          border-radius: 8px;
          font-size: 16px;
        }

        .kobItem {
          margin-bottom: 8px;
        }

        .kobHeader {
          color: white;
          padding: 12px 18px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          gap: 10px;
          font-weight: 700;
          border-radius: 4px;
        }

        .kobContent {
          background: linear-gradient(135deg, #1AA37A, #058B84);
          color: white;
          padding: 22px;
          border-radius: 4px;
        }

        .tableWrap {
          width: 100%;
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 15px;
        }

        th {
          border-bottom: 1px solid rgba(255,255,255,0.6);
          padding: 12px;
          text-align: left;
        }

        td {
          border-bottom: 1px solid rgba(255,255,255,0.4);
          padding: 12px;
        }

        .darkBtn {
          background: #1f2937;
          color: white;
          border: none;
          padding: 12px 18px;
          border-radius: 6px;
          margin: 5px;
          cursor: pointer;
          font-weight: 700;
        }

        .eligibilityTable th {
          background: #f1f5f9;
          padding: 14px;
          text-align: left;
          border: 1px solid #e5e7eb;
          color: #102A43;
        }

        .eligibilityTable td {
          padding: 14px;
          border: 1px solid #e5e7eb;
          color: #102A43;
        }

        .priceBox {
          background: #FFF7ED;
          padding: 15px;
          border-radius: 10px;
          margin-bottom: 20px;
          color: #0F3D73;
          border: 1px solid #F26A1B;
        }

        .submitBtn {
          width: 100%;
          background: #F26A1B;
          color: white;
          border: none;
          padding: 15px;
          border-radius: 10px;
          font-size: 18px;
          font-weight: 800;
          cursor: pointer;
        }

        .footer {
          background: #071B33;
          color: white;
          text-align: center;
          padding: 40px 8%;
        }

        .footerLogo {
          height: 75px;
          background: white;
          padding: 8px;
          border-radius: 10px;
        }

        .disclaimer {
          color: #CBD5E1;
          max-width: 850px;
          margin: 20px auto;
        }

        .socialBtn {
          display: inline-block;
          margin: 8px;
          padding: 10px 18px;
          background: #F26A1B;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
        }

        .whatsappFloat {
          position: fixed;
          bottom: 25px;
          right: 25px;
          width: 65px;
          height: 65px;
          background: #25D366;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
          text-decoration: none;
          box-shadow: 0 6px 18px rgba(0,0,0,0.25);
          z-index: 20;
        }

        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            gap: 12px;
            padding: 12px 16px;
          }

          .logo {
            height: 55px;
          }

          .nav {
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
            font-size: 14px;
          }

          .callBtn {
            padding: 10px 16px;
            font-size: 14px;
          }

          .hero {
            padding: 55px 18px;
            grid-template-columns: 1fr;
            text-align: center;
          }

          .heroTitle {
            font-size: 34px;
          }

          .heroText {
            font-size: 16px;
          }

          .section {
            padding: 50px 16px;
          }

          .sectionTitle {
            font-size: 32px;
          }

          .serviceCard {
            padding: 22px;
          }

          .aboutSection {
            padding: 50px 16px;
          }

          .aboutBox {
            padding: 25px;
          }

          .formBox {
            padding: 22px;
            border-radius: 14px;
          }

          .kobHeader {
            font-size: 14px;
            padding: 12px;
          }

          .kobContent {
            padding: 16px;
            font-size: 14px;
          }

          th, td {
            min-width: 140px;
            font-size: 13px;
            padding: 10px;
          }

          .primaryBtn,
          .darkBtn {
            width: 100%;
            margin: 7px 0;
            text-align: center;
          }

          .whatsappFloat {
            width: 55px;
            height: 55px;
            font-size: 28px;
            bottom: 18px;
            right: 18px;
          }
        }
      `}</style>

      <header className="header">
        <img src="/logo.jpeg" alt="RegFast India" className="logo" />

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#apply">Apply</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#services" className="callBtn">
          Apply Now
        </a>
      </header>

      <section className="hero">
        <div>
          <p style={{ color: "#F26A1B", fontWeight: "800", letterSpacing: "2px" }}>
            PRIVATE CONSULTANCY SERVICES
          </p>

          <h1 className="heroTitle">
            Business Registration <br />
            & Compliance <span style={{ color: "#F26A1B" }}>Services</span>
          </h1>

          <p className="heroText">
            Fast and trusted support for FSSAI registration, renewal,
            modification, water testing report and website designing.
          </p>

          <a href="#services" className="primaryBtn">
            View Services
          </a>
        </div>

        <div className="heroCard">
          <img src="/logo.jpeg" alt="Logo" />
          <h2 style={{ color: "#0F3D73" }}>Fast & Trusted Registration Services</h2>
        </div>
      </section>

      <section id="services" className="section">
        <h2 className="sectionTitle">
          Our <span style={{ color: "#F26A1B" }}>Services</span>
        </h2>

        <div className="serviceGrid">
          {services.map((service, index) => (
            <div key={index} className="serviceCard">
              <h3 style={{ color: "#0F3D73" }}>{service.name}</h3>

              <p style={{ color: "#64748b" }}>
                Professional application and documentation assistance.
              </p>

              <button
                type="button"
                onClick={() => chooseService(service)}
                className="smallBtn"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="aboutSection">
        <div className="aboutBox">
          <h2 style={{ color: "#0F3D73", fontSize: "38px" }}>
            About <span style={{ color: "#F26A1B" }}>RegFast India</span>
          </h2>

          <p className="aboutText">
            RegFast India is a private consultancy service provider offering
            support for FSSAI services, documentation assistance, water testing
            reports and website designing.
          </p>

          <p className="aboutText">
            We are not affiliated with any government authority. We only provide
            private consultancy and documentation support services.
          </p>
        </div>
      </section>

      <section id="apply" className="applySection">
        <div className="formBox">
          <h2 style={{ textAlign: "center", color: "#0F3D73" }}>
            {selectedService.name}
          </h2>

          <select
            className="inputStyle"
            value={selectedService.name}
            onChange={(e) => {
              const service = services.find((s) => s.name === e.target.value);

              if (service.name === selectedService.name) return;

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
                <div key={index} className="kobItem">
                  <div
                    onClick={() =>
                      setOpenKob(openKob === kob.title ? "" : kob.title)
                    }
                    className="kobHeader"
                    style={{
                      background: openKob === kob.title ? "#b91c1c" : "#08796f",
                    }}
                  >
                    <span>{kob.title}</span>
                    <span>{openKob === kob.title ? "⌃" : "⌄"}</span>
                  </div>

                  {openKob === kob.title && (
                    <div className="kobContent">
                      <h3>Description</h3>
                      <p>{kob.description}</p>

                      <h3>Fees per Annum / Criteria / Certificate Validity :</h3>

                      <div className="tableWrap">
                        <table>
                          <thead>
                            <tr>
                              <th>Criteria</th>
                              <th>License Type / Registration</th>
                              <th>1 Year</th>
                            </tr>
                          </thead>

                          <tbody>
                            {kob.options.map((option) => {
                              const isSelected = selectedKob?.id === option.id;

                              return (
                                <tr
                                  key={option.id}
                                  onClick={() =>
                                    setSelectedKob({
                                      kobTitle: kob.title,
                                      description: kob.description,
                                      ...option,
                                    })
                                  }
                                  style={{ cursor: "pointer" }}
                                >
                                  <td>{option.criteria}</td>
                                  <td>{option.licenseType}</td>
                                  <td>
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
                    </div>
                  )}
                </div>
              ))}

              <div style={{ textAlign: "center", marginTop: "25px" }}>
                <button
                  type="button"
                  className="darkBtn"
                  onClick={() => setSelectedKob(null)}
                >
                  Clear All Selected KOB
                </button>

                <button
                  type="button"
                  className="darkBtn"
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

                <div className="tableWrap">
                  <table className="eligibilityTable">
                    <thead>
                      <tr>
                        <th>SL No</th>
                        <th>Kind of Business</th>
                        <th>License Category</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>{selectedKob.kobTitle}</td>
                        <td>{selectedKob.licenseType}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div style={{ textAlign: "center", marginTop: "25px" }}>
                  <button
                    type="button"
                    className="primaryBtn"
                    onClick={proceedToForm}
                  >
                    You are eligible for {selectedKob.licenseType}, click here to proceed
                  </button>
                </div>
              </div>
            )}

          {step === "form" && (
            <form onSubmit={handleSubmit}>
              <div className="priceBox">
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
                className="inputStyle"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                placeholder="Mobile Number"
                required
                className="inputStyle"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />

              <input
                placeholder="Email Address"
                className="inputStyle"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <input
                placeholder="Business / Firm Name"
                required
                className="inputStyle"
                value={formData.businessName}
                onChange={(e) =>
                  setFormData({ ...formData, businessName: e.target.value })
                }
              />

              <textarea
                placeholder="Address"
                required
                rows="4"
                className="inputStyle"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />

              <textarea
                placeholder="Message / Requirement"
                rows="4"
                className="inputStyle"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <button type="submit" className="submitBtn">
                Submit Application on WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      <footer id="contact" className="footer">
        <img src="/logo.jpeg" alt="Logo" className="footerLogo" />

        <p>WhatsApp: +91 9322705535 | Email: Regfastindia@gmail.com</p>

        <div style={{ marginTop: "15px" }}>
          <a
            href="https://www.instagram.com/regfastindia?igsh=c2o4Y3FlZmg5Zm45"
            target="_blank"
            rel="noreferrer"
            className="socialBtn"
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com/share/18UxhfbXdp/"
            target="_blank"
            rel="noreferrer"
            className="socialBtn"
          >
            Facebook
          </a>
        </div>

        <p className="disclaimer">
          Disclaimer: We are a private consultancy service provider and are not
          affiliated with any government authority. We assist customers with
          application, documentation and online service support.
        </p>
      </footer>

      <a
        href="https://wa.me/919322705535"
        target="_blank"
        rel="noreferrer"
        className="whatsappFloat"
      >
        💬
      </a>
    </div>
  );
}