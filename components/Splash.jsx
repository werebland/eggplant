import React from 'react';
import styled from 'styled-components';

const SplashContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(-42deg, #845EC2 0%, #C493FF 100%);
  color: #fff;
`;

const Splash = ({ handleAuth }) => (
  <SplashContainer>
    Welcome to
    <br/>
    Instant
    Connections
    <br/>
    <span onClick={() => handleAuth()}>
      Log in with Facebook
    </span>
  </SplashContainer>
);

export default Splash;
