import React from 'react'
import LocalGameAPI from '../APIs/localAPI'
import { Link } from 'react-router-dom'

function filter(data) {
    return data.console === "Xbox One";

}

const XboxGameList = () => (
    <div>
        <h1>Xbox One Games</h1>
        
        <ul>
            {LocalGameAPI.all().filter(filter).map(game => (
                <li key={game.console}>
                    <Link to={`/games/${game.id}`}>{game.title}  | {game.console}</Link>
                </li>
            ))}
        </ul>
    </div>
)

export default XboxGameList