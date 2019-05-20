import React from 'react'
import LocalGameAPI from '../APIs/localAPI'
import { Link } from 'react-router-dom'
import '../../App.css';


const FullGameList = () => (
    <div class="List">
        <h1>Full Game List</h1>
        <Link to='/'>Back</Link>
        <ul>
            {LocalGameAPI.all().map(game => (
                <li key={game.id}>
                    <Link to={`/games/${game.id}`}>{game.title}  | {game.console}</Link>
                </li>
            ))}
        </ul>
    </div>
)

export default FullGameList