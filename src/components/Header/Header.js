import React from 'react'
import './Header.css'
import Navigation from '../Navbar/Navbar'

function Header() {
    return (
        <div className="header">
                <a href="/">This is my travel-destination website</a>
                <Navigation />
        </div>
    )
}


export default Header