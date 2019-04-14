import React from 'react';
import styled from 'styled-components';

const AppBarContainer = styled.div`
  width: 100%;
  height: 72px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: #2f2f2f;
`;

const ProfilePhoto = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #fff;
  display: inline-flex;
  background-image: url(https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 16px;
  top: 16px;
`;

const AppBar = ({}) => (
  <AppBarContainer>
    <ProfilePhoto />
    Discover
  </AppBarContainer>

);

export default AppBar;
