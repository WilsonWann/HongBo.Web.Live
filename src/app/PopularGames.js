import React from 'react'
import { StyledDivPopularGames } from './components/PopularGames/StyledDivPopularGames';

function PopularGames(props) {

    return (
        <div>
            <StyledDivPopularGames topGameList={props.topGameList} />
        </div>
    )
}

export default PopularGames
