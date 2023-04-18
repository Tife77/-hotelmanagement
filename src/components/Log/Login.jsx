import './Login.css'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const Login = () => {
  return (
    <div className='loginC'>
    <form className='login'>
    <h2 className='SignIN'>Sign In</h2>
    <hr />
    <div className="mb-3 control control4">
      <label  className="labelLogin">Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
      />
    </div>

    <div className="mb-3 control control3">
      <label className="labelLogin">Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
      />
    </div>

    <div className="mb-4">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div>

    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
      Sign In
      </button>
    </div>
    {/* <p className="forgot-password text-right">
      Forgot <a href="#">password?</a>
    </p> */}
   <p className='signup'>Don't have an account <Link to="/sign-up">Sign Up</Link></p>
  </form>
  </div>
    )
}

export default Login

