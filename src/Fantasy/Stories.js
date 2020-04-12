import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useData } from '../Store/DataProvider';

const Stories = ({ avatar, time }) => {


  const { close, set_close } = useData();
  //show avatar after video loading
  const [show, set_show] = useState(false);


  setTimeout(() => {
    set_show(true);
  }, time)

  return (
    <Box onClick={() => set_close(true)} style={{ display: `${close ? 'none' : 'block'}` }}>
      <Img src={avatar} alt='avatar' style={{ display: `${show ? 'block' : 'none'}` }} />
      <SVG viewBox="0 0 100 100">
        <Circle cx='50' cy='50' r='40' />
      </SVG>
    </Box>
  )
};

export default Stories;

const Fade = keyframes`
0%{
    opacity: 0;
}

100%{
    opacity: 1;
}
`;

const Loading = keyframes`
  100% {
    stroke:#cd476b;
    stroke-dasharray:10;
    transform:rotate(200deg);
  }
`;

const Circle = styled.circle`

`;

const Img = styled.img`
  width:80px;
  border-radius:50%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  animation: ${Fade} 1s linear;
`;

const SVG = styled.svg`
  fill:none;
  stroke:#8a3ab8;
  stroke-width:4px;
  stroke-dasharray:1;
  stroke-dashoffset:0;
  stroke-linecap:round;
  animation:${Loading} 4500ms ease-in-out infinite alternate;
`;

const Box = styled.div`
  /* top:60%;
  left:50%; */
  /* transform:translate(-50%,-50%); */
  width:100px;
  height:100px;
  overflow:hidden;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
`;
