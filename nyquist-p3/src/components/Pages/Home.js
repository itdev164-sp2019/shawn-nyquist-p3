import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';
import allgamespic from '../images/allgames.jpg'
import ps4pic from '../images/ps4.jpg'
import switchpic from '../images/switch.jpg'
import xboxpic from '../images/xbox.jpg'
import styled from 'styled-components'

const StyledImg = styled.img `
    box-shadow: 10px 10px 20px black;
`


const Home = () => (
    <div class="btn-grp">
        <div class="zoom">
            <Link to='/games' id="Link"><StyledImg src={allgamespic} alt="All Games" class="image" width="200px" height="200px"/></Link>
        </div>
        <div class="zoom">
            <Link to='/PS4-Games' id ="Link"><StyledImg src={ps4pic} alt="PS4 Games" class="image" width="200px" height="200px"/></Link>
        </div>
        <div class="zoom">
        <Link to='/Xbox-Games' id="Link"><StyledImg src={xboxpic} alt="Xbox Games" class="image" width="200px" height="200px"/></Link>
        </div>
        <div class="zoom">
            <Link to='/Switch-Games' id="Link"><StyledImg src={switchpic} alt="Switch Games" class="image" width="200px" height="200px"/></Link>
        </div>    
    </div>

)

export default Home