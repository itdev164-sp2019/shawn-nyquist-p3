import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import styled from 'styled-components'

const StyledHeader = styled.header`
    text-align: center;
    width: 100%;
    font-size: 80px;
    justify-content: center;
    color: rgb(70, 70, 70);
`

const Header = () => (
    <StyledHeader>
    Video Game Helper
        <div className="Header-Links">
            <nav>  
                <center><Link to='/'>Home</Link></center>             
            </nav>
        </div>
    </StyledHeader>
)

export default Header;