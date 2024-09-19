import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import Cookies from 'universal-cookie'

function Quantity(props) {
    const[quantity,setQuantity] = useState(0)
    const cookies  = new Cookies()
    
  const cartData = async ()=>{
    const userID =cookies.get('user')
    const response =  await axios.get(`http://localhost:5000/Api/Cart/getCart/${props.id}`)
    
    console.log(response.data.data.quantity);
  if(response.status===200)
      {       
        
          setQuantity(response.data.data.quantity) 
      }
}  

useEffect(()=>{
       
     cartData()

},[])

    
const updateCart = async (quantity)=>{
  
  console.log(props.id);
  console.log(quantity);
  if(quantity>-1)
  {
    const response = await axios.patch(`http://localhost:5000/Api/Cart/${props.id}`,{
      quantity:quantity
    })
    
     if(response.status===200)
     {  
        cartData()
        props.showCart()  
        
     }
  }

 
 }
 
  return (
    <Fragment>
         <div className="cart_item_quantity cart_info_col">
                    <div className="cart_item_title">Quantity</div>
                    <div className="cart_item_text d-flex fs-4">
                        <button className="btn bg-danger " onClick={()=>{updateCart(quantity-1)}}>-</button>
                           <span className='text-danger mx-1'>{quantity}</span>
                         <button className="btn bg-danger"  onClick={()=>{updateCart(quantity+1)}}>+</button>
                    </div>
                  </div>
      
    </Fragment>
  )
}

export default Quantity
