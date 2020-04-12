import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';


const Channel = () => {


    //reference to video tag
    const myVideos = useRef();

    //videos array
    const videoSource = ['/assests/video/Rick&Morty.mp4', '/assests/video/trump.mp4', '/assests/video/football.mp4']

    useEffect(() => {

        //video array counter
        let i = 0;

        //push video url to video tag
        myVideos.current.setAttribute("src", videoSource[0]);

        //load and play video
        const videoPlay = (videoNum) => {
            myVideos.current.setAttribute("src", videoSource[videoNum]);
            myVideos.current.load();
            myVideos.current.play();
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

        myVideos.current.addEventListener('ended', myHandler, false);

    }, [videoSource]);

    return (
        <Video autoPlay ref={myVideos}>

        </Video>
    )
};

export default Channel;

const Video = styled.video`
width: 100%;
height: 100%;
object-fit: cover;
`;