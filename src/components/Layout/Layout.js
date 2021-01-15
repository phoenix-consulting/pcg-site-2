import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = (props) => {
    // Layout takes in a prop that determines whether or not the navBar is light
    return (
        <div>
            <NavBar light={props.light}/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout;