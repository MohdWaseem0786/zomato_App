import React from 'react'
import '../Css/AddRestro.css'
import { Link } from 'react-router-dom'

const AddRestro = () => {
  return (
    <>
    <div className='main'>
        <div className='page-1'>
            <img id='page-1-img' src='https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp'/>

        </div>

        <div className='page-1-content'>
            <h1 className='page1-h1'>Partner with Zomato </h1>
            <h1 className='page1-h1'> at 0% Commission for the 1st month!</h1>
            <p className='page1-para'>And get ads worth INR 1500. Valid for new restaurant partners in select cities.</p>
           <Link to="/AddRestroForm" className='page1-btn1'>Register your restaurant</Link>
            <button className='page1-btn2'>View your existing restaurant</button>
            <p className='page1-contect'>Need help? Contact +91 97-38-38-38-38</p>
            <div className='page1-card'>
                <h1 className='page1-card-h1'>Get started with online ordering</h1>
                <h5 className='page1-card-h5'>Please keep the documents ready for a smooth signup</h5>
            </div>
        </div>

    </div>
    </>
  )
}

export default AddRestro

// <img alt="web-backdrop" src="https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp" loading="lazy" class="s1isp7-4 bBALuk">