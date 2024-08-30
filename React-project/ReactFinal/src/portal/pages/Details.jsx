

import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {  NavLink } from 'react-router-dom';

const SuiteRoom = () => {
  const styles = {
    container: {
      width:"80%",
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      
      margin: '0 auto',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    header: {
      marginTop:'100px',
      textAlign: 'center',
      color: '#ff7518',
    },
    
    image: {
      width: '100%',
      height:'300px',
      padding:'5px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    section: {
      marginTop: '20px',
      border:' 1px solid #ff7518',
      padding:'10px',
      borderRadius:'5px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      
    },
    title: {
      fontSize: '24px',
      color:'#ff7518',
      marginBottom: '10px',
    },
    list: {
      listStyleType: 'none',
      padding: '0',
    },
    listItem: {
      marginBottom: '5px',
       color:'#ff7518'
    },
  };

  return (
    <div>
    <Navbar/>
    <div style={styles.container}>
      <h1 style={styles.header}> Room Details</h1>
         <div style={{width:'100%',height:'400px'}}>
             <div style={{width:'34%',float:'left' }}>
             <img 
              src="src/assets/images/room-d.jpg" 
               alt="" 
             style={styles.image} 
             />
            <h4 style={{color:'#ff7518'}}>Bed Room</h4>
            </div>
            <div style={{width:'33%',float:'Right' }}>
            <img 
              src="src/assets/images/belcony.jpg" 
               alt="" 
             style={styles.image} 
             />
             <h4 style={{color:'#ff7518'}}>Balcony</h4>
            </div>
            <div style={{width:'33%',float:'Left'}}>
            <img 
              src="src/assets/images/washroom.jpg" 
               alt="" 
             style={styles.image} 
             />
             <h4 style={{color:'#ff7518'}}>Bathroom</h4>
            </div>
      
      
     
         </div>
         <div style={{textAlign:'center',width:'30%',height:'50px'}}>
            <div style={{float:'left',width:'30%'}}> 
            <button style={{width:'100%',backgroundColor:'#ffffff',borderColor:'#ff7518',borderRadius:'5px'}}> <NavLink style={{padding:'5px',textDecoration:'none',color:'#ff7518'}} to="/Room"> Back</NavLink> </button>
            </div>
            <div style={{float:'right',width:'30%'}}> <button style={{width:'100%',backgroundColor:'#ffffff',borderColor:'#ff7518',borderRadius:'5px'}}> <NavLink style={{padding:'5px',textDecoration:'none',color:'#ff7518'}} to="/Booking"> Book Now </NavLink> </button></div>
         </div>
       
      <div style={styles.section}>
        <h2 style={styles.title}>Description:</h2>
        <p style={{color:'#ff7518'}}>Experience the epitome of luxury in our elegant suite room. Designed with comfort and style in mind, our suite offers spacious living areas, modern amenities, and breathtaking views. Perfect for both leisure and business travelers.</p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.title}>Features:</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Size:</strong> 800 sq ft</li>
          <li style={styles.listItem}><strong>Bed:</strong> King-size bed with premium bedding</li>
          <li style={styles.listItem}><strong>Living Area:</strong> Separate living room with a sofa, armchairs, and a coffee table</li>
          <li style={styles.listItem}><strong>Bathroom:</strong> Marble bathroom with a soaking tub, rain shower, and premium toiletries</li>
          <li style={styles.listItem}><strong>Workspace:</strong> Dedicated workspace with a desk and high-speed internet</li>
          <li style={styles.listItem}><strong>Entertainment:</strong> 55-inch flat-screen TV, Bluetooth speakers, and a selection of movies</li>
          <li style={styles.listItem}><strong>Kitchenette:</strong> Mini-fridge, microwave, coffee maker, and a selection of teas and coffees</li>
          <li style={styles.listItem}><strong>Balcony:</strong> Private balcony with seating and panoramic views</li>
          <li style={styles.listItem}><strong>Other Amenities:</strong> Air conditioning, blackout curtains, in-room safe, iron and ironing board, and 24-hour room service</li>
        </ul>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default SuiteRoom;
