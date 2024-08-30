// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './portal/Home';
import Login from './admin/components/Login';
import Navbar from './portal/components/Navbar'
import Footer from './portal/components/Footer'
import Body from './portal/pages/Body'
import Room from './portal/pages/Room'
import Service from './portal/pages/Service'
import Booking from './portal/pages/Booking'
import About from './portal/pages/About'
import Contact from './portal/pages/Contact'
import Staff from './admin/pages/Staff'
import Gym from './portal/pages/Gym'
import Details from './portal/pages/Details'
import Staffform from './admin/pages/staffform'
import Book from './admin/pages/Book'
import AdminDashboard from './admin/components/AdminDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from './admin/components/AdminNavbar';
import AdminSidebar from './admin/components/AdminSidebar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Body" element={<Body />} />
        <Route path="/Room" element={<Room />} />  
        <Route path="/Service" element={<Service />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/About" element={<About />} /> 
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Gym" element={<Gym />} />
        <Route path="/Details" element={<Details />} /> 

        <Route path="/Staff" element={<Staff />} />
        <Route path="/Staffform" element={<Staffform />} /> 
        <Route path="/Book" element={<Book />} />  

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/adminNavbar" element={<AdminNavbar />} />
        <Route path="/adminSidebar" element={<AdminSidebar/>} />
      </Routes>
    </Router>
  );
}

export default App;
