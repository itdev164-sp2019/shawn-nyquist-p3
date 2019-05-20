import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';


const Header = () => (
    <header>
    Video Game Helper
        <div className="Header-Links">
            <nav>  
                <center><Link to='/'>Home</Link></center>             
            </nav>
        </div>
    </header>
)

export default Header;