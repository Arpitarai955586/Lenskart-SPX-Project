

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft, FaSearch, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";

export default function CardStore() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("eyeglasses");

  const styles = {
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 16px",
      backgroundColor: "white",
      boxShadow: "0 2px 4px rgba(196, 54, 54, 0.1)",
      width: "100%",
    },
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        // border: "2px solid red",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
       <button
      style={{
        backgroundColor: "#00004d", 
        color: "white",
        padding: "12px 24px",
        border: "none",
        borderRadius: "12px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        width: "100%", 
        position:"fixed" ,
        bottom:"0",
        marginTop:"50px"
      }}
    >
      Add To Cart
   </button> 
      {/* Main content container */}
      <div
        style={{
          fontFamily: "sans-serif",
          backgroundColor: "white",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        {/* Header */}
        <div style={styles.header}>
          <button onClick={() => navigate("/", { replace: true })}>
            <FaArrowLeft size={20} />
          </button>

          <h1 style={{ fontSize: "18px", fontWeight: "600", color: "#1E3A8A" }}>
            Harry Potter
          </h1>

          <div style={{ display: "flex", gap: "12px" }}>
            <FaSearch size={20} />
            <FaHeart size={20} />
            <FaShoppingCart size={20} />
            <FaBars size={20} />
          </div>
        </div>

        {/* Banner Image */}
        <div>
          <img
            src="https://static5.lenskart.com/media/uploads/Lens-replacement-LP-new-topbanner_2-SG-040425.png"
            alt="banner"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Section Title */}
        <h1
          style={{
            marginLeft: "20px",
            fontSize: "20px",
            color: "black",
            marginTop: "20px",
            padding: "10px",
          }}
        >
          Add by the add
        </h1>

        {/* Scrollable Product List */}
        <div
          style={{
            overflowX: "auto",
            display: "flex",
            gap: "20px",
            padding: "10px",
            scrollBehavior: "smooth",
            marginBottom:"50px"
          }}
        >
          {[
            "https://static5.lenskart.com/media/uploads/Toddlers.gif",
            "https://static5.lenskart.com/media/uploads/Juniors.gif",
            "https://static5.lenskart.com/media/uploads/Toddlers.gif",
            "https://static5.lenskart.com/media/uploads/Juniors.gif",
          ].map((src, index) => (
            <li
              key={index}
              style={{
                width: "250px",
                height: "250px",
                listStyleType: "none",
                flex: "0 0 auto",
              }}
            >
              {index === 0 ? (
                <Link to="/card">
                  <img
                    src={src}
                    alt={`product-${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              ) : (
                <img
                  src={src}
                  alt={`product-${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
