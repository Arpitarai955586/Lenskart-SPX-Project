
 
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa'; // Explore
import { FaShapes } from "react-icons/fa6";
import { Gi3DGlasses } from 'react-icons/gi'; // AR
import { MdLocalHospital } from 'react-icons/md'; // Eyecare
import { FaRegClipboard } from 'react-icons/fa'; // Orders

const BottomNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // const navItems = [
  //   { path: '/', label: 'Home', icon: '🏠' },
  //   { path: '/explore', label: 'Explore', icon: '🔺' },
  //   {path:"/AR" ,label:'AR',icon:"👓"},
  //   { path: '/eyecare', label: 'Eyecare', icon: '🌿' },
  //   { path: '/orders', label: 'Orders', icon: '📝' },
  // ];
  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/explore', label: 'Explore', icon: <FaShapes /> },
    { path: '/AR', label: 'AR', icon: <Gi3DGlasses /> },
    { path: '/eyecare', label: 'Eyecare', icon: <MdLocalHospital /> },
    { path: '/orders', label: 'Orders', icon: <FaRegClipboard /> },
  ];
  const isActive = (path) => currentPath === path;

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      padding: '10px 0',
      position: 'fixed',
      bottom: '0',
      width: '100%',
      zIndex: 10
    }}>
      {navItems.map((item) => (
        <Link to={item.path} key={item.path}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // color: isActive(item.path) ? 'rgb(110, 16, 16)' : '#ccc',
            color: isActive(item.path) ? 'rgb(110, 16, 16)' : '#ccc',
           fontWeight: isActive(item.path) ? 'bold' : 'normal',
            textDecoration: 'none',
            backgroundColor: item.label === 'AR' ? 'green' : 'transparent',
            color: item.label === 'AR' ? '#fff' : '#000',
            textAlign: 'center',
            borderRadius:"50%",
            alignItems: 'center',
            minWidth: '48px',
          }}>
            <span style={{ fontSize: '24px' }}>{item.icon}</span>
            <span style={{ fontWeight: isActive(item.path) ? 'bold' : 'normal', fontSize: '14px' }}>
              {item.label}
            </span>
          </div>
        </Link>
      ))}

      
    </div>
  );
};

export default BottomNavigation;
