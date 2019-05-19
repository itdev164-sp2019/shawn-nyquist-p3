import React from 'react'
import LocalGameAPI from '../APIs/localAPI'
import { Link } from 'react-router-dom'

function filter(data) {
    return data.console === "PS4";

}

const PS4GameList = () => (
    <div>
        <h1>Playstation 4 Games</h1>
        
        <ul>
            {LocalGameAPI.all().filter(filter).map(game => (
                <li key={game.console}>
                    <Link to={`/games/${game.id}`}>{game.title}  | {game.console}</Link>
                </li>
            ))}
        </ul>
    </div>
)

export default PS4GameList