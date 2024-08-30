import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../admin/components/AdminNavbar'
import AdminSidebar from '../../admin/components/AdminSidebar'

import Footer from './../../portal/components/Footer';
import './Style.css'

const BookTable = () => {
  const [bookData, setBookData] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [formValue, setFormValue] = useState({
    id: '',
    name: '',
    email: '',
    checkin: '',
    checkout: '',
    adults: '',
    children: '',
    room_no: '',
    phone:'',
  });

  useEffect(() => {
    // Fetch data from backend
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost/React-Final/React-project/Api-php/booking/view.php');
        const data = await response.json();
        setBookData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (bookings) => {
    setEditingBook(bookings.id);
    setFormValue(bookings);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch('http://localhost/React-Final/React-project/Api-php/booking/delete.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();
      console.log(data.message);
      setBookData(bookData.filter((book) => book.id !== id));
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
      const response = await fetch('http://localhost/React-Final/React-project/Api-php/booking/edit.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValue),
      });

      const data = await response.json();
      console.log(data.message);

      setBookData(
        bookData.map((book) =>
          book.id === formValue.id ? formValue : book
        )
      );
      setEditingBook(null);
      setFormValue({
        id: '',
        name: '',
        email: '',
        checkin: '',
        checkout: '',
        adults: '',
        children: '',
        room_no: '',
        phone:'',
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


  {editingBook ? (
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
                <label>check in:</label>
                <input
                  type="date"
                  name="checkin"
                  value={formValue.checkin}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <label>Check out:</label>
                <input
                  type="date"
                  name="checkout"
                  value={formValue.checkout}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <label>Adult:</label>
                <input
                  type="number"
                  name="adults"
                  value={formValue.adults}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <label>Children:</label>
                <input
                  type="number"
                  name="children"
                  value={formValue.children}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <label>Room No:</label>
                <input
                  type="number"
                  name="room_no"
                  value={formValue.room_no}
                  onChange={handleChange}
                />
              </div>
              </div>
              <button className='butt' type="submit">Save</button>
              <button className='butto' onClick={() => setEditingBook(null)}>Cancel</button>
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
        <th><h1>Check in</h1></th>
        <th><h1>Check out</h1></th>
        <th><h1>Adult</h1></th>
        <th><h1>Children</h1></th>
        <th><h1>Room No</h1></th>
        <th><h1>Phone</h1></th>
        <th><h1>Action</h1></th>
      </tr>
    </thead>
    <tbody>
    {bookData.map((bookings) => (
                <tr key={bookings.id}>
                  <td>{bookings.id}</td>
                  <td>{bookings.name}</td>
                  <td>{bookings.email}</td>
                  <td>{bookings.checkin}</td>
                  <td>{bookings.checkout}</td>
                  <td>{bookings.adults}</td>
                  <td>{bookings.children}</td>
                  <td>{bookings.room_no}</td>
                  <td>{bookings.phone}</td>
                  <td style={{padding:'5px'}}>
                    <button className='butt' onClick={() => handleEdit(bookings)} >Edit</button>
                    <button className='butto'  onClick={() => handleDelete(bookings.id)} >Delete</button>
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

export default BookTable;
