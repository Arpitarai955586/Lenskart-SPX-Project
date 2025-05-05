import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FooterPhone() {
  const sectionStyle = {
    borderBottom: "1px solid white",
    padding: "16px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        backgroundColor: "#00004d",
        color: "white",
        fontFamily: "sans-serif",
        padding: "20px",
        marginBottom:"20px"
      }}
    >
      {/* Dropdown Items */}
      <div style={sectionStyle}>
        <span>Eyeglasses</span>
        <span>▾</span>
      </div>
      <div style={sectionStyle}>
        <span>Sunglasses</span>
        <span>▾</span>
      </div>
      <div style={sectionStyle}>
        <span>Contact Lenses</span>
        <span>▾</span>
      </div>

      {/* Help Section */}
      <div style={{ marginTop: "24px" }}>
        <p style={{ fontSize: "14px", margin: 0 }}>Can we</p>
        <p style={{ fontWeight: "bold", fontSize: "20px", margin: "4px 0" }}>
          Help?
        </p>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
          <div
            style={{
              backgroundColor: "white",
              color: "#00004d",
              padding: "6px",
              borderRadius: "4px",
              marginRight: "8px",
              fontWeight: "bold",
            }}
          >
            💬
          </div>
          <span>Chat With Us</span>
        </div>
      </div>

      <div style={sectionStyle}>
        <span>More about lenskart.com</span>
        <span>▾</span>
      </div>

      {/* Social Links */}
      <div style={{ marginTop: "20px" }}>
        <p style={{ marginBottom: "10px" }}>Follow Us</p>
        <div style={{ display: "flex", gap: "16px", fontSize: "20px" }}>
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>

      {/* Bottom Info */}
      <div
        style={{
          borderTop: "1px solid white",
          marginTop: "20px",
          paddingTop: "10px",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
          color: "white",
        }}
      >
        <span>© All Rights Reserved | www.lenskart.com</span>
        <span>Version 1.0.0</span>
      </div>
    </div>
  );
}
