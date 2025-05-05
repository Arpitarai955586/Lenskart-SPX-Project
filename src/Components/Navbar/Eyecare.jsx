import React ,{useState} from 'react';
import { Tabs } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa';
import AllCard from './AllCard';
import SliderEyeGlass from './SliderEyeGlass';
import FooterPhone from './FooterPhone';
import BottomNavigation from './BottomNavigation';
import Sidebar from './Sidebar Card';

const Eyecare = () => {
  const onChange = (key) => {
    console.log(key);
  };
  
   const [showSidebar, setShowSidebar] = useState(false);

  const navigate = useNavigate();

  const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 16px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
  };
  



const items = [
    {
      key: '1',
      label: <span style={{fontSize:"20px"}} >Men</span>,
      children: <div>
        <SliderEyeGlass/>   
      </div>,
    },
    {
      key: '2',
      label: <span style={{fontSize:"20px"}}>Women</span>,
      children: <div>
         <SliderEyeGlass/> 
         <BottomNavigation/>  
         </div>,
    },
    {
      key: '3',
      label: <span style={{fontSize:"20px"}}>Kids</span>,
      children: <div>
      <SliderEyeGlass/>   
    </div>,
    },
  ];

  return (
    <div>
      {/* Header */}
      <div style={styles.header}>
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft size={20} />
        </button>

        <h1 style={{ fontSize: '18px', fontWeight: '600', color: '#1E3A8A' }}>
          Eyecare
        </h1>
        <div style={{ display: 'flex', gap: '12px' }}>
          <FaSearch size={20} />
          <FaHeart size={20} />
          <FaShoppingCart size={20} />
          {/* <FaBars size={20} /> */}
          <FaBars style={styles.icon} onClick={() => setShowSidebar(true)} />
        </div>
      </div>

      
       <div >
        <Tabs
          defaultActiveKey="1"
          items={items}
         onChange={onChange}
         tabBarStyle={{  marginLeft:"20%" }}
         />
  </div>
  {showSidebar && <Sidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)} />}
  <FooterPhone style={{marginBottom:"10px"}}/>
  <BottomNavigation/>
    </div>
  );
};

export default Eyecare;
