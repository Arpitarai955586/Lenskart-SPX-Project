
 
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/explore', label: 'Explore', icon: '🔺' },
    {path:"/AR" ,label:'AR',icon:"👓"},
    { path: '/eyecare', label: 'Eyecare', icon: '🌿' },
    { path: '/orders', label: 'Orders', icon: '📝' },
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
            color: isActive(item.path) ? '#000066' : '#cccccc',
            backgroundColor: item.label === 'AR' ? 'green' : 'transparent',
            color: item.label === 'AR' ? '#fff' : '#000',
            textAlign: 'center',
            borderRadius:"50%",
            alignItems: 'center',
            minWidth: '52px',
          }}>
            <span style={{ fontSize: '24px' }}>{item.icon}</span>
            <span style={{ fontWeight: isActive(item.path) ? 'bold' : 'normal', fontSize: '12px' }}>
              {item.label}
            </span>
          </div>
        </Link>
      ))}

      
    </div>
  );
};

export default BottomNavigation;
