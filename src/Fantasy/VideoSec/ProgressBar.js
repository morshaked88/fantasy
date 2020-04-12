import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const ProgressBar = () => {

    const container = useRef();


    useEffect(() => {
        const progress = Array.from(container.current.childNodes);


        const playNext = (e) => {
            const current = e && e.target;
            let next;

            if (current) {
                const currentIndex = progress.indexOf(current);
                if (currentIndex < progress.length) {
                    next = progress[currentIndex + 1];
                }
                current.classList.remove('active');
                current.classList.add('passed');
            }

            if (!next) {
                progress.map((el) => {
                    el.classList.remove('active');
                    el.classList.remove('passed');
                })
                next = progress[0];
            }
            next.classList.add('active');

        }

        progress.map(el => el.addEventListener("animationend", playNext, false));



        playNext()

    }, [])





    return (
        <Box ref={container}>
            <Progress style={{ animationDuration: '3s' }} ></Progress>
            <Progress style={{ animationDuration: '6s' }} ></Progress>
            <Progress style={{ animationDuration: '4s' }} ></Progress>
            <Progress style={{ animationDuration: '7s' }} ></Progress>
        </Box>
    )
};

export default ProgressBar;

const Loader = keyframes`
0%   { background-position: 100% 0; }
100% { background-position: 0 0; }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px 0;
  cursor: pointer;
  position: absolute;
  top: 1%;
  left: 0;

`;


const Progress = styled.div`
height: 4px;
  flex-grow: 1;
  border-radius: 4px;
  margin: 0 5px;
  display: flex;
  background-image: -webkit-linear-gradient(left, 
    rgba(255,255,255,.5) 0%,
    rgba(255,255,255,.5) 50%,
    rgba(88, 89, 104,.5) 50.001%,
    rgba(88, 89, 104,.5) 100%
  );
  background-repeat: no-repeat;
  background-size: 200%;
  background-color: #666;
  background-position: 100% 50%;
  animation-timing-function: linear;
  animation-delay: .2s;

  &.active{
    animation-name: ${Loader};
  }

  &.passed{
    background-position: 0 0; 
  }
`;
