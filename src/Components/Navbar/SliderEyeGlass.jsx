import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Card from "./Card";
const styles = {
  container: {
    fontFamily: "sans-serif",
    padding: "20px",
    background: "#f9f9f9",
  },
  slider: {
    display: "flex",
    overflowX: "auto",
    gap: "12px",
    paddingBottom: "10px",
  },
  categoryButton: {
    padding: "10px 20px",
    border: "1px solid #ccc",
    borderRadius: "9999px",
    whiteSpace: "nowrap",
    fontSize: "16px",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  banner: {
    background: "linear-gradient(to right, #e0eaff, #ffffff)",
    borderRadius: "20px",
    padding: "30px 20px",
    textAlign: "center",
    marginTop: "20px",
  },
  usageSection: {
    marginTop: "30px",
  },
  usageGrid: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    flex: "1",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
};

export default function SliderEyeGlass() {
  return (
    <div style={styles.container}>
      {/* Slider */}
      <div style={styles.slider}>{[
        { label: "👓 Eyeglass", path: "/explore" },
    { label: "🕶️ Sunglass", path: "/explore" },
    { label: "🧐 Power Sunglass", path: "/explore" },
    { label: "🛡️ Blue Cut", path: "/explore" },
    { label: "🖥️ Computer Glass", path: "/explore" }].map((item, index) => (
        <Link to={item.path} key={index} style={{ textDecoration: 'none' }}>
          <button style={styles.categoryButton}>
            {item.label}
          </button>
        </Link>
        ))}
      </div>

      {/* Banner */}
      <div style={styles.banner}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#1f1f4e" }}>Protect your eyes with screen glasses</h2>
        <p style={{ marginTop: "10px", color: "#333" }}>Reduced Eye Strain &nbsp; | &nbsp; Better Sleep</p>
      </div>

      {/* Shop by Usage */}
      <div style={styles.usageSection}>
        <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#1f1f4e" }}>Shop by usage</h3>
        <p style={{ color: "#444" }}>Zero power glasses for every need</p>

        <div style={styles.usageGrid}>
          <div style={styles.card}>
            <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif" alt="Working" style={{ borderRadius: "8px", width: "100%" }} />
           
             <h4 style={{ justifyItems:'end' , marginTop:"-15px" }}> 
             <FaArrowRightLong  color="black" borderRadius= "50%" backgroundColor="white" index="1"/>
            </h4>
            
          </div>
          <div style={styles.card}>
          <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif" alt="Working" style={{ borderRadius: "8px", width: "100%" }} />
           
           <h4 style={{ justifyItems:'end' , marginTop:"-15px" }}> 
           <FaArrowRightLong  color="black" borderRadius= "50%" backgroundColor="white" index="1"/>
          </h4>
          </div>
          
        </div>
        <div style={styles.usageGrid}>
          <div style={styles.card}>
          <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif" alt="Working" style={{ borderRadius: "8px", width: "100%" }} />
           
           <h4 style={{ justifyItems:'end' , marginTop:"-15px" ,marginLeft:"-20px"}}> 
           <FaArrowRightLong  color="black" borderRadius= "50%" backgroundColor="white" index="1"/>
          </h4>
          </div>
          <div style={styles.card}>
          <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif" alt="Working" style={{ borderRadius: "8px", width: "100%" }} />
           
           <h4 style={{ justifyItems:'end' , marginTop:"-15px" }}> 
           <FaArrowRightLong  color="black" borderRadius= "50%" backgroundColor="white" index="1"/>
          </h4>
          </div>
          
        </div>
        <Card style={{padding:"10%"}}/>
      </div>
    </div>
  );
}
