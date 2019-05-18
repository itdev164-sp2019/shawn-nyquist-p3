import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullGameList from './Pages/gameList'
import Game from './displayGame'

const GameSwitch = () => (
    <Switch>
        <Route exact path='/games' component={FullGameList}/>
        <Route path='/games/:id' component={Game}/>
    </Switch>
)

export default GameSwitch