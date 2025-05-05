import { Link } from 'react-router-dom';

export default function Card() {
  const cardStyle = {
    padding: '16px',
    maxWidth: '320px auto',
    marginTop: '20px',
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
  );
}
