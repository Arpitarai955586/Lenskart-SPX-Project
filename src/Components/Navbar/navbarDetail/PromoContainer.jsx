import React from 'react';

export default function PromoBanner() {
  // Inline style objects
  const container = { fontFamily: 'Arial, sans-serif', color: '#333' };
  const topBar = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', padding: '8px 16px', borderBottom: '1px solid #e0e0e0' };
  const breadcrumbs = { display: 'flex', gap: '4px', alignItems: 'center' };
  const crumb = { color: '#666' };
  const separator = { margin: '0 4px', color: '#999' };
  const support = { fontStyle: 'italic' };

  const hero = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', backgroundColor: '#f5f3ef' };
  const imageStyle = { width: '30%', objectFit: 'cover', borderRadius: '4px' };
  const centerText = { width: '40%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' };
  const title = { fontFamily: 'cursive', fontSize: '2rem', margin: '0' };
  const subtitle = { fontSize: '1rem', letterSpacing: '1px', marginTop: '8px' };

  return (
    <div style={container}>
      {/* Top navigation bar */}
      <div style={topBar}>
        <div style={breadcrumbs}>
          <span style={crumb}>Eyewear</span>
          <span style={separator}>/</span>
          <span style={crumb}>Eyewear</span>
          <span style={separator}>/</span>
          <span style={crumb}>promotion</span>
          <span style={separator}>/</span>
          <span style={{ color: '#000', fontWeight: 'bold' }}>Tilak Varma Eyewear</span>
        </div>
        <div style={support}>
          Problem in placing order? Give a missed call <strong>9999899998</strong>
        </div>
      </div>

      {/* Hero banner */}
     <div style={{paddingRight:"40px",paddingLeft:"20px", margin:"10px"}}>
        <img src="https://static1.lenskart.com/media/desktop/img/Lenskart/Tilak-Verma/Home/plp-tilak-verma.jpg" alt="" />
     </div>
    </div>
  );
}
