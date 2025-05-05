import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSearch, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
const LensCard = () => {
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
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff' }}>
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

      {/* Top Section */}
      <div style={{ background: 'linear-gradient(to right, #001f3f, #0074D9)', color: '#fff', padding: '20px' }}>
        <h2 style={{ marginBottom: '5px' }}>TRY IT<br /><span style={{ fontWeight: 'bold' }}>TO BELIEVE IT!</span></h2>
        <p style={{ fontSize: '14px', margin: '10px 0' }}>GET FREE LENS REPLACEMENT AT ANY LENSKART STORE</p>
        <button style={{
          backgroundColor: '#fff',
          color: '#0074D9',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 20px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Find Nearby Stores
        </button>
      </div>

      {/* Offer Section */}
      <div style={{ padding: '20px', backgroundColor: '#fff' }}>
        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>
          Get your lenses replaced for FREE
        </p>
        <p style={{ fontSize: '14px', color: '#555' }}>
          Just pay a ₹199 fitting charge online or at store
        </p>
        <hr style={{ margin: '20px 0' }} />

        {/* How it Works */}
        <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>How it works</h3>

        {/* Step 1 */}
        <div style={{
          display: 'flex',
          gap: '15px',
          alignItems: 'center',
          backgroundColor: '#f2f7ff',
          padding: '15px',
          borderRadius: '10px',
          marginBottom: '20px'
        }}>
          <div style={{
            backgroundColor: '#0074D9',
            color: '#fff',
            padding: '8px 12px',
            borderRadius: '20px',
            fontWeight: 'bold',
            fontSize: '14px'
          }}>
            STEP 1
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Place order & get a coupon</p>
            <p style={{ margin: 0, fontSize: '14px' }}>
              Post order get a coupon via sms & whatsapp to avail free lens replacement
            </p>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div style={{ textAlign: 'center' }}>
          <button style={{
            backgroundColor: '#00004d',
            color: '#fff',
            padding: '15px 30px',
            fontSize: '16px',
            borderRadius: '10px',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Add To Cart
          </button>
        </div>
      </div>
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Product Details Section */}
      <div style={{ borderBottom: "1px solid #ccc", marginBottom: "20px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Product Details</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: "10px" }}>
          <div>About the Product</div>
          <div style={{ fontWeight: "bold" }}>Lens Replacement at Store</div>
          <div>Product ID</div>
          <div style={{ fontWeight: "bold" }}>236191</div>
          <div>Model No.</div>
          <div style={{ fontWeight: "bold" }}>Lens Replacement at Store</div>
          <div>Gender</div>
          <div style={{ fontWeight: "bold" }}>Unisex</div>
          <div>Condition</div>
          <div style={{ fontWeight: "bold" }}>New</div>
        </div>
        <button
          style={{
            marginTop: "15px",
            padding: "8px 12px",
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          +1 more Details
        </button>
      </div>

      {/* Help Section */}
      <div style={{ backgroundColor: "#0b0b45", color: "white", padding: "20px", borderRadius: "8px" }}>
        <h3>Can we Help?</h3>
        <button
          style={{
            margin: "10px 0",
            padding: "8px 12px",
            backgroundColor: "#00b0ff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Chat With Us
        </button>

        <div style={{ marginTop: "15px" }}>
          <select style={{ padding: "8px", width: "100%", borderRadius: "6px" }}>
            <option>More about store.com</option>
          </select>
        </div>

        {/* Social Icons */}
        <div style={{ marginTop: "20px", display: "flex", gap: "15px", fontSize: "20px" }}>
          <span>📘</span> 
          <span>📸</span> 
          <span>🐦</span> 
          <span>📞</span> 
        </div>

        {/* Footer */}
        <div style={{ marginTop: "20px", fontSize: "12px" }}>
          © All Rights Reserved | www.arubsjndnjn.com <br />
          Version 1.0.0
        </div>
      </div>
    </div>
    </div>

  );
};

export default LensCard;
