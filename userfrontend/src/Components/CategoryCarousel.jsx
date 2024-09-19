import React, { Fragment, useEffect, useState } from 'react'
import './CategoryCarousel.css'


function CategoryCarousel() {
    
const [category,setCategory]=useState([])

async function getAllCategory()
 {
    const result=await fetch('http://localhost:5000/Api/Category');

    const jsonData=await result.json();
    // console.log(jsonData);

    if(jsonData)
    {
       setCategory(jsonData.data)
    }
 }  
 useEffect(()=>{
     getAllCategory()
 },[])
  return (
    <Fragment>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
      {
        category.map((item,index)=>{

          return <div className="carousel-item active">
               <img src={`http://localhost:5000/${item.productImage}`}className="d-block" alt="..." />
    </div>
  })  }
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon arrow-icon " aria-hidden="true" />
    {/* <span class="visually-hidden">Previous</span> */}
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon arrow-icon " aria-hidden="true" />
    {/* <span class="visually-hidden">Next</span> */}
  </button>
 
        </div>
    </Fragment>
  )
}

export default CategoryCarousel
