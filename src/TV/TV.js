import React from 'react';
import styled from 'styled-components';

import Channel from './Channel/Channel';
import BottomDrawer from './BottomDrawer/BottomDrawer';
import StoriesBar from '../Fantasy/StoriesBar';

const TV = () => {


    return (
        <Box>
            <Channel />
            <BottomDrawer />
            <StoriesBar />
        </Box>
    )
};

export default TV;


const Box = styled.div`
width: 100%;
height: 100%;
position: relative;
`;