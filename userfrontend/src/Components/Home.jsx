import React, { Fragment, useEffect, useState } from 'react'
import  './Home.css'
import { FaStar } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Category from './Category'
import { Link } from 'react-router-dom'
import CategoryCarousel from './CategoryCarousel';
import Footer from './Footer';

function Products() {
    const[products,setProducts] = useState([])

    useEffect(()=>{

        getProduct()
   
    },[])
   
 async function getProduct() 
 {
    let result = await fetch('http://localhost:5000/Api/Product',{
        method:'get', 
        headers:{'Content-Type':'application/json'},
    })
    result = await result.json()
    setProducts(result.data)
 }
 
  return (

    <Fragment>

  <CategoryCarousel/>
    <section>
       <div className='row'>
          {
              products.map((item)=>{

return  <div className=" col-lg-3  mb-4 mb-md-0 mt-5">
<Link style={{textDecoration:'none'}} to={'/productDetails/'+item._id} >
  <div className="card">
    <div className="d-flex justify-content-between p-4 "  style={{backgroundColor:'#264D51'}}>
      <p className="lead mb-0 fw-medium text-white" >Today's Combo Offer</p>
      
    </div>
    <img  src={`http://localhost:5000/${item.productImage}`} style={{height:'14rem'}} className="card-img-top" alt="Laptop" />
    <div className="card-body">
      <div className="d-flex justify-content-between">
        <p className="small text-danger"><s>{item.productPrice}</s></p>
      </div>
      <div className="d-flex justify-content-between mb-3">
        <h5 className="mb-0 " style={{fontSize:"18px"}}>{item.productName.substring(1,50)}</h5>
        <h5 className="text-dark mb-0">${item.productPrice}</h5>
      </div>
      <div className="d-flex justify-content-between mb-2">

        <p className="text-muted mb-0">Available: <span className="fw-bold">7</span></p>
        <div className="ms-auto fs-5  text-warning">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
        </div> <br /> <br />
      </div>
      <div className="d-flex justify-content-between mb-2">
      <button id="" className="btn btn-primary">ADD CART</button>
      <button id="" className="btn btn-primary">See More</button>

      </div>

    </div>  
  </div>
  </Link>
</div>
})
}
</div>
  </section>

  <Category/>
  
  <div className="row mt-3 "> 
{
  products.map((item)=>{

return  <div className='col-lg-3 p-3'>
  <Link style={{textDecoration:'none'}} to={'/productDetails/'+item._id} >

  <div className="card ">
  <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
    <img alt='' src={`http://localhost:5000/${item.productImage}`} style={{width:'100vw',height:"30vh"}}  className="img-fluid " />
    <a href="#!">
      <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
    </a>
  </div>
  <div className="card-body">
    <h5 className="card-title">{item.productName.substring(1,50)}</h5>
    <FontAwesomeIcon icon="fa-regular fa-star " className='text-warning' />
    <div className="d-flex justify-content-between mb-2">

<p className="text-muted mb-0">Available: <span className="fw-bold">7</span></p>
<div className="ms-auto rating-star  text-warning">
<FaStar className='text-warning fs-3'/>
<FaStar className='text-warning fs-3'/>
<FaStar className='text-warning fs-3'/>

</div> <br /> <br />
</div>

    <div className="d-flex justify-content-between mb-2">
      <button id="" className="btn btn-primary">ADD CART</button>
      <button id="" className="btn btn-primary">See More</button>

      </div>
  </div>
</div>
</Link>
</div>
  })
  
}
 <Footer/>
  </div>
    </Fragment>
  )
}

export default Products
