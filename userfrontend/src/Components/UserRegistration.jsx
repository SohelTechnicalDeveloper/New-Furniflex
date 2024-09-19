import React, { Fragment, useState } from 'react';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
  }
  from 'mdb-react-ui-kit';

import './UserRegister.css'
import { Link, useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import './UserLogin.css'

function UserRegistration() 
{

    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[mobileNo,setMobileNo] = useState('')
    const[address,setAddress] = useState('')
    const[password,setPassword] = useState('')
    const[confPassword,setConfPassword] = useState('')
    const navigate = useNavigate()


const addUser =  async (e)=>{


    e.preventDefault()
    console.log(name+" "+email+" "+" "+mobileNo+" "+" "+address+" "+password+" "+confPassword)
     const response = await axios.post('http://localhost:5000/Api/user/signup',{
         name,
         email,
         mobileNo,
         address,
         password,
         confPassword
    } )
     if(response.status===201)
     {
           toast.success('SignUp Success')
      setTimeout(()=>{

        navigate('/userLogin')
      },2000)
          
     }
     else{
         toast.success('wrong Details')
     }

}

    return (
        <Fragment>
      <form onSubmit={addUser}>
      <MDBContainer fluid className='d-flex align-items-center justify-content-center mt-5'>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5 ' style={{width: '50%',margin:'10rem'}}>
        <MDBCardBody className='px-5 '>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput onChange={(e)=>{setName(e.target.value)}}  wrapperClass='mb-3' label='Your Name' size='lg' id='form1' type='text'/>
          <MDBInput onChange={(e)=>{setEmail(e.target.value)}} wrapperClass='mb-3' label='Your Email' size='lg' id='form2' type='email'/>
          <MDBInput onChange={(e)=>{setAddress(e.target.value)}} wrapperClass='mb-3' label='Enter your address' size='lg' id='form4' type='text'/>
          <MDBInput onChange={(e)=>{setMobileNo(e.target.value)}} label="Enter Your Mobile No" defaultCountry="US"/>
          {/* <PhoneInput onChange={setMobileNo}  className='mb-3 p-2'  label='Enter Your Mobile' size='lg' defaultCountry="US" />          */}
          <MDBInput onChange={(e)=>{setPassword(e.target.value)}} wrapperClass='mb-3' label='Password' size='lg' id='form3' type='password'/>
         <MDBInput onChange={(e)=>{setConfPassword(e.target.value)}} wrapperClass='mb-3' label='Repeat your password' size='lg' id='form4' type='password'/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <button className='mb-4 w-50  gradient-custom-4 btn' type='submit' size='lg'>Register</button>
          <Toaster></Toaster>
          <div className='already-login mb-4 w-50'>
            <p><span style={{color:"gray",fontSize:"1.1rem"}}>Have already an account?</span><Link style={{fontWeight:"bold",color:"#4F4F4F",fontSize:"1.2rem"}} to={'/userLogin'}> Login here</Link></p>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </form>

        </Fragment>
    )
    
}

export default UserRegistration