import React, { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import { Box } from "@mui/material";

const images = [
  {
    label: "The Collection",
    img: "https://static1.lenskart.com/media/desktop/img/30-jan-25/ple/Trending-Phonic-Thumbnail.png",
  },
  {
    label: "Design",
    img: "https://static1.lenskart.com/media/desktop/img/30-jan-25/ple/Trending-Phonic-Thumbnail.png",
  },
  {
    label: "Details",
    img: "https://static1.lenskart.com/media/desktop/img/30-jan-25/ple/Trending-Phonic-Thumbnail.png",
  },
  {
    label: "Eyeglasses",
    img: "https://static1.lenskart.com/media/desktop/img/30-jan-25/ple/Trending-Phonic-Thumbnail.png",
  },
  {
    label: "Sunglasses",
    img: "https://static1.lenskart.com/media/desktop/img/30-jan-25/ple/Trending-Phonic-Thumbnail.png",
  },
];

const CustomCard = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleTabClick = useCallback((index) => {
    if (carouselRef.current) {
      carouselRef.current.goTo(index, false); 
      setCurrentSlide(index);
    }
  }, []);

  return (
    <Box style={{  width: "100%", height: "500px", padding: "20px" }}>
      <div style={{ width: "100%", marginTop: "0px", padding: "10px", borderRadius: "10px", backgroundColor: "#fff",boxShadow: "0 4px 8px rgba(0,0,0,0.9)", }}>
        {/* Scrollable Buttons */}
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            padding: "10px",
            gap: "10px",
            
          }}
        >
          {images.map((item, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              style={{
                padding: "8px 16px",
                minWidth: "max-content",
                borderRadius: "20px",
                border: "1px solid #ccc",
                backgroundColor: currentSlide === index ? "#003366" : "#f0f0f0",
                color: currentSlide === index ? "#fff" : "#333",
                fontWeight: "bold",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", }}>
          <Carousel
            ref={carouselRef}
            afterChange={(current) => setCurrentSlide(current)}
            autoplay
            style={{ width: "300px" }}
          >
            {images.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Link to="./toddlers" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      width: "100%",
                      backgroundColor: "#fff",
                      borderRadius: "16px",
                    //   boxShadow: "0 4px 8px rgba(0,0,0,0.9)",
                      overflow: "hidden",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                    <div style={{ padding: "10px", textAlign: "center" }}>
                      <p style={{ fontSize: "16px", fontWeight: "bold", color: "#333", margin: 0 }}>
                        {item.label}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Box>
  );
};

export default CustomCard;
