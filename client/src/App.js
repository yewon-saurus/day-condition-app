import React from 'react';
import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

import router from './router';
import Header from './shared/components/Header';

const Width640pxDiv = styled.div`
width: 600px;
margin: auto;
border: 1px solid #dddddd;

@media (max-width: 640px) {
  width: 100%;
}
`;

const BodyStyled = styled.div`
padding: 1em;
`;

function App() {
  return (
    <div className="App">
      <Width640pxDiv>
        <Header />
        
        <BodyStyled>
          <RouterProvider router={router}></RouterProvider>
        </BodyStyled>
      </Width640pxDiv>
    </div>
  );
}

export default App;
