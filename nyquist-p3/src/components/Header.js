import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => (
    <header>
        <div className="Header-Links">
        <nav>  
            <Link to='/'>Home</Link>
            
        </nav>
        </div>
    </header>
)

export default Header;