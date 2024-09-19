import React, { Fragment, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

function UserLogin() {

    const[userName,setUserName]= useState('')
    const[userPassword,setUserPassword]= useState('')
    const[error,setError] = useState(false)
    const navigate = useNavigate()
    const cookies = new Cookies()

const loginUser = async (e)=>{

    e.preventDefault()
try {

  let response = await axios.post(`http://localhost:5000/Api/user/login`,{
        email:userName,
       password:userPassword
  })

  console.log(response.data.data);
  if(response.status===200)
  {
    toast.success('Login Success')
    console.log(response.data.data);
    cookies.set('user',response.data.data)
    
  setTimeout(()=>{
       navigate('/')
     },1000)

  } 
   } 

catch (error) 
  {
   
     toast.error(error.response.data.msg)
   }
    

}
 
    return(
        <Fragment>             
<section className="h-100  mt-5 gradient-form" style={{backgroundColor: '#eee'}}>
  <div className="container py-5 h-75">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">
                <div className="text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" style={{width: 185}} alt="logo" />
                  <h4 className="mt-1 mb-5 pb-1"> We are The FurniFlex Team</h4>
                </div>
                <form  onSubmit={loginUser}>
                  <p>Please login to your account</p>
                  <div data-mdb-input-init className="form-outline mb-4 ">
                    <input type="email" id="form2Example11" className="form-control" onChange={(e)=>{setUserName(e.target.value)}} placeholder="Phone number or email address" />
                     <label className="form-label" htmlFor="form2Example11" style={{position:'absolute', color:'red'}}>{error&&setUserName===""?'Please Enter your full userName':""}</label>
                  </div>
                  <div data-mdb-input-init className="form-outline mb-3">
                    <input type="password" id="form2Example22" className="form-control" onChange={(e)=>{setUserPassword(e.target.value)}}  placeholder='Password'/>
                    <label className="form-label" htmlFor="form2Example22" style={{position:'absolute', color:'red'}}>{error&&setUserPassword===""?'Please Enter your Password':""}</label>
                  </div>
                  <div className="text-center pt-1 mb-5 pb-1">
               <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 w-50" type="submit" >Login</button> <Toaster/> <br />
                    <Toaster></Toaster>
                    <a className="text-muted" href="#!">Forgot password?</a>
                  </div>
                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                   <Link to={'/userRegistration'}> <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-danger w-100">Create new</button></Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">We are more than just a company</h4>
                <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </Fragment>
    )
    
}

export default UserLogin