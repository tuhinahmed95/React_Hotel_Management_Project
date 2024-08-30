// src/components/AdminDashboard.js
import React from 'react';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';

import Footer from './../../portal/components/Footer';

import { Bar, Line, Doughnut, Pie, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement, RadialLinearScale } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement, RadialLinearScale);


const AdminDashboard = ({guests, onAction}) => {

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        backgroundColor: '#3498db',
        data: [50, 60, 70, 80, 90, 100]
      }
    ]
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Bookings',
        borderColor: '#2ecc71',
        fill: false,
        data: [30, 20, 40, 50, 60, 70]
      }
    ]
  };

  const doughnutData = {
    labels: ['Single', 'Double', 'Suite'],
    datasets: [
      {
        label: 'Room Types',
        backgroundColor: ['#e74c3c', '#f1c40f', '#8e44ad'],
        data: [40, 30, 30]
      }
    ]
  };

  const pieData = {
    labels: ['North', 'South', 'East', 'West'],
    datasets: [
      {
        label: 'Region Distribution',
        backgroundColor: ['#1abc9c', '#3498db', '#9b59b6', '#e74c3c'],
        data: [25, 25, 25, 25]
      }
    ]
  };

  const radarData = {
    labels: ['Service', 'Cleanliness', 'Value', 'Location', 'Amenities'],
    datasets: [
      {
        label: 'Customer Satisfaction',
        backgroundColor: 'rgba(46, 204, 113, 0.2)',
        borderColor: '#2ecc71',
        pointBackgroundColor: '#2ecc71',
        data: [80, 85, 75, 90, 95]
      }
    ]
  };

  // Inline CSS for cards and layout
  const cardStyle = {
   
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
    marginTop:'80px'
  };

  const card = {
    margin:'10px',
    backgroundColor: '#009aa6',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    textAlign: 'center',
    width: '30%',
    
  };

  const chartContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  };
  return (
   <>
      <AdminNavbar/>
     
      <div style={{width:'100%'}}>
        <div style={{width:'20%',float:'left'}}><AdminSidebar/></div>
        <div style={{width:'80%',marginLeft:'20%',minHeight:'100vh'}}>
        
        
    { <div style={{ padding: '20px'}}>
      <h1 style={{ textAlign: 'center',marginTop:'100px' }}>Dashboard</h1>
      <div style={cardStyle}>
        <div style={card}>
          <h2>Total Revenue</h2>
          <p>$50,000</p>
        </div>
        <div style={card}>
          <h2>Total Bookings</h2>
          <p>1,200</p>
        </div>
        <div style={card}>
          <h2>Occupancy Rate</h2>
          <p>75%</p>
        </div>

       
      </div>

      <div style={cardStyle}>
        <div style={card}>
          <h2>Cheak in Room</h2>
          <p>$50,000</p>
        </div>
        <div style={card}>
          <h2>Cheak out Room</h2>
          <p>1,200</p>
        </div>
        <div style={card}>
          <h2>Total Room</h2>
          <p>75%</p>
        </div>

       
      </div>
      <div style={chartContainer}>
        <div>
          <Bar data={barData} />
        </div>
        <div>
          <Line data={lineData} />
        </div>
        <div>
          <Doughnut data={doughnutData} />
        </div>
       
      </div>
    </div>
     }
    

    
    </div>
   

        
      
        <div style={{marginLeft:'16%'}}><Footer/></div>
      
      </div>
      
      </>
  
  );
};

export default AdminDashboard;
