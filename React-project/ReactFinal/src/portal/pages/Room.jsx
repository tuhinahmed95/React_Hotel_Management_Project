import React from 'react'
import {  NavLink } from 'react-router-dom';
import Navbar from '../../portal/components/Navbar'
import Footer from '../../portal/components/Footer'


const Room = () => {
  return (
    
    <div style={{backgroundColor:'#ffffff'}}>
    <Navbar/>
        <div className="container-xxl py-5" >
  <div className="container" style={{marginTop:'60px'}}>
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title text-center text-primary text-uppercase">Our Rooms</h6>
      <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Rooms</span></h1>
    </div>
    <div className="row g-4">
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="room-item shadow rounded overflow-hidden">
          <div className="position-relative">
            <img className="img-fluid" src="img/room-1.jpg" alt />
            <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
          </div>
          <div className="p-4 mt-2">
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">Junior Suite</h5>
              <p style={{color:"#880808"}}>Room No:101</p>
              <div className="ps-2">
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
              </div>
            </div>
            <div className="d-flex mb-3">
              <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
              <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
              <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
            </div>
            <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
            <div className="d-flex justify-content-between">
              <NavLink className="btn btn-sm btn-primary rounded py-2 px-4" to="/Details"  >View Detail</NavLink>
              <NavLink className="btn btn-sm btn-dark rounded py-2 px-4" to="/Booking">Book Now</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="room-item shadow rounded overflow-hidden">
          <div className="position-relative">
            <img className="img-fluid" src="img/room-2.jpg" alt />
            <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
          </div>
          <div className="p-4 mt-2">
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">Executive Suite</h5>
              <p style={{color:"#880808"}}>Room No:102</p>
              <div className="ps-2">
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
              </div>
            </div>
            <div className="d-flex mb-3">
              <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
              <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
              <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
            </div>
            <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
            <div className="d-flex justify-content-between">
            <NavLink className="btn btn-sm btn-primary rounded py-2 px-4" to="/Details"  >View Detail</NavLink>
              <NavLink className="btn btn-sm btn-dark rounded py-2 px-4" to="/Booking">Book Now</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
        <div className="room-item shadow rounded overflow-hidden">
          <div className="position-relative">
            <img className="img-fluid" src="img/room-3.jpg" alt />
            <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
          </div>
          <div className="p-4 mt-2">
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">Super Deluxe</h5>
              <p style={{color:"#880808"}}>Room No:103</p>
              <div className="ps-2">
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
              </div>
            </div>
            <div className="d-flex mb-3">
              <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
              <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
              <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
            </div>
            <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
            <div className="d-flex justify-content-between">
            <NavLink className="btn btn-sm btn-primary rounded py-2 px-4" to="/Details"  >View Detail</NavLink>
              <NavLink className="btn btn-sm btn-dark rounded py-2 px-4" to="/Booking">Book Now</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
        <div className="room-item shadow rounded overflow-hidden">
          <div className="position-relative">
            <img className="img-fluid" src="img/room-3.jpg" alt />
            <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
          </div>
          <div className="p-4 mt-2">
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">Super Deluxe</h5>
              <p style={{color:"#880808"}}>Room No:104</p>
              <div className="ps-2">
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
              </div>
            </div>
            <div className="d-flex mb-3">
              <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
              <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
              <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
            </div>
            <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
            <div className="d-flex justify-content-between">
            <NavLink className="btn btn-sm btn-primary rounded py-2 px-4" to="/Details"  >View Detail</NavLink>
              <NavLink className="btn btn-sm btn-dark rounded py-2 px-4" to="/Booking">Book Now</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="room-item shadow rounded overflow-hidden">
          <div className="position-relative">
            <img className="img-fluid" src="img/room-1.jpg" alt />
            <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
          </div>
          <div className="p-4 mt-2">
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">Junior Suite</h5>
              <p style={{color:"#880808"}}>Room No:105</p>
              <div className="ps-2">
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
              </div>
            </div>
            <div className="d-flex mb-3">
              <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
              <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
              <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
            </div>
            <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
            <div className="d-flex justify-content-between">
            <NavLink className="btn btn-sm btn-primary rounded py-2 px-4" to="/Details"  >View Detail</NavLink>
              <NavLink className="btn btn-sm btn-dark rounded py-2 px-4" to="/Booking">Book Now</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="room-item shadow rounded overflow-hidden">
          <div className="position-relative">
            <img className="img-fluid" src="img/room-2.jpg" alt />
            <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
          </div>
          <div className="p-4 mt-2">
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">Executive Suite</h5>
              <p style={{color:"#880808"}}>Room No:106</p>
              <div className="ps-2">
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
                <small className="fa fa-star text-primary" />
              </div>
            </div>
            <div className="d-flex mb-3">
              <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
              <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
              <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
            </div>
            <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
            <div className="d-flex justify-content-between">
            <NavLink className="btn btn-sm btn-primary rounded py-2 px-4" to="/Details"  >View Detail</NavLink>
              <NavLink className="btn btn-sm btn-dark rounded py-2 px-4" to="/Booking">Book Now</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default Room
