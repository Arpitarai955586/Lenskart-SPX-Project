import React from 'react';
import Footer from '../../Footer/Footer'
const queries = [
  "I want to provide/change 'my power' for this order",
  "I want to Cancel/Return my order",
  "Where is my order?",
  "I want to modify items in this order",
  "I have exchange and refund related queries",
  "I have Lkcash related queries for this order",
  "I have other issues"
];

const ContactCard = () => {
   
  return (
    // <div style={{width:"100%"}}>
    <>
    <div
    style={{
        maxWidth: '800px',
        margin: '40px auto',
        fontFamily: 'Arial, sans-serif',
        padding: '0 16px'
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '32px',
          marginBottom: '24px'
        }}
      >
        Queries
      </h1>

      {queries.map((query, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #ccc',
            padding: '12px 0',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          <span>{query}</span>
          <span style={{ fontSize: '20px' }}>{'>'}</span>
        </div>
      ))}
    
    </div>
    <Footer/>
   </>
    // </div>
  );
};

export default ContactCard;
