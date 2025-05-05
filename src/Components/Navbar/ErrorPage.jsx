import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSearch, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
const StorePage = () => {
  const navigate = useNavigate();
  const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 16px',
      
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
  }
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#ffffff', textAlign: 'center', color: '#333' }}>
      
      {/* Navbar */}
       <div style={styles.header}>
             
                <button onClick={() => navigate('/', { replace: true })}>
                 <FaArrowLeft size={20} />
              </button>
      
              <h1 style={{ fontSize: '18px', fontWeight: '600', color: '#1E3A8A' }}>Harry Potter</h1>
              <div style={{ display: 'flex', gap: '12px' }}>
                <FaSearch size={20} />
                <FaHeart size={20} />
                <FaShoppingCart size={20} />
                <FaBars size={20} />
              </div>
            </div>

      {/* Main Content */}
      <main style={{ flexGrow: 1, padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '48px', color: 'teal', marginBottom: '20px' }}>DAMN!!</h1>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '10px' }}>
          Seems like the page you were looking for cannot be found. Don't worry.
        </p>
        <p style={{ fontSize: '16px', color: '#999', marginBottom: '20px' }}>
          The requested resource failed with status 404.
        </p>
        <a 
          href="/" 
          style={{ color: 'teal', fontWeight: 'bold', textDecoration: 'underline', marginBottom: '40px' }}
        >
          CLICK HERE
        </a>

        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a href="#" style={{ color: 'teal', fontWeight: 'bold', textDecoration: 'none' }}>Sunglasses</a>
          <a href="#" style={{ color: 'teal', fontWeight: 'bold', textDecoration: 'none' }}>Eyeglasses</a>
          <a href="#" style={{ color: 'teal', fontWeight: 'bold', textDecoration: 'none' }}>Contact Lenses</a>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#001f3f', color: '#fff', padding: '15px 0', fontSize: '18px' }}>
        <p>Can we <strong>Help?</strong></p>
      </footer>
    </div>
  );
};

export default StorePage;
