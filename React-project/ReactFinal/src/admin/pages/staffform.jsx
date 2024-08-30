import React, { useState } from 'react';
import AdminNavbar from '../../admin/components/AdminNavbar';
import AdminSidebar from '../../admin/components/AdminSidebar';
import Footer from './../../portal/components/Footer';
import './Style.css';

const StaffForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    position: '',
    department: '',
    salary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost/React-Final/React-project/Api-php/staff/insert.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(formData).toString()
    });
  
    if (response.ok) {
      const result = await response.text();
      alert(result);
    } else {
      alert('Failed to submit form');
    }
  };
  

  return (
    <div>
      <div><AdminNavbar /></div>
      <div style={{ width: '100%' }}>
        <div style={{ width: '20%', float: 'left' }}><AdminSidebar /></div>
        <div style={{ width: '80%', float: 'right' }}>
          <div style={{ marginTop: '10%', minHeight: '100vh' }}>
            <div className='boddy'>
              <div className="con">
                <div className="title">Add Staff Form</div>
                <div className="cont">
                  <form onSubmit={handleSubmit}>
                    <div className="user-details">
                      <div className="input-box">
                        <span className="details">Name</span>
                        <input type="text" name="name" placeholder="Enter your name" required value={formData.name} onChange={handleChange} />
                      </div>
                      <div className="input-box">
                        <span className="details">E-mail</span>
                        <input type="email" name="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} />
                      </div>
                      <div className="input-box">
                        <span className="details">Phone</span>
                        <input type="number" name="phone" placeholder="Enter your number" required value={formData.phone} onChange={handleChange} />
                      </div>
                      <div className="input-box">
                        <span className="details">Address</span>
                        <input type="text" name="address" placeholder="Enter your address" required value={formData.address} onChange={handleChange} />
                      </div>
                      <div className="input-box">
                        <span className="details">Position</span>
                        <input type="text" name="position" placeholder="Enter your position" required value={formData.position} onChange={handleChange} />
                      </div>
                      <div className="input-box">
                        <span className="details">Department</span>
                        <input type="text" name="department" placeholder="Enter your department" required value={formData.department} onChange={handleChange} />
                      </div>
                      <div className="input-box">
                        <span className="details">Salary</span>
                        <input type="number" name="salary" placeholder="Enter your salary" required value={formData.salary} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="button">
                      <input type="submit" value="Submit" />
                    </div>
                  </form>
                </div>
              </div>
             
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default StaffForm;
