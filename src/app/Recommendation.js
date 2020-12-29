import React, { useState } from 'react';
import { StyledDivRecommendation } from './components/Recommendation/StyledDivRecommendation';


const Recommendation = (props) => {
    const [index, setIndex] = useState();
    return (
        <div>
            <StyledDivRecommendation index={index} setIndex={setIndex} />
        </div>
    );
}


export default Recommendation;