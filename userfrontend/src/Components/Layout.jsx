import React, { Fragment } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const  Layout= ({children})=> {
  return (
    <Fragment>
        <Navbar/>
        <div className="row">
           
            <div className="col-md-12" style={{marginTop:"5rem"}}>
              <main className='' >{children}</main>
            </div>
        </div>
      
    </Fragment>
  )
}

export default Layout
