import React, { useState } from 'react'
import { StyledDivAllLiveChannels } from './components/StyledDivAllLiveChannels';

const AllLiveChannels = (props) => {
    const [Index, setIndex] = useState();
    return (
        <div>
            <StyledDivAllLiveChannels />
        </div>
    )
}

export default AllLiveChannels
