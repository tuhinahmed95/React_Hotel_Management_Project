import React from 'react';
import Navbar from '../../portal/components/Navbar'

import {  NavLink } from 'react-router-dom';
const HotelDescription = () => {
  const styles = {
    container: {
      
      fontFamily: 'Arial, sans-serif',
      color: '#333',
     
      maxWidth: '80%',
      margin: '0 auto',
      backgroundColor: '#f8f8f8',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      fontSize: '2.5em',
      color: '#ff7518',
      marginBottom: '10px',
      marginTop:'100px'
    },
    address: {
      fontSize: '1.2em',
      color: '#ff7518',
      marginBottom: '20px',
    },
    image: {
      width: '50%',
      height: 'auto',
      borderRadius: '10px',
      marginBottom: '20px',
    },
    section: {
      marginBottom: '20px',
      
    },
    subheading: {
      fontSize: '1.8em',
      color: '#555',
      marginBottom: '10px',
    },
    text: {
      fontSize: '1em',
      color: '#666',
      lineHeight: '1.6',
    },
  };

  return (

    <div>
     <Navbar/>
    <div style={styles.container}>
      <div style={{textAlign:'center',padding:'10px'}}>
      <h1 style={styles.heading}>The Padma Heights</h1>
      <p style={styles.address}>123 Luxury Avenue, Beverly Hills, CA 90210, Bangladesh</p>
      <img
        style={styles.image}
        src="src/assets/images/carasol2.webp"
        alt=""
      />
      
      </div>
     
      <div style={{}}>
      <div style={{textAlign:'center',width:'30%',height:'50px',marginLeft:'35%'}}>
            <div style={{float:'left',width:'30%'}}> 
            <button style={{width:'100%',backgroundColor:'#ffffff',borderColor:'#ff7518',borderRadius:'5px'}}> <NavLink style={{padding:'5px',textDecoration:'none',color:'#ff7518'}} to="/">Home</NavLink> </button>
            </div>
            <div style={{float:'right',width:'30%'}}> <button style={{width:'100%',backgroundColor:'#ffffff',borderColor:'#ff7518',borderRadius:'5px'}}> <NavLink style={{padding:'5px',textDecoration:'none',color:'#ff7518'}} to="/Booking"> Book Now </NavLink> </button></div>
         </div>
      
      <div style={{width:'100%',padding:'5px' }}>
        <div style={{width:'49%',float:'left',backgroundColor:'#d9faf7',padding:'20px',borderRadius:'5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',height:'200px'}}>
      <div style={styles.section}>
        <h2 style={styles.subheading}>Overview</h2>
        <p style={styles.text}>
          The Grand Lux Hotel is an epitome of opulence and elegance. Located in the heart of Beverly Hills, it offers an unparalleled luxury experience with world-class amenities and impeccable service. This hotel is a perfect blend of classic sophistication and contemporary style, making it an ideal choice for discerning travelers.
        </p>
      </div>
      </div>
      <div style={{width:'49%',float:'right',backgroundColor:'#d9faf7',padding:'20px',borderRadius:'5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',height:'200px'}}>
      <div style={styles.section}>
        <h2 style={styles.subheading}>Rooms</h2>
        <p style={styles.text}>
          The hotel features 200 exquisitely designed rooms and suites, each equipped with:
          <ul>
            <li>Plush bedding and fine linens</li>
            <li>Marble bathrooms with high-end toiletries</li>
            <li>State-of-the-art entertainment systems</li>
            <li>24-hour room service</li>
          </ul>
        </p>
      </div>
      </div>
      </div>


      <div style={{width:'100%',padding:'5px'}}>
        <div style={{width:'49%',float:'left',backgroundColor:'#d9faf7',padding:'20px',borderRadius:'5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',height:'250px'}}>
      <div style={styles.section}>
        <h2 style={styles.subheading}>Amenities</h2>
        <p style={styles.text}>
          <ul>
            <li>Michelin-starred restaurant</li>
            <li>Rooftop infinity pool</li>
            <li>Full-service spa</li>
            <li>Fitness center with personal trainers</li>
            <li>Business center and meeting rooms</li>
            <li>Concierge services</li>
          </ul>
        </p>
      </div>
      </div>

      <div style={{width:'49%',float:'right',backgroundColor:'#d9faf7',padding:'20px',borderRadius:'5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',height:'250px'}}>
      <div style={styles.section}>
        <h2 style={styles.subheading}>Dining</h2>
        <p style={styles.text}>
          Experience culinary excellence at our Michelin-starred restaurant, offering a diverse menu crafted by world-renowned chefs. Enjoy a variety of international cuisines and a curated selection of fine wines.
        </p>
      </div>
      </div>
      </div>

      <div  style={{width:'100%',padding:'5px'}}>
        <div  style={{width:'49%',float:'left',backgroundColor:'#d9faf7',padding:'20px',borderRadius:'5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',height:'150px'}}>
      <div style={styles.section}>
        <h2 style={styles.subheading}>Leisure</h2>
        <p style={styles.text}>
          Relax at the rooftop infinity pool while enjoying panoramic views of the city. Indulge in rejuvenating treatments at our full-service spa, or stay active at our well-equipped fitness center.
        </p>
      </div>
      </div>
      <div style={{width:'49%',float:'right',backgroundColor:'#d9faf7',padding:'20px',borderRadius:'5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',height:'150px'}}>
      <div style={styles.section}>
        <h2 style={styles.subheading}>Events</h2>
        <p style={styles.text}>
          Host your next event in style with our state-of-the-art meeting rooms and elegant banquet halls. Our dedicated event planning team will ensure every detail is meticulously arranged.
        </p>
      </div>
    </div>
    </div>
    </div>

    
    </div>
   
    </div>
  
  );
};

export default HotelDescription;
