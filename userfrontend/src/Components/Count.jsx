import React, { Fragment, useContext }  from "react";
import { Link } from "react-router-dom";
import { counterContext } from "../Context/Context";

function Count(){

    const value = useContext(counterContext)
   
    return(
           <Fragment>
       <div className='cart-item'>  
              <Link to={'/cart'}>   <i className="fa-solid fa-cart-shopping  text-white mx-3  fs-4"></i></Link>
                   <div className='cart-count'>{value.count.length}</div>

               </div>

           </Fragment>
    )
}

export default Count
