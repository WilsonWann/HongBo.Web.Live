import React from 'react'
import { DivPopularGames } from './components/PopularGames/DivPopularGames';

function PopularGames(props) {

    return (
        <div>
            <DivPopularGames topGameList={props.topGameList} />
        </div>
    )
}

export default PopularGames
