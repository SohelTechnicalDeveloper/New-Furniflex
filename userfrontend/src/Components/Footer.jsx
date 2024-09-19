import React, { Fragment } from 'react'
import './Footer.css'
import logoImage from '../image/final-2024logo.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <Fragment>
      <footer>

        
           <div className="footer">
                <div className="logo">
                    <img src={logoImage} alt="" style={{width:"20%",height:"10vh"}} />
                </div>

                <div className="footer-bar">
                    <ul>

                        <li><Link>FurniFlex</Link></li>
                        <li><Link>About us</Link></li>
                        <li><Link>Shop</Link></li>
                        <li><Link>My Account</Link></li>
                        <li><Link>CheckOut</Link></li>
                        <li><Link>Cart</Link></li>
                    </ul>
                </div>

                <div className="footer-icon">
                    <ul>
                        <li className='instagram'><Link><i className="fa-brands fa-instagram"></i></Link></li>
                        <li className='facebook'><Link><i className="fa-brands fa-facebook"></i></Link></li>
                        <li className='linkedin'><Link><i className="fa-brands fa-linkedin"></i></Link></li>
                        <li className='whatsapp'><Link><i className="fa-brands fa-whatsapp"></i></Link></li>
                        <li className='pinterest'><Link><i className="fa-brands fa-pinterest"></i></Link></li>
                    </ul>
                </div>
                <div className="footer-content">
                      <p style={{textAlign:"center"}}>All Rights preserved to furniflex.co 2024</p>
                     <p style={{textAlign:"center"}}>Powered by: <Link>The Khan</Link></p>
                </div>
           </div>
      </footer>
    </Fragment>
  )
}

export default Footer
