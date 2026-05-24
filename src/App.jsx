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
      ],
    },
    {
      title: "Retailer",
      description:
        "Retail food business selling food products directly to customers.",
      options: [
        {
          id: "retailer-registration",
          criteria: "Retail food business",
          licenseType: "Registration",
          price: "₹2,999",
        },
      ],
    },
    {
      title: "Distributor",
      description:
        "Distributor supplying food products from manufacturer or wholesaler.",
      options: [
        {
          id: "distributor-registration",
          criteria: "Distributor food business",
          licenseType: "Registration",
          price: "₹2,999",
        },
      ],
    },
  ];

  const [selectedService, setSelectedService] = useState(services[0]);
  const [step, setStep] = useState("kob");
  const [openKob, setOpenKob] = useState(kobList[0].title);
  const [selectedKobs, setSelectedKobs] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(false);

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
    setMobileMenu(false);

    if (service.name === "New FSSAI Registration") {
      setStep("kob");
      setSelectedKobs([]);
    } else {
      setStep("form");
    }

    setTimeout(() => {
      document.getElementById("apply")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const toggleKobOption = (kob, option) => {
    const alreadySelected = selectedKobs.some(
      (item) => item.id === option.id
    );

    if (alreadySelected) {
      setSelectedKobs(
        selectedKobs.filter((item) => item.id !== option.id)
      );
    } else {
      setSelectedKobs([
        ...selectedKobs,
        {
          kobTitle: kob.title,
          ...option,
        },
      ]);
    }
  };

  const proceedToEligibility = () => {
    if (selectedKobs.length === 0) {
      alert("Please select at least one option.");
      return;
    }

    setStep("eligibility");
  };

  const proceedToForm = () => {
    setStep("form");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const kobText = selectedKobs
      .map(
        (item, index) =>
          `${index + 1}. ${item.kobTitle}
Criteria: ${item.criteria}
License Type: ${item.licenseType}
Price: ${item.price}`
      )
      .join("\n\n");

    const whatsappMessage = `New Application

Service: ${selectedService.name}

${kobText}

Client Details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Business Name: ${formData.businessName}
Address: ${formData.address}
Message: ${formData.message}`;

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

        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        .header {
          background: white;
          padding: 15px 8%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }

        .logo {
          height: 70px;
        }

        .nav {
          display: flex;
          gap: 25px;
        }

        .nav a {
          text-decoration: none;
          color: #0F3D73;
          font-weight: 700;
        }

        .menuIcon {
          display: none;
          font-size: 34px;
          cursor: pointer;
        }

        .callBtn {
          background: #F26A1B;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
        }

        .hero {
          padding: 90px 8%;
          background: linear-gradient(120deg,#FFF7ED,#EAF3FF);
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
          gap: 40px;
          align-items: center;
        }

        .heroTitle {
          font-size: 56px;
          line-height: 1.1;
          color: #0F3D73;
        }

        .heroText {
          color: #475569;
          font-size: 20px;
          line-height: 1.8;
        }

        .primaryBtn {
          display: inline-block;
          background: #F26A1B;
          color: white;
          padding: 15px 28px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 800;
          margin-top: 20px;
        }

        .heroCard {
          background: white;
          border-radius: 20px;
          padding: 35px;
          text-align: center;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }

        .heroCard img {
          width: 250px;
          max-width: 100%;
        }

        .aboutSection {
          padding: 70px 8%;
          background: #FFF7ED;
        }

        .aboutBox {
          background: white;
          padding: 40px;
          border-radius: 20px;
          border-left: 5px solid #F26A1B;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }

        .applySection {
          background: #0F3D73;
          padding: 70px 20px;
        }

        .formBox {
          background: white;
          max-width: 950px;
          margin: auto;
          padding: 35px;
          border-radius: 18px;
        }

        .inputStyle {
          width: 100%;
          padding: 14px;
          margin-bottom: 16px;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        .kobHeader {
          background: teal;
          color: white;
          padding: 14px;
          margin-top: 8px;
          cursor: pointer;
          border-radius: 4px;
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }

        .kobContent {
          background: linear-gradient(135deg,#1AA37A,#058B84);
          color: white;
          padding: 20px;
        }

        table {
          width: 100%;
          margin-top: 15px;
          border-collapse: collapse;
        }

        th, td {
          padding: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.4);
        }

        .darkBtn {
          background: #1f2937;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 6px;
          margin: 5px;
          cursor: pointer;
        }

        .submitBtn {
          width: 100%;
          background: #F26A1B;
          color: white;
          border: none;
          padding: 15px;
          border-radius: 10px;
          font-size: 18px;
          font-weight: bold;
        }

        .footer {
          background: #071B33;
          color: white;
          text-align: center;
          padding: 40px 8%;
        }

        .footerLogo {
          height: 70px;
          background: white;
          padding: 8px;
          border-radius: 10px;
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
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          font-size: 30px;
        }

        @media(max-width:768px){

          .menuIcon{
            display:block;
          }

          .nav{
            display:none;
            flex-direction:column;
            position:absolute;
            top:85px;
            left:0;
            width:100%;
            background:white;
            padding:20px;
          }

          .nav.showMenu{
            display:flex;
          }

          .callBtn{
            display:none;
          }

          .hero{
            padding:50px 18px;
            text-align:center;
          }

          .heroTitle{
            font-size:36px;
          }

          .formBox{
            padding:20px;
          }

          table{
            min-width:650px;
          }
        }
      `}</style>

      <header className="header">
        <img src="/logo.jpeg" alt="Logo" className="logo" />

        <div className="menuIcon" onClick={() => setMobileMenu(!mobileMenu)}>
          ☰
        </div>

        <nav className={`nav ${mobileMenu ? "showMenu" : ""}`}>
          <a href="#">Home</a>
          <a href="#apply">Services</a>
          <a href="#about">About</a>
          <a href="#apply">Apply</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#apply" className="callBtn">
          Apply Now
        </a>
      </header>

      <section className="hero">
        <div>
          <p style={{ color: "#F26A1B", fontWeight: "800" }}>
            PRIVATE CONSULTANCY SERVICES
          </p>

          <h1 className="heroTitle">
            Business Registration & Compliance{" "}
            <span style={{ color: "#F26A1B" }}>Services</span>
          </h1>

          <p className="heroText">
            Fast and trusted support for FSSAI registration,
            renewal, modification, water testing report and
            website designing.
          </p>

          <a href="#apply" className="primaryBtn">
            Apply Now
          </a>
        </div>

        <div className="heroCard">
          <img src="/logo.jpeg" alt="Logo" />
          <h2 style={{ color: "#0F3D73" }}>
            Fast & Trusted Registration Services
          </h2>
        </div>
      </section>

      <section id="about" className="aboutSection">
        <div className="aboutBox">
          <h2 style={{ color: "#0F3D73" }}>
            About <span style={{ color: "#F26A1B" }}>RegFast India</span>
          </h2>

          <p style={{ lineHeight: "1.8", color: "#475569" }}>
            RegFast India is a private consultancy service provider
            offering support for FSSAI services,
            documentation assistance, water testing reports
            and website designing.
          </p>
        </div>
      </section>
<section id="services" className="section">
  <h2 className="sectionTitle">
    Our <span style={{ color: "#F26A1B" }}>Services</span>
  </h2>

  <div className="serviceGrid">
    {services.map((service, index) => (
      <div key={index} className="serviceCard">
        <h3 style={{ color: "#0F3D73" }}>
          {service.name}
        </h3>

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
      <section id="apply" className="applySection">
        <div className="formBox">
          <h2 style={{ textAlign: "center", color: "#0F3D73" }}>
            {selectedService.name}
          </h2>

          <select
            className="inputStyle"
            value={selectedService.name}
            onChange={(e) => {
              const service = services.find(
                (s) => s.name === e.target.value
              );
              chooseService(service);
            }}
          >
            {services.map((service, index) => (
              <option key={index}>{service.name}</option>
            ))}
          </select>

          {selectedService.name === "New FSSAI Registration" &&
            step === "kob" && (
              <>
                <h2 style={{ textAlign: "center" }}>
                  Kind Of Business (KOB)
                </h2>

                {kobList.map((kob, index) => (
                  <div key={index}>
                    <div
                      className="kobHeader"
                      onClick={() =>
                        setOpenKob(
                          openKob === kob.title ? "" : kob.title
                        )
                      }
                    >
                      <span>{kob.title}</span>
                      <span>
                        {openKob === kob.title ? "⌃" : "⌄"}
                      </span>
                    </div>

                    {openKob === kob.title && (
                      <div className="kobContent">
                        <h3>Description</h3>
                        <p>{kob.description}</p>

                        <table>
                          <thead>
                            <tr>
                              <th>Criteria</th>
                              <th>License Type</th>
                              <th>1 Year</th>
                            </tr>
                          </thead>

                          <tbody>
                            {kob.options.map((option) => {
                              const isSelected =
                                selectedKobs.some(
                                  (item) => item.id === option.id
                                );

                              return (
                                <tr key={option.id}>
                                  <td>{option.criteria}</td>
                                  <td>{option.licenseType}</td>
                                  <td>
                                    {option.price}{" "}
                                    <input
                                      type="checkbox"
                                      checked={isSelected}
                                      onChange={() =>
                                        toggleKobOption(kob, option)
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

                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <button
                    className="darkBtn"
                    onClick={() => setSelectedKobs([])}
                  >
                    Clear All Selected KOB
                  </button>

                  <button
                    className="darkBtn"
                    onClick={proceedToEligibility}
                  >
                    Proceed
                  </button>
                </div>
              </>
            )}

          {step === "eligibility" && (
            <div style={{ textAlign: "center" }}>
              <h2>View Eligibility</h2>

              <button
                className="primaryBtn"
                onClick={proceedToForm}
              >
                Click here to proceed
              </button>
            </div>
          )}

          {step === "form" && (
            <form onSubmit={handleSubmit}>
              <input
                className="inputStyle"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />

              <input
                className="inputStyle"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
              />

              <input
                className="inputStyle"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />

              <input
                className="inputStyle"
                placeholder="Business Name"
                required
                value={formData.businessName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    businessName: e.target.value,
                  })
                }
              />

              <textarea
                rows="4"
                className="inputStyle"
                placeholder="Address"
                required
                value={formData.address}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: e.target.value,
                  })
                }
              />

              <textarea
                rows="4"
                className="inputStyle"
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
              />

              <button className="submitBtn">
                Submit Application on WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      <footer id="contact" className="footer">
        <img src="/logo.jpeg" alt="Logo" className="footerLogo" />

        <p>
          WhatsApp: +91 9322705535 |
          Email: Regfastindia@gmail.com
        </p>

        <div>
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
      </footer>

      <a
        href="https://wa.me/919322705535"
        className="whatsappFloat"
        target="_blank"
        rel="noreferrer"
      >
        💬
      </a>
    </div>
  );
}