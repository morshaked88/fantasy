import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useData } from '../Store/DataProvider';

import VideoSec from './VideoSec/VideoSec';
import Results from './Results/Results';
import Table from './Table/Table';

const SideDrawer = () => {

    const { close, showRes } = useData();


    return (
        <Box style={{ display: `${close ? 'flex' : 'none'}` }}>
            <VideoSec avatar='/assests/images/gyrose57.jpg' title='gyrose57' subtitle='30m' />
            <Box2 style={{ display: `${showRes ? 'flex' : 'none'}` }}>
                <Results />
                <Table />
            </Box2>
        </Box>
    )
};

export default SideDrawer;

const Box2 = styled.div`
width: 100%;
height: 100%;
flex-direction: column;
`;

const SlideLeft = keyframes`
0%{
    width: 0%;
    height: 100%;
}

100%{
    width: 20%;
    height: 100%;
}
`;

const Box = styled.div`
border: 0.2rem solid black;
animation: ${SlideLeft} 1s ease-in-out forwards;
display: flex;
flex-direction: column;
background-color: #222f3e;
`;