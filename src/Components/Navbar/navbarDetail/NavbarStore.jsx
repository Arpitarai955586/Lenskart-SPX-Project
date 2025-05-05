import { border } from "@chakra-ui/react";
import React from "react";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaYoutube, FaGlobe, FaSearch, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const StoreLocator = () => {
  
    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '20px',
       
      };
    
      const imageStyle = {
        width: '100%',
        borderRadius: '12px',
        border:"2px solid black",
        marginLeft:"50px",
         
      };
      
      const imageHeight={
       
         width: '50%',
         overflowY: 'scroll',
         maxHeight: '500px',
        //  border: '1px solid black',
         padding: '10px',
       

      };
      const mapStyle = {
        width: '48%',
        height: '500px',
        border: '1px solid #ccc',
        borderRadius: '12px',
      };
  return (
    <div>
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "#fdfafa" }}>
      {/* Top Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
        {/* Logo */}
        <img
          src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
          alt="Lenskart Logo"
          style={{ height: "40px" }}
        />

        {/* Contact Info and Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: "16px", color: "#000" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <FaPhoneAlt /> <span>1800 202 4444</span>
          </div>
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
          <FaGlobe />
        </div>
      </div>

      {/* Main Search Section */}
      <div style={{ display:"flex", width:"100%",height:"100px",gap:"20px"}}>
      <div style={{  }}>
        <h2 style={{ color: "#000066", fontSize: "24px", marginBottom: "10px" }}>Find a store near you</h2>
        <p style={{ color: "#333", fontSize: "16px" }}>
          Get free eye test & eye checkup by trained optometrist and eye specialist
        </p>
        </div>
        {/* Search Input and Location Button */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" , width:"70%"}}>
          <div style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "10px 15px",
            flex: 1
          }}>
            <FaSearch /> 
            <input
              type="text"
              placeholder="Search by state/pincode/Locality"
              style={{ border: "none", outline: "none", width: "100%", fontSize: "14px" }}
            />
          </div>

          <button style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "10px 15px",
            backgroundColor: "#fff",
            cursor: "pointer",
            fontSize: "14px"
          }}>
            <FaMapMarkerAlt style={{ marginRight: "8px" }} /> Use my current location
          </button>

          <a href="#" style={{ marginLeft: "10px", color: "#000066", fontSize: "14px", display: "flex", alignItems: "center" }}>
            <FaWhatsapp style={{ marginRight: "5px" }} /> Need Help?
          </a>
        </div>
      </div>
      </div>

      
      <div style={containerStyle}>
      
      
      <div  className="hide-scrollbar" style={imageHeight}>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      {/* Left Side - Image */}
      <img
        src="https://static5.lenskart.com/media/uploads/On_Sale-Home-Main-with-price-v3.png"
        alt="Lenskart Promotion"
        style={imageStyle}
      />
      <br />
      <br />
      <img
        src="https://static5.lenskart.com/media/uploads/On_Sale-Home-Main-with-price-v3.png"
        alt="Lenskart Promotion"
        style={imageStyle}
      />
      <br />
      <br />
      <img
        src="https://static5.lenskart.com/media/uploads/On_Sale-Home-Main-with-price-v3.png"
        alt="Lenskart Promotion"
        style={imageStyle}
      />
      <br />
      <br />
      </div>
      {/* Right Side - Google Map Embed */}
      <iframe
        title="Lenskart Store Locator"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112093.24881351597!2d77.09277168211292!3d28.52442291792686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d7fb10bdf21%3A0x71b2f2dc0c21b19!2sLenskart%20Store!5e0!3m2!1sen!2sin!4v1683456681623!5m2!1sen!2sin"
        style={mapStyle}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  );
};

export default StoreLocator;
