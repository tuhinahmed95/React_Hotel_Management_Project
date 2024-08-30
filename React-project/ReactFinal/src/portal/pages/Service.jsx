import React from 'react'
import Navbar from '../../portal/components/Navbar'
import Footer from '../../portal/components/Footer'
import {  NavLink } from 'react-router-dom';
const Service = () => {
  return (
    <div style={{minHeight:'200px'}}>
      <Navbar/>
      <div className="container-xxl py-5">
  <div className="container"  style={{marginTop:'60px'}}>
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title text-center text-primary text-uppercase">Our Services</h6>
      <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Services</span></h1>
    </div>
    <div className="row g-4">
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <a className="service-item rounded" href>
          <div className="service-icon bg-transparent border rounded p-1">
            <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
              <i className="fa fa-hotel fa-2x text-primary" />
            </div>
          </div>
          <h5 className="mb-3">Rooms &amp; Appartment</h5>
          <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
          <div style={{marginTop:'20px'}}>
           <NavLink style={{textDecoration:'none'}} to="/Room">Click Me</NavLink>
          </div>
        
        </a>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
        <a className="service-item rounded" href>
          <div className="service-icon bg-transparent border rounded p-1">
            <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
              <i className="fa fa-utensils fa-2x text-primary" />
            </div>
          </div>
          <h5 className="mb-3">Food &amp; Restaurant</h5>
          <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
          <div style={{marginTop:'20px'}}>
           <NavLink style={{textDecoration:'none'}} to="">Click Me</NavLink>
          </div>
        </a>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <a className="service-item rounded" href>
          <div className="service-icon bg-transparent border rounded p-1">
            <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
              <i className="fa fa-spa fa-2x text-primary" />
            </div>
          </div>
          <h5 className="mb-3">Spa &amp; Fitness</h5>
          <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
          <div style={{marginTop:'20px'}}>
           <NavLink style={{textDecoration:'none'}} to="">Click Me</NavLink>
          </div>
        </a>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
        <a className="service-item rounded" href>
          <div className="service-icon bg-transparent border rounded p-1">
            <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
              <i className="fa fa-swimmer fa-2x text-primary" />
            </div>
          </div>
          <h5 className="mb-3">Sports &amp; Gaming</h5>
          <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
          <div style={{marginTop:'20px'}}>
           <NavLink style={{textDecoration:'none'}} to="">Click Me</NavLink>
          </div>
        </a>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <a className="service-item rounded" href>
          <div className="service-icon bg-transparent border rounded p-1">
            <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
              <i className="fa fa-glass-cheers fa-2x text-primary" />
            </div>
          </div>
          <h5 className="mb-3">Event &amp; Party</h5>
          <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
          <div style={{marginTop:'20px'}}>
           <NavLink style={{textDecoration:'none'}} to="">Click Me</NavLink>
          </div>
        </a>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
        <a className="service-item rounded" href>
          <div className="service-icon bg-transparent border rounded p-1">
            <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
              <i className="fa fa-dumbbell fa-2x text-primary" />
            </div>
          </div>
          <h5 className="mb-3">GYM &amp; Yoga</h5>
          <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
          <div style={{marginTop:'20px'}}>
           <NavLink style={{textDecoration:'none'}} to="/Gym">Click Me</NavLink>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default Service
