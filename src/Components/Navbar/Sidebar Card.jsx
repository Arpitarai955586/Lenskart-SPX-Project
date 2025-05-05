
import React from 'react';
import { useState } from 'react';

const Sidebar = ({ isOpen, onClose }) => {
 const [openSection, setOpenSection] = useState(null);

const toggleSection = (section) => {
      setOpenSection(openSection === section ? null : section);
    };
  const sidebarStyles = {
    position: 'fixed',
    top: 0,
    right: isOpen ? 0 : '-100%',
    height: '100%',
    width: '80%',
    maxWidth: '320px',
    backgroundColor: 'white',
    boxShadow: '-2px 0 5px rgba(0,0,0,0.2)',
    transition: 'right 0.3s ease-in-out',
    zIndex: 1000,
    padding: '20px',
    fontFamily: 'sans-serif'
  };

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: isOpen ? 'block' : 'none',
    zIndex: 999
  };

  return (
    <>
      {/* Overlay */}
      <div style={overlayStyles} onClick={onClose}></div>

      {/* Sidebar */}
      <div style={sidebarStyles}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
          <img src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="Lenskart" style={{ height: 24 }} />
          <button onClick={onClose} style={{ fontSize: 20 }}>×</button>
        </div>

        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              width: 50, height: 35, borderRadius: '48%',
              border: '1px solid #000', display: 'flex',
              alignItems: 'center', justifyContent: 'center', marginRight: 10
            }}>
              👤
            </div>
            <div >
              <div style={{ fontWeight: 'bold' }}>Hi SpecsY!</div>
              <div style={{ fontSize: 12, color: '#555' }}>
                Login or Signup to track your orders and get access to exclusive deals.
              </div>
            </div>
          </div>
          <button style={{
            marginTop: 10,
            width: '100%',
            backgroundColor: '#000042',
            color: 'white',
            padding: '10px 0',
            border: 'none',
            borderRadius: 10,
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Login/Signup
          </button>
        </div>

        <div style={{ borderTop: '1px solid #ccc', paddingTop: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            📞 <span style={{ marginLeft: 10 }}>9999899998</span>
          </div>

          {/* <div style={{ fontWeight: 'bold', margin: '10px 0' }}>Shop Eyeglasses ⌄</div>
          
          <div style={{ fontWeight: 'bold', margin: '10px 0' }}>Shop Sunglasses ⌄</div>

          <div style={{ fontWeight: 'bold', margin: '10px 0' }}>Shop Contact Lens ⌄</div> */}
          <div
        onClick={() => toggleSection('eyeglasses')}
        style={{ fontWeight: 'bold', margin: '10px 0', cursor: 'pointer' }}
      >
        Shop Eyeglasses ⌄
      </div>
      {openSection === 'eyeglasses' && (
        <div style={{ marginLeft: '20px' }}>
          <p>- Men's Eyeglasses</p>
          <p>- Women's Eyeglasses</p>
          <p>- Kids' Eyeglasses</p>
        </div>
      )}

      <div
        onClick={() => toggleSection('sunglasses')}
        style={{ fontWeight: 'bold', margin: '10px 0', cursor: 'pointer' }}
      >
        Shop Sunglasses ⌄
      </div>
      {openSection === 'sunglasses' && (
        <div style={{ marginLeft: '20px' }}>
          <p>- Men's Sunglasses</p>
          <p>- Women's Sunglasses</p>
          <p>- Kids' Sunglasses</p>
        </div>
      )}

      <div
        onClick={() => toggleSection('contacts')}
        style={{ fontWeight: 'bold', margin: '10px 0', cursor: 'pointer' }}
      >
        Shop Contact Lens ⌄
      </div>
      {openSection === 'contacts' && (
        <div style={{ marginLeft: '20px' }}>
          <p>- Daily Contact Lenses</p>
          <p>- Monthly Contact Lenses</p>
          <p>- Colored Contact Lenses</p>
        </div>
      )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
