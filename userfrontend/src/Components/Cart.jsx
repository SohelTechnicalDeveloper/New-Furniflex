import React, { Fragment, useContext, useEffect, useState }  from "react";
import './Cart.css'
import axios from "axios";
import Cookies from "universal-cookie";
import { Link, useNavigate } from "react-router-dom";
import { counterContext } from "../Context/Context";
import Quantity from "./Quantity";
import toast, { Toaster } from "react-hot-toast";

function Cart() {

  const value=useContext(counterContext)

  const[cart,setCart] = useState([])
  const cookies  = new Cookies()
const navigate = useNavigate()
const[quantity,setQuantity] = useState(0)


  const cartData = async ()=>{

           const userID = cookies.get('user')
           const response =  await axios.get(`http://localhost:5000/Api/Cart/${userID[0]._id}`)
               
         if(response.status===200)
             {
               
               setCart(response.data.data)
               console.log(response.data.data);
           setQuantity(response.data.data.quantity)
               
               value.setCount(response.data.data)
             }
  }  
  
  useEffect(()=>{
    cartData()
    
  },[])

const removeItem = async (id)=>{

        const response = await axios.delete(`http://localhost:5000/Api/Cart/${id}`)
        if(response.status===200)
        {
           window.confirm('Are you sure want to delete data')
        }
  
      cartData()

}

const addOrder = async ()=>{

    cart.map(async (item)=>{

      if(item.quantity>0)
        {
       const response = await axios.post(`http://localhost:5000/Api/Order`,{
          productId:item.productId,
          userId:item.userId,
          quantity:item.quantity,
          totalPrice:item.totalPrice
           }
        )
          if(response.status===201)
            { 
              const response = await axios.delete(`http://localhost:5000/Api/Cart/${item._id}`)
              toast.success('Order Success')
            }
      }
      else{
        toast.error('Please Check Your Quantity')
      }
    })  

}

  return(
    <Fragment>
<div className="cart_section ">
  <div className="container-fluid ">
    <div className="row">
      <div className="cart_title">Shopping Cart  <br />
        {/* <small> Total Selected Item : {cart.length} </small> */}
        </div>
        {
          cart.length===0?
          <p className="mt-3 fs-4 text-danger">Your Cart is empty {cart.length}</p>
          :" "
        }
      {
        
          cart.map((item)=>{
 
             return <div className="col-lg-10 ">
        <div className="cart_container">
          <div className="cart_items">
            <ul className="cart_list">
              <li className="cart_item clearfix">
                <div className="cart_item_image">
                     <img style={{height:"15vh"}} src={`http://localhost:5000/${item.productsData[0].productImage}`} alt />
                </div>
                <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                  <div className="cart_item_name cart_info_col">
                    <div className="cart_item_title">Name</div>
                    <div className="cart_item_text">{item.productsData[0].productName.substring(1,50)}</div>
                  </div>
                  <div className="cart_item_color cart_info_col">
                    <div className="cart_item_title">Color</div>
                    <div className="cart_item_text"><span style={{backgroundColor: '#999999'}} />Silver</div>
                  </div>
                  
                          
                      <Quantity id={item._id} showCart={cartData}/>
                  <div className="cart_item_price cart_info_col">
                    <div className="cart_item_title">Quantity</div>
                    <div className="cart_item_text">{item.quantity}</div>
                  </div>  
                  <div className="cart_item_price cart_info_col">
                    <div className="cart_item_title">Price</div>
                    <div className="cart_item_text"> ${item.productsData[0].productPrice}</div>
                  </div>  
                  <div className="cart_item_total cart_info_col">
                    <div className="cart_item_title">Total Price </div>
                    <div className="cart_item_text">${item.totalPrice}</div>
                  </div>
                </div>
              </li>

             </ul>
          </div>

          <div className="cart_buttons"> 
            <button type="button" className="button cart_button_checkout" onClick={()=>{removeItem(item._id)}}>Remove Item</button> &nbsp;&nbsp;&nbsp;
              <button type="button" className="button cart_button_clear"  onClick={()=>navigate('/')}>Continue Shopping</button>
           <Link><button type="button" className="button cart_button_checkout" onClick={()=>addOrder()}>Buy Now</button></Link>
           </div>
        </div>
        <br />
      </div>

          })
          
        }
         <div className="order_total w-25" >
            <div className="order_total_content text-md-right">
                <div className="order_total_title">Order Total:</div>
                <div className="order_total_amount">₹ 22000</div>
                <div className="cart_buttons">
                <Link><button type="button" className="button cart_button_checkout mx-5">Place Order</button></Link>

                </div>
            </div>
          </div>

    </div>
  </div>
        <Toaster></Toaster>
</div>

        

    </Fragment>
  )
  
}

export default Cart