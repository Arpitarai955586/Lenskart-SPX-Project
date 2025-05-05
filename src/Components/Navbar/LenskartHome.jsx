import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSearch, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
const LenskartHome=()=> {
    const [openIndex, setOpenIndex] = useState(null);
    const navigate = useNavigate();
        const styles = {
          header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 16px',
            postion:"fixed",
            top:"0",
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          },
        
        }
  const faqs = [
    "What is Lenskart Home Eye Test?",
    "Why Should I Opt for the Lenskart Home Eye Test?",
    "What Cities Is this Service Available In?",
    "Where to Go for an Eye Check-Up?",
    "How Much Does the Lenskart Eye Check Up Cost?",
    "How to Test Eye Power at Home?",
    "How to Check Your Eyesight at Home?",
    "How to Check the Eye Number at Home?"
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "400px", margin: "20px auto", border: "1px solid #ddd", borderRadius: "8px", overflow: "hidden", boxShadow: "0px 2px 8px rgba(0,0,0,0.1)" }}>
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
         

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 15px", borderBottom: "1px solid #eee" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <img src="📞"  style={{ height: "20px" }} />
          <span style={{ fontWeight: "bold", fontSize: "14px", color: "#333" }}>at home</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#555" }}>
          <span>📞</span>
          <span>Help</span>
        </div>
      </div>

      {/* Video */}
      <div style={{ width: "100%", height: "230px", backgroundColor: "#000" }}>
        <video width="100%" height="100%" controls style={{ objectFit: "cover" }}>
          <source src="your-video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Product Info */}
      <div style={{ padding: "15px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontSize: "18px", margin: "0", color: "#222" }}>Lenskart at Home</h2>
          <div>
            <span style={{ textDecoration: "line-through", color: "grey", fontSize: "14px", marginRight: "5px" }}>₹120</span>
            <span style={{ color: "black", fontWeight: "bold", fontSize: "16px" }}>₹99</span>
          </div>

          
        </div>

        <p style={{ color: "#555", margin: "8px 0 12px" }}>Eye Test & Frame Trial Service</p>

        {/* Rating */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ color: "green", fontSize: "18px" }}>★★★★★</div>
          <div style={{ fontWeight: "bold", color: "#333", fontSize: "14px" }}>4.9</div>
          <div style={{ color: "#555", fontSize: "14px" }}>(17k)</div>
        </div>
      </div>
      <button 
  style={{
    backgroundColor: "red",
    width: "100%",
    height: "40px",
    padding: "10px",
    borderRadius: "10px",
    position: "fixed",
    bottom :"0",
    textAlign: "center",
    color: "white",
    border: "none",
    fontWeight: "bold"
  }}
>
  Appoint Now
</button>

      
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '400px' , backgroundColor:"skyblue"}}>
     <h2 style={{ color: '#1a1a1a' }}>Eye test eligibility</h2>
     <ul style={{ listStyle: 'none', padding: 0 }}>
       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
         <span style={{ color: 'green', fontSize: '20px', marginRight: '10px' }}>✔️</span>
         A well-lit room with 10 ft space is required
       </li>
       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
         <span style={{ color: 'green', fontSize: '20px', marginRight: '10px' }}>✔️</span>
         Required age for eye test is 14 - 75 years
       </li>
       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
         <span style={{ color: 'red', fontSize: '20px', marginRight: '10px' }}>❌</span>
         Not for Diabetics or those with High BP (Clinical eye test is required)
       </li>
     </ul>

     <h2 style={{ color: '#1a1a1a' }}>What to expect?</h2>
     <ul style={{ listStyle: 'none', padding: 0 }}>
       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
         <img
           src="https://img.icons8.com/ios/50/000000/visible--v1.png"
           alt="eye-checkup"
           style={{ width: '24px', height: '24px', marginRight: '10px' }}
         />
         12 Step Eye Checkup by certified professionals
       </li>
       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
         <img
           src="https://img.icons8.com/ios/50/000000/medical.png"
           alt="eye-test"
           style={{ width: '24px', height: '24px', marginRight: '10px' }}
         />
         Latest Eye Test Equipments
       </li>
       <li style={{ display: 'flex', alignItems: 'center' }}>
         <img
           src="https://img.icons8.com/ios/50/000000/glasses.png"
           alt="frames"
           style={{ width: '24px', height: '24px', marginRight: '10px' }}
         />
         Try 150+ frames at home
       </li>
     </ul>
   </div>
   <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>FAQs About Home Eye Tests</h2>
      {faqs.map((question, index) => (
        <div key={index} style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
          <div 
            onClick={() => toggleFAQ(index)} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              cursor: 'pointer', 
              fontSize: '16px', 
              fontWeight: '500' 
            }}
          >
            {question}
            <span style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
              ▼
            </span>
          </div>
          {openIndex === index && (
            <div style={{ marginTop: '10px', color: '#555', fontSize: '14px' }}>
              Answer for "{question}" goes here...
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
     
  );    

}

export default LenskartHome;
