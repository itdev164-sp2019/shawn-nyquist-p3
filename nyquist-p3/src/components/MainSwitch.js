import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import PS4GameList from './Pages/PS4GameList'
import XBoxGameList from './Pages/XBoxGameList'
import SwitchGameList from './Pages/SwitchGameList'
import GameSwitch from './Game'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/games' component={GameSwitch}/>
            <Route path='/PS4-Games'component={PS4GameList}/>
            <Route path='/Xbox-Games'component={XBoxGameList}/>
            <Route path='/Switch-Games'component={SwitchGameList}/>
        </Switch>
    </main>
)

export default Main