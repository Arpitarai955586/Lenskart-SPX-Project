import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSearch, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";

export default function EyeglassesPage() {
    const navigate = useNavigate();
  const [tab, setTab] = useState('eyeglasses');

  const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 16px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    banner: {
      position: 'relative',
      width: '100%',
      height: '240px',
      overflow: 'hidden',
    },
    bannerImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    bannerText: {
      position: 'absolute',
      bottom: '16px',
      left: '16px',
      color: 'white',
    },
    tabs: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '16px',
    },
    tabButton: (isActive) => ({
      padding: '8px 24px',
      borderBottom: isActive ? '2px solid #1D4ED8' : 'none',
      color: isActive ? '#1D4ED8' : 'gray',
      background: 'none',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer',
    }),
    sizeSection: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#EEF2FF',
      padding: '16px',
      marginTop: '24px',
      borderRadius: '16px',
      margin: '0 16px',
    },
    sizeImage: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    sizeTextContainer: {
      marginLeft: '16px',
    },
    fitButton: {
      marginTop: '8px',
      padding: '8px 16px',
      backgroundColor: '#1D4ED8',
      color: 'white',
      borderRadius: '9999px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
    }
    
  };
  const cardStyle = {
    padding: '16px',
    maxWidth: '320px',
    margin: '30px auto',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    backgroundColor: '#ffffff',
    transition: 'box-shadow 0.3s ease',
    
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '12px',
    transition: 'transform 0.3s ease',
  };

  const badgeStyle = {
    backgroundColor: 'orange',
    color: 'white',
    display: 'inline-block',
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: 'bold',
   
  
  };

  const sizeStyle = {
    border: '1px solid grey',
    padding: '2px 8px',
    borderRadius: '5px',
    fontSize: '12px',
    display: 'inline-block',
    marginTop: '6px',
  };

  const priceStyle = {
    fontWeight: 'bold',
    margin: '12px 0',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: 'white',
    border: '2px solid #007bff',
    color: '#007bff',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '10px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#007bff',
    color: 'white',
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Header */}
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

      {/* Banner */}
      <div style={styles.banner}>
        <img
          src="https://i.imgur.com/KDIDiSE.png" 
          alt="Harry Potter Styles"
          style={styles.bannerImage}
        />
        <div style={styles.bannerText}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg" alt="Harry Potter Logo" style={{ height: '32px', marginBottom: '8px' }} />
          <p style={{ fontSize: '14px', fontWeight: '300' }}>Styles Inspired By Favourite Characters</p>
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        <button
          onClick={() => setTab('eyeglasses')}
          style={styles.tabButton(tab === 'eyeglasses')}
        >
          Eyeglasses
        </button>
        <button
          onClick={() => setTab('sunglasses')}
          style={styles.tabButton(tab === 'sunglasses')}
        >
          Sunglasses
        </button>
      </div>

      {/* Size Fit Section */}
      <div style={styles.sizeSection}>
        <img
          src="https://i.imgur.com/6X8VgLj.png" // Replace with your face fit image
          alt="Face Fit"
          style={styles.sizeImage}
        />
        <div style={styles.sizeTextContainer}>
          <h2 style={{ fontSize: '16px', fontWeight: '600' }}>Not sure about your size?</h2>
          <p style={{ fontSize: '14px', color: 'gray' }}>Size changes with face</p>
          <button style={styles.fitButton}>
            Find my fit
          </button>
        </div>
      </div>
      
   <div
      style={cardStyle}
      onMouseOver={e => {
        e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.15)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Link to="/HarryPotter">
          <img
            src="https://static1.lenskart.com/media/desktop/img/7-feb-25/Sunglasses-Home-Main-v3.png"
            alt="Lenskart X Harry Potter"
            style={imageStyle}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </Link>
      </div>

      <div style={{ marginTop: '12px' }}>
        <div style={badgeStyle}>New Launch</div>
        <h3 style={{ margin: '12px 0 6px', fontSize: '18px' }}>
          Lenskart X Harry Potter
        </h3>
        <p style={{ margin: '6px 0', fontSize: '14px' }}>
          <span style={sizeStyle}>M</span> Size
        </p>
        <p style={priceStyle}>₹4000</p>
        <button
          style={buttonStyle}
          onMouseOver={e => {
            Object.assign(e.currentTarget.style, buttonHoverStyle);
          }}
          onMouseOut={e => {
            Object.assign(e.currentTarget.style, buttonStyle);
          }}
        >
          View Details
        </button>
      </div>
    </div>
    <div
      style={cardStyle}
      onMouseOver={e => {
        e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.15)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Link to="/HarryPotter">
          <img
            src="https://static1.lenskart.com/media/desktop/img/7-feb-25/Sunglasses-Home-Main-v3.png"
            alt="Lenskart X Harry Potter"
            style={imageStyle}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </Link>
      </div>

      <div style={{ marginTop: '12px' }}>
        <div style={badgeStyle}>New Launch</div>
        <h3 style={{ margin: '12px 0 6px', fontSize: '18px' }}>
          Lenskart X Harry Potter
        </h3>
        <p style={{ margin: '6px 0', fontSize: '14px' }}>
          <span style={sizeStyle}>M</span> Size
        </p>
        <p style={priceStyle}>₹4000</p>
        <button
          style={buttonStyle}
          onMouseOver={e => {
            Object.assign(e.currentTarget.style, buttonHoverStyle);
          }}
          onMouseOut={e => {
            Object.assign(e.currentTarget.style, buttonStyle);
          }}
        >
          View Details
        </button>
      </div>
    </div>

    </div>
    
  );
}
