import { useState } from "react";

export default function App() {
  const whatsappNumber = "919322705535";

  const services = [
    {
      name: "New FSSAI Registration",
      price: "Select KOB",
      description:
        "Choose your business type and get FSSAI registration support with documentation and application assistance.",
    },
    {
      name: "MSME / UDYAM Registration",
      price: "₹599",
      description:
        "Get your MSME/Udyam Registration quickly and easily. Udyam registration helps businesses access government benefits, loan schemes, subsidies, and official business recognition. The government’s Udyam registration system is online and paperless.",
    },
    {
      name: "Shop & Establishment Act Registration",
      price: "₹799",
      description:
        "Register your business under the Shop & Establishment Act for legal compliance. Suitable for shops, offices, startups, and commercial establishments.",
    },
    {
      name: "FSSAI Renewal",
      price: "₹999",
      description:
        "Renew your existing FSSAI registration/license with professional application and documentation support.",
    },
    {
      name: "FSSAI Modification",
      price: "₹999",
      description:
        "Update or modify your FSSAI details with simple documentation and online application assistance.",
    },
    {
      name: "Water Testing Report",
      price: "₹2,999",
      description:
        "Get support for water testing report requirements for food business compliance.",
    },
    {
      name: "Website Designing",
      price: "₹4,999",
      description:
        "Create a clean and professional website for your business with basic setup support.",
    },
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
          price: "₹899",
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
          price: "₹899",
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
          price: "₹899",
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
          price: "₹899",
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
          price: "₹899",
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
          price: "₹899",
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
          price: "₹899",
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

    if (service.name === "New FSSAI Registration") {
      setStep("kob");
    } else {
      setStep("form");
    }

    setSelectedKobs([]);

    setTimeout(() => {
      document
        .getElementById("apply")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const toggleKobOption = (kob, option) => {
    const exists = selectedKobs.find(
      (item) => item.id === option.id
    );

    if (exists) {
      setSelectedKobs(
        selectedKobs.filter((item) => item.id !== option.id)
      );
    } else {
      setSelectedKobs([
        ...selectedKobs,
        {
          ...option,
          kobTitle: kob.title,
        },
      ]);
    }
  };

  const proceedToEligibility = () => {
    if (selectedKobs.length === 0) {
      alert("Please select at least one KOB");
      return;
    }

    setStep("eligibility");
  };

  const proceedToForm = () => {
    setStep("form");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let message = `*New Application Request*%0A%0A`;

    message += `*Service:* ${selectedService.name}%0A`;

    if (
      selectedService.name === "New FSSAI Registration"
    ) {
      message += `*Selected KOB:* ${selectedKobs
        .map((item) => item.kobTitle)
        .join(", ")}%0A`;

      message += `*License Type:* ${selectedKobs
        .map((item) => item.licenseType)
        .join(", ")}%0A`;

      message += `*Price:* ${selectedKobs
        .map((item) => item.price)
        .join(", ")}%0A`;
    } else {
      message += `*Price:* ${selectedService.price}%0A`;
    }

    message += `%0A*Name:* ${formData.name}`;
    message += `%0A*Phone:* ${formData.phone}`;
    message += `%0A*Email:* ${formData.email}`;
    message += `%0A*Business:* ${formData.businessName}`;
    message += `%0A*Address:* ${formData.address}`;
    message += `%0A*Message:* ${formData.message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <div>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial,sans-serif;
        }

        body{
          background:#f4f7fb;
          overflow-x:hidden;
        }

        html{
          scroll-behavior:smooth;
        }

        .topBar{
          background:white;
          padding:16px 8%;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:15px;
          flex-wrap:wrap;
        }

        .brandCenter{
          text-align:center;
          flex:1;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
        }

        .brandMainLogo{
          height:82px;
          max-width:260px;
          object-fit:contain;
          display:block;
          margin-bottom:6px;
        }

        .topLogo{
          height:70px;
          max-width:140px;
          object-fit:contain;
        }

        .fssaiLogo{
          background:transparent;
          mix-blend-mode:multiply;
          filter:contrast(1.08) saturate(1.08);
        }

        .header{
          background:linear-gradient(90deg,#0F3D73,#F26A1B);
          padding:14px 8%;
          position:sticky;
          top:0;
          z-index:999;
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .menuIcon{
          display:none;
          color:white;
          font-size:30px;
          cursor:pointer;
        }

        .nav{
          display:flex;
          gap:30px;
          align-items:center;
        }

        .nav a{
          color:white;
          text-decoration:none;
          font-weight:700;
          transition:0.3s;
        }

        .nav a:hover{
          color:#FFD7B8;
        }

        .dropdown{
          position:relative;
        }

        .dropdownContent{
          position:absolute;
          top:30px;
          left:0;
          background:white;
          min-width:250px;
          border-radius:8px;
          overflow:hidden;
          box-shadow:0 10px 25px rgba(0,0,0,0.15);
          display:none;
        }

        .dropdown:hover .dropdownContent{
          display:block;
        }

        .dropdownContent a{
          display:block;
          padding:14px;
          color:#0F3D73;
          border-bottom:1px solid #eee;
        }

        .dropdownContent a:hover{
          background:#F26A1B;
          color:white;
        }

        .banner{
          height:240px;
          background:linear-gradient(135deg,#0F3D73,#49A9BD);
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .banner h1{
          color:white;
          font-size:58px;
          font-weight:900;
          letter-spacing:3px;
        }

        .aboutSection{
          padding:70px 10%;
          background:white;
        }

        .aboutSection h2{
          font-size:42px;
          color:#0F3D73;
          margin-bottom:25px;
        }

        .aboutSection p{
          font-size:18px;
          line-height:1.9;
          color:#334155;
          margin-bottom:20px;
        }

        .serviceCards{
          padding:70px 8%;
          background:#f8fafc;
        }

        .sectionTitle{
          text-align:center;
          font-size:42px;
          margin-bottom:50px;
          color:#0F3D73;
        }

        .serviceGrid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
          gap:25px;
        }

        .serviceCard{
          background:white;
          padding:35px 25px;
          border-radius:16px;
          text-align:center;
          box-shadow:0 8px 24px rgba(0,0,0,0.08);
          border-top:5px solid #F26A1B;
        }

        .serviceCard h3{
          color:#0F3D73;
          margin-bottom:15px;
          font-size:24px;
        }

        .serviceCard p{
          color:#64748b;
          margin-bottom:20px;
          line-height:1.7;
        }

        .servicePrice{
          color:#F26A1B;
          font-weight:900;
          font-size:22px;
          margin-bottom:18px;
        }

        .smallBtn,
        .primaryBtn{
          background:#F26A1B;
          color:white;
          border:none;
          padding:12px 20px;
          border-radius:8px;
          font-weight:700;
          cursor:pointer;
          text-decoration:none;
          display:inline-block;
        }
        .applySection{
          padding:70px 8%;
          background:#0F3D73;
        }

        .formBox{
          background:white;
          max-width:950px;
          margin:auto;
          padding:40px;
          border-radius:18px;
          box-shadow:0 10px 30px rgba(0,0,0,0.15);
        }

        .formBox h2{
          color:#0F3D73;
          text-align:center;
          margin-bottom:25px;
          font-size:34px;
        }

        .inputStyle{
          width:100%;
          padding:14px;
          margin-bottom:18px;
          border:1px solid #CBD5E1;
          border-radius:8px;
          font-size:16px;
        }

        .kobHeader{
          background:#0F3D73;
          color:white;
          padding:14px 18px;
          margin-top:8px;
          cursor:pointer;
          border-radius:5px;
          display:flex;
          justify-content:space-between;
          gap:10px;
          font-weight:700;
        }

        .kobContent{
          background:linear-gradient(135deg,#0F3D73,#49A9BD);
          color:white;
          padding:22px;
          border-radius:0 0 5px 5px;
        }

        .kobContent h3{
          margin:15px 0 8px;
        }

        .tableWrap{
          width:100%;
          overflow-x:auto;
        }

        table{
          width:100%;
          border-collapse:collapse;
          margin-top:15px;
        }

        th,td{
          padding:12px;
          text-align:left;
          border-bottom:1px solid rgba(255,255,255,0.5);
          white-space:normal;
          word-break:break-word;
        }

        .eligibilityTable th{
          background:#f1f5f9;
          color:#0F3D73;
          border:1px solid #e5e7eb;
        }

        .eligibilityTable td{
          color:#0F3D73;
          border:1px solid #e5e7eb;
        }

        .darkBtn{
          background:#1f2937;
          color:white;
          border:none;
          padding:12px 20px;
          border-radius:6px;
          margin:6px;
          font-weight:700;
          cursor:pointer;
        }

        .priceBox{
          background:#FFF7ED;
          border:1px solid #F26A1B;
          color:#0F3D73;
          padding:15px;
          border-radius:10px;
          margin-bottom:20px;
          line-height:1.7;
        }

        .submitBtn{
          width:100%;
          background:#F26A1B;
          color:white;
          border:none;
          padding:15px;
          border-radius:10px;
          font-size:18px;
          font-weight:800;
          cursor:pointer;
        }

        .footer{
          background:#071B33;
          color:white;
          padding:50px 8%;
        }

        .footerGrid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:30px;
        }

        .footer img{
          height:75px;
          background:white;
          padding:8px;
          border-radius:10px;
          margin-bottom:15px;
        }

        .footer h3{
          color:#F26A1B;
          margin-bottom:15px;
        }

        .footer p,
        .footer a{
          color:#CBD5E1;
          text-decoration:none;
          line-height:1.8;
          display:block;
        }

        .socialBtn{
          display:inline-block !important;
          background:#F26A1B;
          color:white !important;
          padding:10px 16px;
          border-radius:8px;
          margin:5px 5px 5px 0;
          font-weight:700;
        }

        .whatsappFloat{
          position:fixed;
          right:20px;
          bottom:20px;
          width:60px;
          height:60px;
          background:#25D366;
          color:white;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          text-decoration:none;
          font-size:30px;
          z-index:999;
          box-shadow:0 6px 18px rgba(0,0,0,0.25);
        }

        @media(max-width:768px){
          .topBar{
            padding:12px 14px;
            justify-content:space-between;
            text-align:center;
            flex-wrap:nowrap;
          }

          .topLogo{
            height:46px;
            max-width:72px;
          }

          .brandMainLogo{
            height:54px;
            max-width:150px;
            margin-bottom:3px;
          }

          .brandCenter h2{
            display:none;
          }

          .brandCenter p{
            font-size:11px;
          }

          .header{
            padding:14px 18px;
          }

          .menuIcon{
            display:block;
          }

          .nav{
            display:none;
            flex-direction:column;
            position:absolute;
            top:58px;
            left:0;
            width:100%;
            background:#0F3D73;
            padding:20px;
          }

          .nav.showMenu{
            display:flex;
          }

          .dropdownContent{
            position:static;
            display:block;
            box-shadow:none;
            margin-top:8px;
          }

          .banner{
            height:180px;
          }

          .banner h1{
            font-size:38px;
          }

          .aboutSection,
          .serviceCards,
          .applySection{
            padding:45px 18px;
          }

          .aboutSection h2,
          .sectionTitle{
            font-size:32px;
          }

          .formBox{
            padding:20px;
          }

          .tableWrap{
            overflow-x:visible;
          }

          table{
            min-width:0;
            width:100%;
            table-layout:fixed;
          }

          th,td{
            font-size:11px;
            padding:8px 5px;
          }

          th:nth-child(1), td:nth-child(1){ width:48%; }
          th:nth-child(2), td:nth-child(2){ width:27%; }
          th:nth-child(3), td:nth-child(3){ width:25%; }

          .darkBtn,
          .submitBtn{
            width:100%;
            margin:8px 0;
          }
        }
      `}</style>

      <div className="topBar">
        <img className="topLogo" src="/msme-logo.jpeg" alt="MSME Logo" />

        <div className="brandCenter">
          <img className="brandMainLogo" src="/logo.jpeg" alt="RegFast India Logo" />
          <h2 style={{ color: "#0F3D73" }}>RegFast India</h2>
          <p style={{ color: "#64748b" }}>
            Business Registration & Compliance Services
          </p>
        </div>

        <img className="topLogo fssaiLogo" src="/fssai-logo.jpeg" alt="FSSAI Logo" />
      </div>

      <header className="header">
        <div className="menuIcon" onClick={() => setMobileMenu(!mobileMenu)}>
          ☰
        </div>

        <nav className={`nav ${mobileMenu ? "showMenu" : ""}`}>
          <a href="#" onClick={() => setMobileMenu(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMobileMenu(false)}>
            About
          </a>

          <div className="dropdown">
            <a href="#services">Services ▾</a>

            <div className="dropdownContent">
              {services.map((service, index) => (
                <a
                  key={index}
                  href="#apply"
                  onClick={() => {
                    chooseService(service);
                    setMobileMenu(false);
                  }}
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>

          <a href="#contact" onClick={() => setMobileMenu(false)}>
            Contact
          </a>
        </nav>
      </header>

      <section className="banner" id="home">
        <h1>ABOUT US</h1>
      </section>
      <section id="about" className="aboutSection">
        <h2>
          About <span style={{ color: "#F26A1B" }}>RegFast India</span>
        </h2>

        <p>
          RegFast India is a private consultancy service provider offering
          business registration, FSSAI registration, FSSAI renewal,
          modification, water testing report support and website designing
          services.
        </p>

        <p>
          We help customers with documentation, online application support and
          compliance-related assistance in a simple and hassle-free way.
        </p>

        <p>
          We are not affiliated with any government authority. We only provide
          private consultancy and documentation support services.
        </p>

        <a href="#services" className="primaryBtn">
          View Services
        </a>
      </section>

      <section id="services" className="serviceCards">
        <h2 className="sectionTitle">
          Our <span style={{ color: "#F26A1B" }}>Services</span>
        </h2>

        <div className="serviceGrid">
          {services.map((service, index) => (
            <div key={index} className="serviceCard">
              <h3>{service.name}</h3>

              <p>{service.description}</p>

              <div className="servicePrice">{service.price}</div>

              <button
                type="button"
                className="smallBtn"
                onClick={() => chooseService(service)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="apply" className="applySection">
        <div className="formBox">
          <h2>{selectedService.name}</h2>

          <select
            className="inputStyle"
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

          {selectedService.name === "New FSSAI Registration" &&
            step === "kob" && (
              <>
                <h2>
                  Kind Of Business{" "}
                  <span style={{ color: "#F26A1B" }}>(KOB)</span>
                </h2>

                {kobList.map((kob, index) => (
                  <div key={index}>
                    <div
                      className="kobHeader"
                      onClick={() =>
                        setOpenKob(openKob === kob.title ? "" : kob.title)
                      }
                    >
                      <span>{kob.title}</span>
                      <span>{openKob === kob.title ? "⌃" : "⌄"}</span>
                    </div>

                    {openKob === kob.title && (
                      <div className="kobContent">
                        <h3>Description</h3>
                        <p>{kob.description}</p>

                        <h3>
                          Fees per Annum / Criteria / Certificate Validity :
                        </h3>

                        <div className="tableWrap">
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
                                const isSelected = selectedKobs.some(
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
                      </div>
                    )}
                  </div>
                ))}

                <div style={{ textAlign: "center", marginTop: "25px" }}>
                  <button
                    type="button"
                    className="darkBtn"
                    onClick={() => setSelectedKobs([])}
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
            selectedKobs.length > 0 && (
              <div>
                <h2>View Eligibility</h2>

                <p style={{ textAlign: "center", color: "#64748b" }}>
                  After assessment of selected KOB, you are eligible for:
                </p>

                <div className="tableWrap">
                  <table className="eligibilityTable">
                    <thead>
                      <tr>
                        <th>SL No</th>
                        <th>Kind Of Business</th>
                        <th>License Category</th>
                      </tr>
                    </thead>

                    <tbody>
                      {selectedKobs.map((item, index) => (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.kobTitle}</td>
                          <td>{item.licenseType}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div style={{ textAlign: "center", marginTop: "25px" }}>
                  <button
                    type="button"
                    className="primaryBtn"
                    onClick={proceedToForm}
                  >
                    Click here to proceed
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
                  selectedKobs.length > 0 && (
                    <>
                      <b>Selected KOB:</b>{" "}
                      {selectedKobs.map((item) => item.kobTitle).join(", ")}
                      <br />

                      <b>License Type:</b>{" "}
                      {selectedKobs.map((item) => item.licenseType).join(", ")}
                      <br />

                      <b>Service Fee:</b>{" "}
                      {selectedKobs.map((item) => item.price).join(", ")}
                    </>
                  )}

                {selectedService.name !== "New FSSAI Registration" && (
                  <>
                    <b>Service Fee:</b> {selectedService.price}
                  </>
                )}
              </div>

              <input
                className="inputStyle"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                className="inputStyle"
                placeholder="Mobile Number"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />

              <input
                className="inputStyle"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <input
                className="inputStyle"
                placeholder="Business / Firm Name"
                required
                value={formData.businessName}
                onChange={(e) =>
                  setFormData({ ...formData, businessName: e.target.value })
                }
              />

              <textarea
                className="inputStyle"
                placeholder="Address"
                rows="4"
                required
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />

              <textarea
                className="inputStyle"
                placeholder="Message / Requirement"
                rows="4"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <button className="submitBtn" type="submit">
                Submit Application on WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="footerGrid">
          <div>
            <img src="/logo.jpeg" alt="RegFast India" />
            <p>
              RegFast India provides private consultancy and documentation
              support services.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <h3>Services</h3>
            {services.map((service, index) => (
              <a key={index} href="#apply" onClick={() => chooseService(service)}>
                {service.name}
              </a>
            ))}
          </div>

          <div>
            <h3>Contact Us</h3>
            <p>WhatsApp: +91 9322705535</p>
            <p>Email: Regfastindia@gmail.com</p>

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
