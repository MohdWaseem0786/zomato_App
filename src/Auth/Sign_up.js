import React from 'react'
import '../Css/Sign_up.css'
import {Link} from 'react-router-dom'


const Sign_up = () => {
  return (
    <>
    <div className='container'>
       

        <div className='login-card'>
            <h1 id='sign-up'>Sign-Up</h1>

            <input
            type='text'
            placeholder='Enter your Full-Name'
            name='Email'
            />

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
            <button id='signup-btn'>Login</button>
            <div className='sign-up'>
                <p>Already have an acount? <Link to="/login">Login</Link></p>
            </div>
            
        </div>
    </div>
 </>
  )
}

export default Sign_up