
import React, { Fragment  } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Cookies from 'universal-cookie'
import Count from './Count'
function Navbar() {

  const cookies = new Cookies()
  

  return (

    <Fragment>

 <nav  className="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor: '#264D51',border:"1px solid black"}}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        
      <Link className="navbar-brand px-5 fs-3 text-white" href="#" ><span className='fs-1 text-warning' >F-</span>FurniFlex</Link>

      <ul className="navbar-nav me-auto mb-2 px-5 mb-lg-0  navbar-link">
        <li className="nav-item px-2 fs-5 ">
          <Link className="nav-link active fw-2 "  id='navbar-link' aria-current="page" href="#" to={'/'}>Home</Link>
        </li>
        
        { cookies.get('admin')!==undefined?
          <li className="nav-item px-2 fs-5">
          <Link className="nav-link active" id='navbar-link' aria-current="page" href="#" to={'/products'}>Products</Link>
        </li> : ""
        }
         {/* <li className="nav-item px-2 fs-5">
          <Link className="nav-link active" id='navbar-link' aria-current="page" href="#" to={'/categories'}>Categories</Link>
        </li> */}
        <li className="nav-item px-2 fs-5">
          <Link className="nav-link active" id='navbar-link' aria-current="page" href="#" to={'/about'}>About </Link>
        </li>
        <li className="nav-item px-2 fs-5">
          <Link className="nav-link active" id='navbar-link' aria-current="page" href="#" to={'/contact'} >Contact </Link>
        </li>
      {/* { cookies.get('user')!==undefined?
        <li className="nav-item px-2 fs-5">
          <Link className="nav-link active" id='navbar-link' aria-current="page" href="#" to={'/cart'}>Blog</Link>
        </li> :""  } */}
        
        { cookies.get('user')!==undefined?
        <li className="nav-item px-2 fs-5"> 
          <Link className="nav-link active" id='navbar-link' aria-current="page" href="#" to={'/orders'}>Orders</Link>
        </li>  :""
         }

        {/* { cookies.get('admin')!==undefined ?  
         <li className="nav-item px-2 fs-5">
          <Link className="nav-link active" id='navbar-link' aria-current="page" href="#" to={'/login'} onClick={()=>cookies.remove('admin')}>Logout</Link>
        </li> : <li className="nav-item px-2 fs-5"><Link className='nav-link active' aria-current="page" href="#" id='navbar-link' to={'/login'} >Login</Link></li>   } */}
      </ul>
      {/* <InputRightElement>
              <Button  colorScheme="teal" variant="solid">
                <Icon as={AiOutlineSearch} />
              </Button>
            </InputRightElement>
      <Button as={Link} to="/cart" variant="link" color="white" ml={4} fontFamily="sans-serif">
            <Icon as={AiOutlineShoppingCart} boxSize={8} />
            
          </Button> */
          }
            <form className="d-flex side-navbar">
           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
           <button className="btn btn-outline-success" type="submit">Search</button>

              <Count/>
            {
               cookies.get('user')!==undefined ?
                 <Link to={'/userProfile'}>  
                    <i className="fa-regular fa-user text-white mx-3  fs-4"></i> 
                 </Link>
            : <Link to={'/userLogin'}>  
                    <i className="fa-regular fa-user text-white mx-3  fs-4"></i> 
                 </Link>
            }
            </form>
    </div>
  </div>
</nav>


       
      
    </Fragment>
  )
}

export default Navbar
