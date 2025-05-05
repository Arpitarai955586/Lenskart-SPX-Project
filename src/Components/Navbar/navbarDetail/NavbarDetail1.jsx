import React from 'react';
import Nav from '../Nav';
import Navbar from '../../Navbar/Navbar';
const PurposeSection = () => {
  const sectionStyle = {
    backgroundColor: "#0B0B5C",
    color: "white",
    padding: "40px 20px",
    fontFamily: "sans-serif",
    fontSize: "14px",
  };

  const footerGrid = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    minWidth: "150px",
  };

  const bottomBar = {
    borderTop: "1px solid #ddd",
    marginTop: "40px",
    paddingTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    fontSize: "13px",
  };

  const appLinks = {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  };
  return (
    <div>
      <Navbar/>
    <div style={{ backgroundColor: '#00003a', color: 'white', padding: '50px 20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center', fontWeight: 'normal', marginBottom: '50px' }}>Our purpose</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        {/* Left Text Section */}
        <div style={{ flex: '1 1 45%', minWidth: '300px', paddingRight: '20px' }}>
          <h1 style={{ fontSize: '48px', lineHeight: '1.2', fontWeight: 'normal' }}>
            We exist to transform the way people see and experience the world.
          </h1>
          <p style={{ fontSize: '24px', marginTop: '30px', lineHeight: '1.6' }}>
            Since day one, Lenskart has defied expectations on how people engage with eyewear.
            Yes, eyecare and eyewear is what we do. But we exist for something much bigger than ourselves.
          </p>
        </div>

        {/* Right Video Section */}
        <div style={{ flex: '1 1 45%', minWidth: '300px', marginTop: '20px' }}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/your-video-id" // Replace with real video ID
            title="Our Purpose"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      </div>
      <div>
      <img src="https://static1.lenskart.com/media/desktop/img/Apr22/more1.jpg" alt="" />
    </div>
    <footer style={sectionStyle}>
      <div style={footerGrid}>
        <div style={columnStyle}>
          <strong>Services</strong>
          <span>Store Locator</span>
          <span>Buying Guide</span>
          <span>Frame Size</span>
        </div>
        <div style={columnStyle}>
          <strong>About Us</strong>
          <span>We Are Hiring</span>
          <span>Refer And Earn</span>
          <span>About us</span>
          <span>Lenskart Coupons</span>
        </div>
        <div style={columnStyle}>
          <strong>Help</strong>
          <span>FAQ's</span>
          <span>Grievance Redressal</span>
          <span>Cardemi</span>
        </div>
        <div>
          <div style={appLinks}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              height="40"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              height="40"
            />
          </div>
          <p style={{ marginTop: "10px", maxWidth: "300px" }}>
            Download Lenskart App to buy Eyeglasses, Sunglasses and Contact
            Lenses
          </p>
        </div>
      </div>
      <div style={bottomBar}>
        <div style={{ display: "flex", gap: "20px" }}>
          <span>T & C</span>
          <span>Privacy</span>
          <span>Disclaimer</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span>Version 1.0.0</span>
          <span>||</span>
          <span>Follow Us</span>
          <span>📘</span>
          <span>📸</span>
          <span>💬</span>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default PurposeSection;
