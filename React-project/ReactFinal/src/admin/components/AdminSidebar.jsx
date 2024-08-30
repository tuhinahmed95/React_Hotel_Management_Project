import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const App = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const sidebarStyle = {
    marginTop:'90px',
    height: '100%',
    width: '210px',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    left: '0',
    backgroundColor: '#37474F',
    padding: '10px 0',
  };

  const dropdownStyle = {
    backgroundColor: '#262626',
    padding: '10px',
    display: 'none',
  };

  const dropdownActiveStyle = {
    ...dropdownStyle,
    display: 'block',
  };

  const linkStyle = {
    padding: '10px 15px',
    textDecoration: 'none',
    fontSize: '20px',
    color: 'white',
    display: 'block',
    cursor: 'pointer',
  };

  return (
    <div>
      <div style={sidebarStyle}>
        <div> <NavLink to='/admin-dashboard'><h2 style={{color:'#ffffff',marginLeft:'15px'}}>Dashboard</h2></NavLink></div>
        <div>
          <div style={linkStyle} onClick={() => toggleDropdown(1)}>room management</div>
          <div style={activeDropdown === 1 ? dropdownActiveStyle : dropdownStyle}>
            <a href="#" style={linkStyle}>Link 1</a>
            <a href="#" style={linkStyle}>Link 2</a>
          </div>
        </div>
        <div>
          <div style={linkStyle} onClick={() => toggleDropdown(2)}>guest management</div>
          <div style={activeDropdown === 2 ? dropdownActiveStyle : dropdownStyle}>
            <NavLink style={linkStyle} to="/Book">Total booking</NavLink>
            <NavLink style={linkStyle} to="">Add to guest</NavLink>
          </div>
        </div>
        <div>
          <div style={linkStyle} onClick={() => toggleDropdown(3)}>staff management</div>
          <div style={activeDropdown === 3 ? dropdownActiveStyle : dropdownStyle}>
            <NavLink to="/Staff" style={linkStyle}>staff list</NavLink>
            <NavLink to="/Staffform" style={linkStyle}>add new staff</NavLink>
          </div>
        </div>
        <div>
          <div style={linkStyle} onClick={() => toggleDropdown(4)}>inventory</div>
          <div style={activeDropdown === 4 ? dropdownActiveStyle : dropdownStyle}>
            <a href="#" style={linkStyle}>Link 1</a>
            <a href="#" style={linkStyle}>Link 2</a>
          </div>
        </div>
        <div>
          <div style={linkStyle} onClick={() => toggleDropdown(5)}>payment</div>
          <div style={activeDropdown === 5 ? dropdownActiveStyle : dropdownStyle}>
            <a href="#" style={linkStyle}>Link 1</a>
            <a href="#" style={linkStyle}>Link 2</a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default App;
