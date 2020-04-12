import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const BottomDrawer = () => {
    const [time, set_time] = useState(false);

    //open drawer
    setTimeout(() => {
        set_time(true);
    }, 10000);


    return (
        <Box style={{ display: `${time ? 'flex' : 'none'}` }}>
            <Img src='/assests/images/logo.png' />
            <Content>UCL: Barcelona vs PSG</Content>
        </Box>
    )
};

export default BottomDrawer;

const Content = styled.h2`
color: white;
font-size: 4rem;
padding: 0;
margin: 0;
margin-left: 30%;
`;

const Img = styled.img`
height: 25%;
margin-left: 5rem;
`;


const SlideUp = keyframes`
0%{
    transform: translateY(100%);
}
25%{
    transform: translateY(-14.5rem);
}
35%{
    transform: translateY(-14.5rem);
}
50%{
    transform: translateY(-14.5rem);
}
65. b/%{
    transform: translateY(-14.5rem);
}
75%{
    transform: translateY(-14.5rem);
}
100%{
    transform: translateY(100%);
}
`;


const Box = styled.div`
display: flex;
position: absolute;
align-items: center;
width: 100%;
height: 15%;
background-image: linear-gradient(90deg, #000, #1e90ff);
border: 0.1rem solid #1e90ff;
animation: ${SlideUp} 6s linear forwards;
`;