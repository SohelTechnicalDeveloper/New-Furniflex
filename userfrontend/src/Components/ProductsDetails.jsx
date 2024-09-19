import React, { Fragment, useContext, useEffect, useState } from "react";
import Layout from "./Layout";
import './ProductsDetails.css'
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import toast, { Toaster } from "react-hot-toast";
import { counterContext } from "../Context/Context";
import { GetColorName } from 'hex-color-to-color-name';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";


function ProductsDetails(){
    
    const{id} = useParams()

   const[products,setProducts] = useState([])
   const [cart,setCart] = useState([])
   const[quantity,setQuantity] = useState(0)
   const[count,setCount] = useState(0)
   const[categoryData,setCategoryData] = useState([])
   const cookies = new Cookies()
   const navigate = useNavigate()

   const value = useContext(counterContext)

//    console.log(products.result);
//    console.log(products.categoryData);
 const getProduct = async ()=>{
 
     const response  = await axios.get(`http://localhost:5000/Api/Product/${id}`)
     
     if(response.status===200)
     {
         setProducts(response.data.data.result)
         console.log(response.data.data);
         
         setCategoryData(response.data.data.categoryData)
        
     }  
     else
     {
        console.log('Product data not get');
     }
}

const getCart = async ()=>{

    const response = await axios.get(`http://localhost:5000/Api/Cart`)
    
    if(response.status===200)
    {
  
        value.setCount(response.data.data)
        setCart(response.data.data)        
    }
}

const addCart =  async ()=>{

   const userID = cookies.get('user')

    const response  = await axios.post(`http://localhost:5000/Api/Cart`,{
          userId :userID[0]._id,
          productId:id,
          quantity:quantity,
    })
 
    if(response.status===201)
    {
        toast.success("Product Add Success")

        setCount(count+1)

      setTimeout(()=>{

          navigate('/cart')
      },2000)   
    }
}

useEffect(()=>{
    getCart()
    getProduct()
},[count,categoryData])


    return(
        
        <Fragment>
            <Layout>
            <div className="row border">
               
                 <div className="col-md-6" id="productImageDetails">
                     <img src={'http://localhost:5000/'+products.productImage} alt=""  className="img-fluid p-3"  style={{width:'100%', height:"60vh",borderRadius:"2rem"}}/> <br />
                     <div className="d-flex cart-btn" > 
                       
                           <button className="btn button-1"  onClick={()=>addCart()}> <FaShoppingCart className="fs-2" /> Add To Cart</button>
                
                           <Toaster></Toaster>

                           <button className="btn button-2 "> <MdElectricBolt className="fs-2"/> Buy Now</button>
                     </div>
               
                </div>
                <div className="col-md-6">
                    <h1 className="heading-productName">
                        <span className="span-productName mt-5">{products.productName}</span>
                    </h1>
                    <hr />
                    <div className="rating-reviews">
                         <span>{products.productRating}  Rating &nbsp;</span>
                         <span>&&nbsp;</span>
                         <span>{products.productReviews}  Reviews </span>
                    </div> 

                    <div className="product-price">
                        <span>Special Price</span>
                    </div>

                    <div className="product-totalPrice">
                        <span className="fs-3">${products.productPrice} &nbsp;</span>
                        <span>&&nbsp;</span>
                        <span className="text-success">{products.productOffers} % Off</span>

                    </div>

                    <hr /><hr />
                    <div>
                        <span className="text-black fs-4 fw-medium">  Description :</span>  
                        <span className="rating-reviews"> &nbsp;{products.description}</span>
                    </div>
                    <div>
                    <span className="text-black fs-4 fw-medium">  Color :</span>  
                    
                        <span className="rating-reviews"> &nbsp;{products.productColor}</span>
                    </div>
                    
                  

                </div>

            </div>
            
  <div className="row mt-3 "> 
{
  categoryData.map((item)=>{

return  <div className='col-lg-3 p-3'>
  <Link style={{textDecoration:'none'}} to={'/productDetails/'+item._id} >

  <div className="card ">
  <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
    <img alt="" src={`http://localhost:5000/${item.productImage}`} style={{width:'100vw',height:"30vh"}}  className="img-fluid " />
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
            </Layout>

        </Fragment>


    )
}

export default ProductsDetails