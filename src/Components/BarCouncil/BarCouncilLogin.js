import React, { useState } from 'react';
import img2 from "../../Assets/Council.jpg";
import { Link } from 'react-router-dom';
import '../BarCouncil/BarCouncilLogin.css'
import { toast } from 'react-toastify';

function BarCouncilLogin() {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) {
      return 'Email is required';
    } else if (!emailRegex.test(value)) {
      return 'Invalid email format';
    }
    return '';
  };

  const validatePassword = (value) => {
    if (!value.trim()) {
      return 'Password is required';
    }
    // Add more password validation logic if needed
    return '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let errors = {};

    errors.email = validateEmail(data.email);
    errors.password = validatePassword(data.password);

    setErrors(errors);

    if (Object.values(errors).every(error => error === '')) {
      if (data.email === "barcouncil@gmail.com" && data.password === "pwd") {
        toast.success("Success message!");
        // Redirect to admin dashboard or set auth state
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          email: 'Invalid credentials',
          password: 'Invalid credentials'
          
        }));
        toast.error("Invalid credentials");
      }
    }
  };
  const handleReset = () => {
    setData({
      email: '',
      password: ''
    });
    setErrors({
      email: '',
      password: ''
    });
  };

  return (
    <div>
      <div className='barcouncil_bg container-fluid'>
        <p className='text-center fs-3 pt-4'>BarCouncil</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6 mt-5">
            <p className='text-center fs-4'>Login Here</p>
            <form onSubmit={handleSubmit}>
            <div className='col-8 mt-5 ms-5'>
              <div className='row mb-3'>
                <label className='barcouncil_text'>Email id</label>
                <input type='text' className='form-control' placeholder='Email id' name='email' onChange={handleChange} />
                {errors.email && <span className="text-danger">{errors.email}</span>}
              </div>
              <div className='row'>
                <label className='barcouncil_text'>Password</label>
                <input type='password' className='form-control ' placeholder='password'name='password' onChange={handleChange} />
                {errors.password&&<sapn className='text-danger'>{errors.password}</sapn>}
              </div>
              <div className='row float-end mt-2'>
                <Link to='' className='text-decoration-none'><p className='text-dark '>Forgot Password?</p></Link>
              </div>
              <div className='row mt-5 ms-2'>
                <div className='col-6 mt-3'>
                  <button className='barcouncil_btn_bg_text col-8 rounded-5' type='submit'>submit</button>
                </div>
                <div className='col-6 mt-3'>
                  <button className='barcouncil_btn_bg_text col-8 rounded-5' type='reset' onClick={handleReset}>Reset</button>
                </div>
              </div>
              <div className='row d-flex  mt-3'>
                <p>Don't have an account?<Link to='' className=' text-decoration-none text_colo_lik ms-2'>Register here.</Link> </p>
              </div>
            </div>
            </form>
          </div>
          <div className='col-lg-6 col-sm-6 mt-5'>
          <img src={img2} className="img-fluid imgs w-100"  alt="..."/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default BarCouncilLogin;
