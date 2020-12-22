import React, { useState } from 'react';
import { StyledDivRecommendation } from './components/StyledDivRecommendation';


const Recommendation = (props) => {
    const [Index, setIndex] = useState();
    // console.log('process.env.PUBLIC_URL: ', process.env.PUBLIC_URL)
    return (
        <div>
            <StyledDivRecommendation />
        </div>
    );
}


export default Recommendation;