import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';
import allgamespic from '../images/allgames.jpg'
import ps4pic from '../images/ps4.jpg'
import switchpic from '../images/switch.jpg'
import xboxpic from '../images/xbox.jpg'



const Home = () => (
    <div class="btn-grp">
        <div class="zoom">
            <Link to='/games' id="Link"><img src={allgamespic} alt="All Games" width="200px" height="200px"></img></Link>
        </div>
        <div class="zoom">
            <Link to='/PS4-Games' id ="Link"><img src={ps4pic} alt="PS4 Games" width="200px" height="200px"/></Link>
        </div>
        <div class="zoom">
        <Link to='/Xbox-Games' id="Link"><img src={xboxpic} alt="Xbox Games" width="200px" height="200px"/></Link>
        </div>
        <div class="zoom">
            <Link to='/Switch-Games' id="Link"><img src={switchpic} alt="Switch Games" width="200px" height="200px"/></Link>
        </div>    
    </div>

)

export default Home