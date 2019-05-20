import React from 'react'
import LocalGameAPI from '../APIs/localAPI'
import { Link } from 'react-router-dom'
import '../../App.css';

function filter(data) {
    return data.console === "Nintendo Switch";

}

const SwitchGameList = () => (
    <div class="List">
        <h1>Nintendo Switch Games</h1>
        <Link to='/'>Back</Link>
        
        <ul>
            {LocalGameAPI.all().filter(filter).map(game => (
                <li key={game.console}>
                    <Link to={`/games/${game.id}`}>{game.title}  | {game.console}</Link>
                </li>
            ))}
        </ul>
    </div>
)

export default SwitchGameList