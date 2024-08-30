// src/components/Login.js
import React, { useState } from 'react';
import Navbar from '../../portal/components/Navbar'
import Footer from '../../portal/components/Footer'
import { useNavigate } from 'react-router-dom';
import './Style.css'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানেই authentication চেক করা হবে
    if (username === 'ad' && password === 'pass') {
      navigate('/admin-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };
 

  return (
    <div className='logoback'>
      <Navbar/>
    <form onSubmit={handleSubmit} style={{fontFamily: 'sans-serif',  margin:' 0', padding:' 0 ',display: 'flex', justifyContent: 'center', alignItems:' center',minHeight:"100vh"}}>
      <div className='logcontainer'>
        <h3 style={{textAlign:'center',color:'#ff7518'}}>Login</h3>
      <div>
        <label style={{color:'#ff7518'}}>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label  style={{color:'#ff7518'}}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button style={{backgroundColor: 'black ',color:' #ff7518',  cursor: 'pointer',marginTop:'10px',width:'70px',borderRadius:'5px'}} type="submit">Login</button>
      </div>
    </form>
    <Footer/>
    </div>
  );
};

export default Login;
