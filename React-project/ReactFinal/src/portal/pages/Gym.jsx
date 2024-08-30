import React from 'react';
import Navbar from '../../portal/components/Navbar'
import Footer from '../../portal/components/Footer'
import './Style.css';

const gymImages = [
  'src/assets/images/gym1.webp',
  'src/assets/images/gym2.webp',
  'src/assets/images/gym3.jpg',
  'src/assets/images/gym4.jpg',
  'src/assets/images/gym5.webp',
  'src/assets/images/gym6.webp',
  'src/assets/images/gym7.jpg',
  'src/assets/images/gym8.jpg',
  'src/assets/images/gym9.jpg',
  'src/assets/images/gym10.jpg',
  'src/assets/images/gym11.webp',
  'src/assets/images/gym12.jpg'
];

const Gym = () => {
  return (
    <div>
        <Navbar/>
        
    <div className="App">
      <header className="App-header">
        <div style={{marginTop:'100px'}}>
        <h1>Padma Heights</h1>
        <p>Welcome to our HOTEL gym, your ultimate destination for health and fitness! Our state-of-the-art facility is designed to cater to all your fitness needs, whether you're a seasoned athlete or just starting your fitness journey. Here’s what sets us apart:</p>
        </div>
      </header>
      <div className="image-grid">
        {gymImages.map((image, index) => (
          <div className="image-block" key={index}>
            <img src={image} alt={`Gym ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  
  <Footer/>
    </div>
  );
};

export default Gym;
