import React, { useState } from 'react';
import { StyledDivRecommendation } from './components/Recommendation/StyledDivRecommendation';


const Recommendation = (props) => {
    const [index, setIndex] = useState();
    // console.log('process.env.PUBLIC_URL: ', process.env.PUBLIC_URL)
    return (
        <div>
            <StyledDivRecommendation index={index} setIndex={setIndex} />
        </div>
    );
}


export default Recommendation;