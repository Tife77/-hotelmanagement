import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, email, password } = formData;
    console.log(fname, lname, email, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='loginC'>
      <form className='login' onSubmit={handleSubmit}>
        <h2 className='SignIN'>Sign Up</h2>
        <hr />

        <div className='mb-3 control control3'>
          <label className='labelLogin'>First Name</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter First Name'
            name='fname'
            value={formData.fname}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3 control control3'>
          <label className='labelLogin'>Last Name</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter Last Name'
            name='lname'
            value={formData.lname}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3 control control3'>
          <label className='labelLogin'>Email address</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className='mb-3 control control3'>
          <label className='labelLogin'>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Enter password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className='mb-4'>
          <div className='custom-control custom-checkbox'>
            <input
              type='checkbox'
              className='custom-control-input'
              id='customCheck1'
            />
            <label className='custom-control-label' htmlFor='customCheck1'>
              Remember me
            </label>
          </div>
        </div>

        <div className='d-grid'>
          <button type='submit' className='btn btn-primary'>
            Sign Up
          </button>
        </div>
        {/* <p className="forgot-password text-right">
      Forgot <a href="#">password?</a>
    </p> */}
        <p className='signup'>
          Already have an account <Link to='/sign-in'>Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
