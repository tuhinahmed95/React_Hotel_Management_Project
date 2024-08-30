import React, { useState } from 'react';
import Navbar from '../../portal/components/Navbar';
import Footer from '../../portal/components/Footer';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    adults: 1,
    children: 0,
    room_no: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.checkin || !formData.checkout || formData.adults < 1) {
      alert('Please fill out all required fields.');
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post('http://localhost/React-Final/React-project/Api-php/booking/insert.php', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(img/carousel-1.jpg)' }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5" style={{ marginTop: '60px' }}>
            <h1 className="display-3 text-white mb-3 animated slideInDown">Booking</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <NavLink style={{ textDecoration: 'none', color: '#ffffff' }} to="/">Home</NavLink>
                </li>
                <li className="breadcrumb-item text-white active" aria-current="page">Booking</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">Room Booking</h6>
            <h1 className="mb-5">Book A <span className="text-primary text-uppercase">Luxury Room</span></h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="img/about-1.jpg" style={{ marginTop: '25%' }} alt="About" />
                </div>
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="img/about-2.jpg" alt="About" />
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="img/about-3.jpg" alt="About" />
                </div>
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="img/about-4.jpg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating date" id="date3" data-target-input="nearest">
                        <input type="date" className="form-control datetimepicker-input" id="checkin" placeholder="Check In" name="checkin" value={formData.checkin} onChange={handleChange} required />
                        

                        <label htmlFor="checkin">Check In</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating date" id="date4" data-target-input="nearest">
                        <input type="date" className="form-control datetimepicker-input" id="checkout" placeholder="Check Out" name="checkout" value={formData.checkout} onChange={handleChange} required />
                        <label htmlFor="checkout">Check Out</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-select" id="select1" name="adults" value={formData.adults} onChange={handleChange} required>
                          <option value={1}>Adult 1</option>
                          <option value={2}>Adult 2</option>
                          <option value={3}>Adult 3</option>
                        </select>
                        <label htmlFor="select1">Select Adult</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-select" id="select2" name="children" value={formData.children} onChange={handleChange}>
                          <option value={0}>Child 0</option>
                          <option value={1}>Child 1</option>
                          <option value={2}>Child 2</option>
                          <option value={3}>Child 3</option>
                        </select>
                        <label htmlFor="select2">Select Child</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="room_no" placeholder="Room No." name="room_no" value={formData.room_no} onChange={handleChange} required />
                        <label htmlFor="room_no">Room No.</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="phone" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} required />
                        <label htmlFor="phone">Phone</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="row justify-content-center">
          <div className="col-lg-10 border rounded p-1">
            <div className="border rounded text-center p-1">
              <div className="bg-white rounded text-center p-5">
                <h4 className="mb-4">Subscribe Our <span className="text-primary text-uppercase">Newsletter</span></h4>
                <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                  <input className="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                  <button type="button" className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      <Footer />
    </div>
  );
};
export default Booking