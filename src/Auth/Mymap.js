import React from 'react'
import Login from '../Auth/Login'
import {Routes,Route} from 'react-router-dom'
import Sign_up from './Sign_up'
import Landing from '../Component/Landing'
import AddRestro from '../Component/AddRestro'
import AddRestroForm from '../Component/AddRestroForm'

const Mymap = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<AddRestroForm/>}/>
            <Route path='/sign_up' element={<Sign_up/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/landing' element={<Landing/>}/>
            <Route path='/AddRestro' element={<AddRestro/>}/>
            <Route path='/AddRestroForm' element={<AddRestroForm/>}/>

        </Routes>
    </>
  )
}

export default Mymap