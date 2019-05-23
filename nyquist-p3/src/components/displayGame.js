import React from 'react'
import LocalGameAPI from './APIs/localAPI'
import { Link } from 'react-router-dom'
import images from './images/imgImport'
import styled from 'styled-components'
import shareTwitterImage from './images/share_twitter.png'
import shareMoreImage from './images/share_more.png'
import {ShareButtonList} from './SocialShareButton'



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
            <ShareButtonList
                addThisPubId="ra-5cc73f9e8eb358a5"
                googleAnalyticsId="UA-763513-3"
                contentTitle="Fake title"
                contentImage="http://placekitten.com/g/300/700"
                contentDescription="Here is an article about science things, and maybe kittens"
            />
            <Link to={game.route}>Back</Link>
        </div>
    )
}

export default Game