import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../admin/components/AdminNavbar'
import AdminSidebar from '../../admin/components/AdminSidebar'

import Footer from './../../portal/components/Footer';
import './Style.css'

const StaffTable = () => {
  const [staffData, setStaffData] = useState([]);
  const [editingStaff, setEditingStaff] = useState(null);
  const [formValue, setFormValue] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    position: '',
    department: '',
    salary: '',
  });

  useEffect(() => {
    // Fetch data from backend
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost/React-Final/React-project/Api-php/staff/view.php');
        const data = await response.json();
        setStaffData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (staffs) => {
    setEditingStaff(staffs.id);
    setFormValue(staffs);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch('http://localhost/React-Final/React-project/Api-php/staff/delete.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();
      console.log(data.message);
      setStaffData(staffData.filter((staff) => staff.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/React-Final/React-project/Api-php/staff/edit.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValue),
      });

      const data = await response.json();
      console.log(data.message);

      setStaffData(
        staffData.map((staff) =>
          staff.id === formValue.id ? formValue : staff
        )
      );
      setEditingStaff(null);
      setFormValue({
        id: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        position: '',
        department: '',
        salary: '',
      });
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

return (
        <div>
        <div><AdminNavbar/></div>
        <div style={{width:'100%'}}>
          <div style={{width:'20%',float:'left'}}><AdminSidebar/></div>
          <div style={{width:'80%',float:'right'}}>

            <div style={{marginTop:'10%',minHeight:'100vh'}}>
         
           
  <h2>Here are all the details of  <a href="https://github.com/pablorgarcia" target="_blank">the staff of this hotel </a></h2>


  {editingStaff ? (
            <div className='boddy'>
              <div className="con">
                <div className="title">Edit Form</div>
                  <div className="cont">
            <form onSubmit={handleSubmit}>
              <div className="user-details">
              <input
                type="hidden"
                name="id"
                value={formValue.id}
                onChange={handleChange}
              />
              <div className="input-box">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formValue.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formValue.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <label>Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={formValue.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formValue.address}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <label>Position:</label>
                <input
                  type="text"
                  name="position"
                  value={formValue.position}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <label>Department:</label>
                <input
                  type="text"
                  name="department"
                  value={formValue.department}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <label>Salary:</label>
                <input
                  type="number"
                  name="salary"
                  value={formValue.salary}
                  onChange={handleChange}
                />
              </div>
              </div>
              <button className='butt' type="submit">Save</button>
              <button className='butto' onClick={() => setEditingStaff(null)}>Cancel</button>
            </form>
            </div>
            </div>
            </div>
           
          ) : (
  <table className="contain">
    <thead>
      <tr>
        <th><h1>id</h1></th>
        <th><h1>Name</h1></th>
        <th><h1>E-mail</h1></th>
        <th><h1>Phone</h1></th>
        <th><h1>Address</h1></th>
        <th><h1>Position</h1></th>
        <th><h1>Department</h1></th>
        <th><h1>Salary</h1></th>
        <th><h1>Action</h1></th>
      </tr>
    </thead>
    <tbody>
    {staffData.map((staffs) => (
                <tr key={staffs.id}>
                  <td>{staffs.id}</td>
                  <td>{staffs.name}</td>
                  <td>{staffs.email}</td>
                  <td>{staffs.phone}</td>
                  <td>{staffs.address}</td>
                  <td>{staffs.position}</td>
                  <td>{staffs.department}</td>
                  <td>{staffs.salary}</td>
                  <td style={{padding:'5px'}}>
                    <button className='butt' onClick={() => handleEdit(staffs)} >Edit</button>
                    <button className='butto'  onClick={() => handleDelete(staffs.id)} >Delete</button>
                  </td>
                </tr>
              ))}
      
    </tbody>
  </table>
          )}
</div>
<div><Footer/></div>
    </div>
 

          </div>

     
        </div>
       
      
     
        
  
   
  );
};

export default StaffTable;
