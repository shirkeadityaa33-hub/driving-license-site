export default function App() {
  const services = [
    "Learner License",
    "New Driving License",
    "License Renewal",
    "Duplicate License",
    "RC Transfer",
    "International Driving Permit",
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* Header */}
      <header
        style={{
          background: "#0f172a",
          color: "white",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>DriveAssist</h2>

        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>

          <a
            href="#services"
            style={{ color: "white", textDecoration: "none" }}
          >
            Services
          </a>

          <a
            href="#about"
            style={{ color: "white", textDecoration: "none" }}
          >
            About
          </a>

          <a
            href="#contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        style={{
          background: "#eff6ff",
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            color: "#1e3a8a",
            marginBottom: "20px",
          }}
        >
          Fast & Reliable Driving License Assistance
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#475569",
            maxWidth: "700px",
            margin: "0 auto 30px",
          }}
        >
          We help customers with learner licenses, renewals,
          duplicate licenses, and RTO documentation support.
        </p>

        <a href="#apply-form">
          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "14px 30px",
              borderRadius: "8px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Apply Now
          </button>
        </a>
      </section>

      {/* Services */}
      <section
        id="services"
        style={{ padding: "70px 40px" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "38px",
            marginBottom: "50px",
            color: "#1e3a8a",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "#f8fafc",
                padding: "30px",
                borderRadius: "16px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  color: "#1e3a8a",
                  marginBottom: "15px",
                }}
              >
                {service}
              </h3>

              <p style={{ color: "#475569" }}>
                Professional assistance for{" "}
                {service.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        style={{
          background: "#f1f5f9",
          padding: "70px 40px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "38px",
            color: "#1e3a8a",
            marginBottom: "20px",
          }}
        >
          About Us
        </h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "auto",
            fontSize: "18px",
            color: "#475569",
            lineHeight: "1.8",
          }}
        >
          We are a private consultancy service provider helping
          customers with driving-license-related applications
          and documentation support services.
        </p>
      </section>

      {/* Apply Form */}
      <section
        id="apply-form"
        style={{
          background: "#eff6ff",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "auto",
            background: "white",
            padding: "40px",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "#1e3a8a",
            }}
          >
            Apply For Driving License Service
          </h2>

          <form>
            <div style={{ marginBottom: "20px" }}>
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label>Mobile Number</label>

              <input
                type="text"
                placeholder="Enter mobile number"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter email"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label>Select Service</label>

              <select
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                }}
              >
                <option>Learner License</option>
                <option>New Driving License</option>
                <option>License Renewal</option>
                <option>Duplicate License</option>
                <option>RC Transfer</option>
              </select>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label>Address</label>

              <textarea
                rows="4"
                placeholder="Enter your address"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                background: "#2563eb",
                color: "white",
                padding: "14px",
                border: "none",
                borderRadius: "8px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          padding: "70px 40px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "38px",
            color: "#1e3a8a",
            marginBottom: "20px",
          }}
        >
          Contact Us
        </h2>

        <p
          style={{
            fontSize: "20px",
            color: "#475569",
          }}
        >
          Phone: +91 9876543210
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#475569",
          }}
        >
          Email: support@driveassist.com
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#020617",
          color: "white",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <p>© 2026 DriveAssist. All Rights Reserved.</p>

        <p
          style={{
            marginTop: "15px",
            color: "#94a3b8",
            maxWidth: "800px",
            marginInline: "auto",
          }}
        >
          Disclaimer: We are a private consultancy service provider and
          are not affiliated with any government authority or RTO office.
        </p>
      </footer>
    </div>
  );
}