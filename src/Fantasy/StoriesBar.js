import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import Stories from './Stories';

const Fantasy = () => {


    return (
        <Box>
            <Stories avatar='/assests/images/eitam1000.jpg' time={35000} />
            <Stories avatar='/assests/images/gyrose57.jpg' time={38000} />
            <Stories avatar='/assests/images/morshaked88.jpg' time={41500} />
            <Stories avatar='/assests/images/yakirhs.jpg' time={42600} />
        </Box>
    )
};

export default Fantasy;

const SlideLeft = keyframes`
0%{
transform: translateX(500px)
}

100%{
transform: translateX(-500px);
}
`;


const Box = styled.div`
position: absolute;
height: 10%;
width: 25%;
top: 2rem;
right: -50rem;
/* right: 5px; */
animation: ${SlideLeft} 1.8s linear forwards;
animation-delay: 31s;
display: flex;
justify-content: space-between;
padding: 0 1%;
align-items: center;
`;