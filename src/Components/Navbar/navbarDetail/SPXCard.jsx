import { textDecoration } from '@chakra-ui/react';
import React,{useState} from 'react';

function SPXCard() {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isOptometrist, setIsOptometrist] = useState(false);
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#000', color: '#fff', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>
        Be cautious while dealing with anyone claiming to offer Lenskart franchisee and to verify details click here.
      </div>

      {/* Nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between',gap:"50px", alignItems: 'center', padding: '16px 32px', borderBottom: '1px solid #eee' }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Lenskart_logo.svg/2560px-Lenskart_logo.svg.png" alt="Lenskart Logo" style={{ height: '40px' }} /> 
       
        <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '20px',
        marginBottom: '16px',
      }}
    >
      <a
        href="#"
        onMouseEnter={() => setHoveredLink('partner')}
        onMouseLeave={() => setHoveredLink(null)}
        style={{
          textDecoration: hoveredLink === 'partner' ? 'underline' : 'none',
          color: '#000',
          fontWeight: '500',
        }}
      >
        Partner
      </a>

      <a
        href="Landload"
        onMouseEnter={() => setHoveredLink('landlord')}
        onMouseLeave={() => setHoveredLink(null)}
        style={{
          textDecoration: hoveredLink === 'landlord' ? 'underline' : 'none',
          color: '#000',
          fontWeight: '500',
        }}
      >
        Landlord
      </a>
    </div>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        
                            
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span>📧 beafranchise@lenskart.in</span>
            <span>📞 8447897857</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ display: 'flex', padding: '40px', justifyContent:"space-between" }}>
        {/* Left side */}
               <div style={{
            //    border:"1px solid black",
             width:"100%",  
            display: 'flex',
           justifyContent: 'center',
           marginTop:"-30px",
            alignItems: 'center',
            height: '100vh', // Full viewport height
             backgroundColor: '#f5f5f5' // Optional: light background
    }}>
           <div style={{
         padding: '24px',
            border: '1px solid #ccc',
             borderRadius: '12px',
               boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            width: '560px',
           backgroundColor: '#fff',
          display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           textAlign: 'center'
      }}>
           <h4 style={{ letterSpacing: '1px', fontWeight: '500', marginBottom: '8px' }}>
          OWN A SUCCESSFUL BUSINESS
             </h4>
                <h1 style={{ color: 'teal', fontSize: '24px', margin: '10px 0' }}>
          Join As A Lenskart Partner Today
            </h1>
            <p style={{ lineHeight: '1.8', fontSize: '14px', color: '#333' }}>
          Lenskart is one of the fastest growing retail businesses with 500+ profitable stores across 120+ cities and 50 Lac happy customers across India.
          Be a proud owner of a branded Lenskart store.
           </p>

              <h3 style={{ marginTop: '28px', fontSize: '16px' }}>
          Returns that we deliver for our partners
            </h3>
            <div style={{
            display: 'flex',
            gap: '24px',
            marginTop: '16px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '36px' }}>🤲</div>
            <p><strong>25–30%</strong><br />Margin</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '36px' }}>📈</div>
            <p><strong>Quick</strong><br />Breakeven</p>
          </div>
          </div>
        
            </div>
      
          </div>

        {/* Right side */}
        <div style={{ flex: '1 1 40%', backgroundColor: '#ccfbf1', padding: '32px', borderRadius: '10px', maxWidth: '400px',  marginTop:"-30px"}}>
          <h2 style={{ marginBottom: '20px' }}>Ready to start your growth journey?</h2>

          <p>Are you an optometrist?</p>
          <label>
        <input
          type="radio"
          name="optometrist"
          value="yes"
          onChange={() => setIsOptometrist(true)}
        />{' '}
        Yes
      </label>
      <label style={{ marginLeft: '10px' }}>
        <input
          type="radio"
          name="optometrist"
          value="no"
          defaultChecked
          onChange={() => setIsOptometrist(false)}
        />{' '}
        No
      </label>

          <div style={{ marginTop: '20px' }}>
            <input type="text" placeholder="Name" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
            <input type="tel" placeholder="Phone Number" style={inputStyle} />
            <input type="text" placeholder="City" style={inputStyle} />
          </div>
          
          {!isOptometrist && (<>
          <p style={{ marginTop: '20px' }}>What property type will you open the store at?</p>
          <label>
            <input type="radio" name="property" /> Owned
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input type="radio" name="property" defaultChecked /> Rented/Leased
          </label>
          </>
          )}

          <button style={{
            marginTop: '20px',
            backgroundColor: '#0d9488',
            color: '#fff',
            border: 'none',
            borderRadius: '30px',
            padding: '10px 24px',
            cursor: 'pointer'
          }}>
            SUBMIT REQUEST
          </button>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '20px',
  border: '1px solid #ccc',
  fontSize: '16px'
};


export default SPXCard;
