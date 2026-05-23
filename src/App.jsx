export default function App() {
  const services = [
    "Driving License",
    "Vehicle Registration",
    "RC Transfer",
    "License Renewal",
    "Duplicate License",
    "Insurance Services",
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#102A43" }}>
      <header style={{
        background: "white",
        padding: "15px 8%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 10
      }}>
        <img src="/logo.jpeg" alt="RegFast India" style={{ height: "70px" }} />

        <nav style={{ display: "flex", gap: "25px", fontWeight: "600" }}>
          <a href="#" style={navStyle}>Home</a>
          <a href="#services" style={navStyle}>Services</a>
          <a href="#apply" style={navStyle}>Apply</a>
          <a href="#contact" style={navStyle}>Contact</a>
        </nav>

        <a href="tel:+919876543210" style={callBtn}>Call Now</a>
      </header>

      <section style={{
        padding: "90px 8%",
        background: "linear-gradient(120deg, #FFF7ED 0%, #FFFFFF 45%, #EAF3FF 100%)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "40px",
        alignItems: "center"
      }}>
        <div>
          <p style={{ color: "#F26A1B", fontWeight: "800", letterSpacing: "2px" }}>
            FAST • RELIABLE • HASSLE-FREE
          </p>

          <h1 style={{
            fontSize: "56px",
            lineHeight: "1.1",
            color: "#0F3D73",
            marginBottom: "20px"
          }}>
            All RTO Services <br />
            Under <span style={{ color: "#F26A1B" }}>One Roof</span>
          </h1>

          <p style={{ fontSize: "20px", color: "#475569", lineHeight: "1.7" }}>
            We provide private assistance for driving license, vehicle registration,
            RC transfer, renewal and documentation support.
          </p>

          <div style={{ display: "flex", gap: "15px", marginTop: "30px" }}>
            <a href="#apply" style={primaryBtn}>Apply Now</a>
            <a href="https://wa.me/919876543210" style={whatsappBtn}>WhatsApp</a>
          </div>
        </div>

        <div style={{
          background: "white",
          padding: "30px",
          borderRadius: "24px",
          boxShadow: "0 15px 35px rgba(15,61,115,0.15)",
          textAlign: "center"
        }}>
          <img src="/logo.jpeg" alt="RegFast India Logo" style={{ width: "260px" }} />
          <h2 style={{ color: "#0F3D73" }}>Trusted RTO Assistance</h2>
          <p style={{ color: "#64748b" }}>
            Quick support for license and vehicle-related services.
          </p>
        </div>
      </section>

      <section id="services" style={{ padding: "70px 8%" }}>
        <h2 style={{ textAlign: "center", fontSize: "42px", color: "#0F3D73" }}>
          Our <span style={{ color: "#F26A1B" }}>Services</span>
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "25px",
          marginTop: "40px"
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
              padding: "30px",
              borderRadius: "18px",
              background: "white",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              borderTop: "5px solid #F26A1B"
            }}>
              <h3 style={{ color: "#0F3D73" }}>{service}</h3>
              <p style={{ color: "#64748b" }}>
                Professional documentation and application assistance for {service.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="apply" style={{
        background: "#0F3D73",
        padding: "70px 20px"
      }}>
        <div style={{
          maxWidth: "700px",
          margin: "auto",
          background: "white",
          padding: "40px",
          borderRadius: "20px"
        }}>
          <h2 style={{ textAlign: "center", color: "#0F3D73" }}>
            Apply For Service
          </h2>

          <input placeholder="Full Name" style={inputStyle} />
          <input placeholder="Mobile Number" style={inputStyle} />
          <input placeholder="Email Address" style={inputStyle} />

          <select style={inputStyle}>
            <option>Driving License</option>
            <option>Vehicle Registration</option>
            <option>RC Transfer</option>
            <option>License Renewal</option>
            <option>Duplicate License</option>
          </select>

          <textarea placeholder="Address / Message" rows="4" style={inputStyle}></textarea>

          <button style={{
            width: "100%",
            background: "#F26A1B",
            color: "white",
            border: "none",
            padding: "15px",
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: "800"
          }}>
            Submit Application
          </button>
        </div>
      </section>

      <footer id="contact" style={{
        background: "#071B33",
        color: "white",
        textAlign: "center",
        padding: "40px 8%"
      }}>
        <img src="/logo.jpeg" alt="RegFast India" style={{
          height: "75px",
          background: "white",
          padding: "8px",
          borderRadius: "10px"
        }} />

        <p>Phone: +91 9876543210 | Email: support@regfastindia.com</p>

        <p style={{ color: "#CBD5E1", maxWidth: "850px", margin: "20px auto" }}>
          Disclaimer: We are a private consultancy service provider and are not affiliated
          with any government authority, RTO office, or transport department.
        </p>
      </footer>
    </div>
  );
}

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

const primaryBtn = {
  background: "#F26A1B",
  color: "white",
  padding: "15px 35px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "800",
};

const whatsappBtn = {
  background: "white",
  color: "#16A34A",
  padding: "15px 35px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "800",
  border: "2px solid #16A34A",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  border: "1px solid #CBD5E1",
  borderRadius: "8px",
  fontSize: "16px",
};