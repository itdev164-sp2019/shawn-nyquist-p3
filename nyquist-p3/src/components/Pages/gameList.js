import React from 'react'
import LocalGameAPI from '../APIs/localAPI'
import { Link } from 'react-router-dom'

const FullGameList = () => (
    <div>
        <h1>Full Game List</h1>
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