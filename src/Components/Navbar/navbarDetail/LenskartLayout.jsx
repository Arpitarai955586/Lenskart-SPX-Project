import { border, position } from '@chakra-ui/react';
import React from 'react';

export default function LenskartLayout() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    borderBottom: '1px solid #ccc',
    fontSize: '14px',
  };

  const navStyle = {
    display: 'flex',
    marginLeft:"30px",
    // justifyContent: 'space-around',
    gap:"25px",
    padding: '10px 0',
    fontWeight: 'bold',
    borderBottom: '2px solid #f2f2f2',
    background: '#fefefe',
  };

  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#00044d',
    color: 'white',
    padding: '40px 20px',
    fontSize: '14px',
    position:"fixed",
    bottom:"0",
    width:"100%"
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  const appLinks = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div>
      {/* Header Top */}
      <div style={headerStyle}>
        <span>Lenskart</span>
        {/* <input type="text" placeholder="What are you looking for?" style={{ padding: '5px', width: '40%', border:"1px solid black" }} /> */}
        <input
  type="text"
  placeholder="What are you looking for?"
  style={{
    padding: '10px',
    width: '40%',
    border: '1px solid black',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    outline: 'none',
  }}
  onFocus={(e) => (e.target.style.border = '1px solid #007BFF')}
  onBlur={(e) => (e.target.style.border = '1px solid black')}
/>

        <div style={{ display: 'flex', gap: '15px' }}>

          <span>Track Order</span>
          <span>Sign In</span>
          <span>Wishlist</span>
          <span>Cart</span>
        </div>
      </div>

      {/* Nav Categories */}
      <div style={navStyle}>
        <span>EYEGASSES</span>
        <span>SCREEN GLASSES</span>
        <span>KIDS GLASSES</span>
        <span>CONTACT LENSES</span>
        <span>SUNGLASSES</span>
        <span>HOME EYE-TEST</span>
        <span>STORE LOCATOR</span>
      </div>

      {/* Main Body (You can place dynamic content here) */}
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2>Cobrowsing Code is : 875424</h2>
      </div>

      {/* Footer */}
      <div style={footerStyle}>
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
          <span>FAQ’s</span>
          <span>Grievance Redressal</span>
          <span>Cardemi</span>
        </div>
        <div style={appLinks}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" height="40" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Download_on_the_App_Store_Badge.svg" alt="App Store" height="40" />
          <p style={{ marginTop: '10px', textAlign: 'center' }}>
            Download Lenskart App to buy<br />Eyeglasses, Sunglasses and Contact Lenses
          </p>
        </div>
      </div>
    </div>
  );
}