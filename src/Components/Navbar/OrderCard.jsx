import React ,{useState} from "react";
import { FaArrowLeft, FaSearch, FaHeart, FaShoppingBag, FaBars } from "react-icons/fa";
import BottomNavigation from "./BottomNavigation";
import HumanPng from "../../photo/W.jpeg"
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar Card";

const OrderCard = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const navigate=useNavigate();
  return (
    <div>
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        {/* <FaArrowLeft style={styles.iconLeft} /> */}
        <button onClick={() => navigate(-1)}>
                 <FaArrowLeft style={styles.iconLeft} />
               </button>
    
        <span style={styles.title}>My Orders</span>
        <div style={styles.iconGroup}>
          <FaSearch style={styles.icon} />
          <FaHeart style={styles.icon} />
          <FaShoppingBag style={styles.icon} />
          {/* <FaBars style={styles.icon} /> */}
          <FaBars style={styles.icon} onClick={() => setShowSidebar(true)} />
        </div>
      </div>

      {/* Image */}
      <div style={styles.imageContainer}>
        <img
          src={HumanPng} // Place your image inside /public folder
          alt="Rocket Illustration"
          style={styles.image}
        />
      </div>

      {/* Text Content */}

      <div style={styles.textContent}>
        <p style={styles.boldText}>Download Lenskart app</p>
        <p style={styles.normalText}>
          to track your orders and stay up to date <br />
          on the delivery status
        </p>
      </div>

      {/* Button */}
      <button style={styles.button}>Get the app!</button>
    
    </div>
      <BottomNavigation/>
      {/* {showSidebar && <Sidebar onClose={() => setShowSidebar(false)} />} */}
      {showSidebar && <Sidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)} />}
      </div>
  );
};

const styles = {
  container: {
    fontFamily: "sans-serif",
    textAlign: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 30,
  },
  iconLeft: {
    fontSize: 24,
    cursor: "pointer",
  },
  title: {
    flex: 1,
    textAlign: "left",
    marginLeft: 10,
  },
  iconGroup: {
    display: "flex",
    gap: 15,
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
    cursor: "pointer",
  },
  imageContainer: {
    margin: "30px 0",
  },
  image: {
    width:"100%",
    height: "300px",
    // border:"1px solid black"
  },
  textContent: {
    marginBottom: 40,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#2c2c54",
  },
  normalText: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#2c2c54",
    color: "white",
    border: "none",
    padding: "15px 30px",
    borderRadius: 20,
    fontSize: 16,
    fontWeight: "bold",
    cursor: "pointer",
    width:"100%"
    
  },
};

export default OrderCard;
