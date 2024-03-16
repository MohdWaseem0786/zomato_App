import React from 'react'

const AddRestroForm = () => {
  return (
    <>
    <div className='container'>
       

        <div className='login-card'>
            <h1 id='login'> Restaurant Information</h1>
            <input
            type='text'
            placeholder='Enter your Restaurant Name'
            name='Restaurant Name'
            />
            <input
            type='text'
            placeholder='Enter your Category'
            name='Catory'
            />
            <input
            type='text'
            placeholder='Enter your Restaurant Address'
            name='Address'
            />
            
            <button id='login-btn'>Add Restaurant</button>
            <div className='sign-up'>
                {/* <h6>Not a member? <span> Signup now</span></h6> */}
                {/* <Link to="/sign_up">Sign Up</Link> */}
                <p>Don't have an account? Sign up</p>
            </div>
            
        </div>
    </div>
 </>
  )
}

export default AddRestroForm