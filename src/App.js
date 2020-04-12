import React from 'react';
import styled from 'styled-components';
import { DataProvider } from './Store/DataProvider';

import TV from './TV/TV';
import SideDrawer from './Fantasy/SideDrawer';

function App() {

  return (
    <DataProvider>
      <Wrapper>
        <TV />
        <SideDrawer />
      </Wrapper>
    </DataProvider>
  );
}

export default App;

const Wrapper = styled.div`
width: 100%;
height: 100vh;
overflow: hidden;
display: flex;
`;