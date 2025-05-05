import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSearch, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import Card from './Card';
const SwapsAdultPage = () => {
    const navigate=useNavigate()
    const styles = {
        header: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 16px',
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }
    }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', height: '100vh', overflowY: 'auto' }}>
      {/* Header */}
            <div style={styles.header}>
             
                <button onClick={() => navigate('/', { replace: true })}>
                 <FaArrowLeft size={20} />
              </button>
      
              <h1 style={{ fontSize: '18px', fontWeight: '600', color: '#1E3A8A' }}>Swaps Adult</h1>
              <div style={{ display: 'flex', gap: '12px' }}>
                <FaSearch size={20} />
                <FaHeart size={20} />
                <FaShoppingCart size={20} />
                <FaBars size={20} />
              </div>
            </div>
      

            {/* Banner */}
           <div style={{ background: 'linear-gradient(to right, #0033cc, #6699ff)', color: '#fff', padding: '30px', textAlign: 'center' }}>
        <img
          src="https://static5.lenskart.com/media/uploads/plp-inline-banners-new.png"
          alt="Frame"
          style={{ width: '200px', marginBottom: '10px' }}
        />
        <h1 style={{ fontSize: '24px', margin: '10px 0' }}>lenskart SWAPS</h1>
        <p style={{ margin: '5px 0' }}>One frame. Unlimited Styles.</p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ padding: '10px 20px', borderBottom: '2px solid black', cursor: 'pointer' }}>Adult</div>
        <div style={{ padding: '10px 20px', color: 'gray', cursor: 'pointer' }}>Kids</div>
      </div>

      {/* Fit Finder */}
      <div style={{ backgroundColor: '#f3f3f3', margin: '20px', padding: '20px', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: '0 0 10px' }}>Not sure about your size?</h3>
          <p style={{ margin: '0 0 10px', fontSize: '14px' }}>Size changes with face</p>
          <button style={{ padding: '10px 20px', backgroundColor: '#001F54', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Find my fit
          </button>
        </div>
        <img
          src="https://via.placeholder.com/80"
          alt="Face Scan"
          style={{ borderRadius: '50%', marginLeft: '20px' }}
        />
      </div>
      <Card/>
    <Card/>
    <span style={{marginTop:"20px",border:"1px solid black"}}>
        <img src="https://static5.lenskart.com/media/uploads/plp-inline-banners-new.png" alt="" />
    </span>
    {/* Footer */}
    <footer style={{ backgroundColor: '#001f3f', color: '#fff', padding: '15px 0', fontSize: '18px' }}>
        <p style={{paddingLeft:'20px'}}>Can we <strong>Help?</strong></p>
      </footer>
      
    </div>
  );
};

export default SwapsAdultPage;
