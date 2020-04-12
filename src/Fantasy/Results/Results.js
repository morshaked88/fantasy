import React from 'react';
import styled from 'styled-components';

const Results = () => {

    return (
        <Box>
            <Title>LATEST RESULTS</Title>
            <Box2>
                <Res>
                    <Box3>
                        <Logo src='/assests/images/Arsenal.png' alt='logo' /> <Text>1-0</Text><Logo src='/assests/images/dortmund.png' alt='logo' />
                    </Box3>
                    <Box3>
                        <Logo src='/assests/images/Arsenal.png' alt='logo' /> <Text>3-1</Text><Logo src='/assests/images/dortmund.png' alt='logo' />
                    </Box3>
                    <Box3>
                        <Logo src='/assests/images/Arsenal.png' alt='logo' /> <Text>2-3</Text><Logo src='/assests/images/dortmund.png' alt='logo' />
                    </Box3>
                </Res>
                <Res>
                    <Box3>
                        <Logo src='/assests/images/Arsenal.png' alt='logo' /> <Text>1-2</Text><Logo src='/assests/images/dortmund.png' alt='logo' />
                    </Box3>
                    <Box3>

                        <Logo src='/assests/images/Arsenal.png' alt='logo' /> <Text>1-1</Text><Logo src='/assests/images/dortmund.png' alt='logo' />
                    </Box3>
                    <Box3>

                        <Logo src='/assests/images/Arsenal.png' alt='logo' /> <Text>0-3</Text><Logo src='/assests/images/dortmund.png' alt='logo' />
                    </Box3>
                </Res>
            </Box2>
        </Box>
    )
};

export default Results;

const Box3 = styled.div`
display: flex;
margin: 1rem 0;
`;

const Text = styled.div`
color: #eee;
margin: 0 0.5rem;
font-size: 1.8rem;
letter-spacing: 0.3rem;
font-weight: bold;
`;

const Logo = styled.img`
height: 3rem;
`;

const Res = styled.div`
height: 100%;
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Box2 = styled.div`
display: flex;
width: 100%;

`;

const Title = styled.h2`
text-align: center;
font-family: 'Archivo Black', sans-serif;
font-size: 2rem;
color: #eee;
margin: 1.8rem 0;
`;


const Box = styled.div`
display: flex;
flex-direction: column;
border-bottom: 0.2rem solid black;
padding-bottom: 1.8rem;
width: 100%;
`;


