import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import ProgressBar from './ProgressBar';
import { useData } from '../../Store/DataProvider';

const VideoSec = ({ avatar, title, subtitle }) => {

    const { showRes, set_showRes } = useData();
    const Stories = useRef();

    const videoSource = ['/assests/video/1.mp4', '/assests/video/2.mp4', '/assests/video/3.mp4', '/assests/video/4.mp4'];

    useEffect(() => {
        let i = 0;

        Stories.current.setAttribute("src", videoSource[0]);

        const videoPlay = (videoNum) => {
            Stories.current.setAttribute("src", videoSource[videoNum]);
            Stories.current.load();
            Stories.current.play();
        }

        const myHandler = () => {
            i++;

            if (i === 0) {
                videoPlay(0);
                i++;
            }
            else {
                videoPlay(i);
            }

        }

        Stories.current.addEventListener('ended', myHandler, false);


    }, [Stories, videoSource])


    return (
        <Box style={{ height: `${!showRes ? '60rem' : '35rem'}`, margin: `${!showRes ? '50% 0' : '0'}` }}>
            <Video autoPlay ref={Stories}>
            </Video>
            <ProgressBar />
            <UserBox>
                <Avatar alt='avatar' src={avatar} />
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
            </UserBox>
            <Sticker1 src='/assests/images/like.png' />
            <Sticker2 src='/assests/images/location.png' />
            <Button onClick={() => set_showRes(true)} style={{ display: `${showRes ? 'none' : 'block'}` }}>Show results</Button>
        </Box>
    )
};

export default VideoSec;

const Button = styled.button`
margin-top: 6rem;
font-size: 2rem;
text-transform: uppercase;
padding: 3.5%;
background-color: #4b7bec;
border: none;
border-radius: 0.8rem;
font-weight: bold;
font-family: 'Lato', sans-serif;
color: #eee;
`;

const Title = styled.h4`
margin-left: 1rem;
font-size: 1.8rem;
`;

const Sticker1 = styled.img`
position: absolute;
top: 90%;
left: 50%;
transform: translate(-50%, -50%);
height: 8rem;
`;

const Sticker2 = styled.img`
position: absolute;
height: 4rem;
left: 63%;
top: 18%;
transform: rotateZ(30deg);
`;

const Avatar = styled.img`
height: 50px;
border-radius: 50%;
border: 2px solid #eee;
`;

const SubTitle = styled.p`
font-size: 1.5rem;
color: lightgray;
margin-left: 1rem;
`;

const UserBox = styled.div`
position: absolute;
width: 100%;
display: flex;
top: 8%;
left: 3%;
align-items: center;
color: #eee;
`;

const Video = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-bottom: 0.2rem solid black;
`;

const Box = styled.div`
width: 100%;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
`;