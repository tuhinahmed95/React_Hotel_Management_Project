
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Style.css'
import {NavLink} from 'react-router-dom';

function BasicExample() {
  return (
    
    <Navbar style={{backgroundColor:'#37474F',position:'fixed',marginTop:'0',width:'100%',zIndex:'100'}}>
      <Container >
              
        <NavLink style={{color:'#ffffff',textDecoration:'none'}}  to="/">PADMA HEIGHTS <br /><p style={{fontSize:'1rem',color:'#ff7518'}}>HOTEL and RESORT</p></NavLink>
             
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="menus">
            <NavLink className="alink" to="/Room">ROOMS</NavLink>
            <NavLink className="alink" to="/Service">SERVICES</NavLink>
            <NavLink className="alink" to="/Booking">Booking</NavLink>
            <NavLink className="alink" to="/About">About</NavLink>
            <NavLink className="alink" to="/Contact">Contact</NavLink>
            <NavLink className="kook" to="/">link</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className='login'>
      
      <NavLink style={{color:'#ffffff',textDecoration:'none'}} to="/Login">
      <img style={{width:'20px',borderRadius:'100%'}} src="src/assets/images/shaheen.jpg" alt="" />
      Admin</NavLink>
      
      </div>
   
    </Navbar>
    
  );
}

export default BasicExample;