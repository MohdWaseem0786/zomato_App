import React from 'react'
import '../Css/Login.css'
import {Link} from 'react-router-dom'


const Login = () => {
  return (
    <>
    <div className='container'>
       

        <div className='login-card'>
            <h1 id='login'>Login</h1>
            <input
            type='text'
            placeholder='Enter your Email'
            name='Email'
            />
            
            <input
            type='password'
            placeholder='Enter your Password'
            name='Password'
            />
            <button id='login-btn'>Login</button>
            <div className='sign-up'>
                {/* <h6>Not a member? <span> Signup now</span></h6> */}
                {/* <Link to="/sign_up">Sign Up</Link> */}
                <p>Don't have an account? <Link to="/sign_up">Sign up</Link></p>
            </div>
            
        </div>
    </div>
 </>
  )
}

export default Login