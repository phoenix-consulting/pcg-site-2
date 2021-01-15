import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;