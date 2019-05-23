import React from 'react'
import LocalGameAPI from './APIs/localAPI'
import { Link } from 'react-router-dom'
import FortnitePic from './images/fortnite.jpg'
import images from './images/imgImport'
import styled from 'styled-components'

const StyledImg = styled.img `
    max-width: 500px;
`

const Game = (props) => {
    const game = LocalGameAPI.get(
        parseInt(props.match.params.id, 10)
    )
    

    if (!game) {
        return <div>Sorry, but the game was not found</div>
    }
    return (
        <div className="gameLayout">
            <h1>{game.title} ({game.console})</h1>
            <StyledImg src={images[game.id - 1]} alt={game.title} />
            <h2>Price: {game.price} | Rating: {game.rating}</h2> 
            <Link to={game.route}>Back</Link>
        </div>
    )
}

export default Game